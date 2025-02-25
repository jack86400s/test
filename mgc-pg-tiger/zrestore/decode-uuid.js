/*
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/**
 * @packageDocumentation
 * @module core
 */


//import { BASE64_VALUES } from './misc';
//////////////////////////////////////
const BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const values = new Array(123); // max char code in base64Keys
for (let i = 0; i < 123; ++i) { values[i] = 64; } // fill with placeholder('=') index
for (let i = 0; i < 64; ++i) { values[BASE64_KEYS.charCodeAt(i)] = i; }

// decoded value indexed by base64 char code
const BASE64_VALUES = values;
//////////////////////////////////////



const HexChars = '0123456789abcdef'.split('');

const _t = ['', '', '', ''];
const UuidTemplate = _t.concat(_t, '-', _t, '-', _t, '-', _t, '-', _t, _t, _t);
const Indices = UuidTemplate.map((x, i) => (x === '-' ? NaN : i)).filter(isFinite);

/**
 * @en
 * Decode uuid, returns the original uuid
 *
 * @zh
 * 解码 uuid，返回原始 uuid
 *
 * @param  base64 - the encoded uuid
 * @returns the original uuid
 *
 * @example
 * ```ts
 * const uuid = 'fcmR3XADNLgJ1ByKhqcC5Z';
 * const originalUuid = decodeUuid(uuid); // fc991dd7-0033-4b80-9d41-c8a86a702e59
 * ```
 */
module.exports = function decodeUuid (base64) {
    const strs = base64.split('@');
    const uuid = strs[0];
    if (uuid.length !== 22) {
        return base64;
    }
    UuidTemplate[0] = base64[0];
    UuidTemplate[1] = base64[1];
    for (let i = 2, j = 2; i < 22; i += 2) {
        const lhs = BASE64_VALUES[base64.charCodeAt(i)];
        const rhs = BASE64_VALUES[base64.charCodeAt(i + 1)];
        UuidTemplate[Indices[j++]] = HexChars[lhs >> 2];
        UuidTemplate[Indices[j++]] = HexChars[((lhs & 3) << 2) | rhs >> 4];
        UuidTemplate[Indices[j++]] = HexChars[rhs & 0xF];
    }
    return base64.replace(uuid, UuidTemplate.join(''));
}
