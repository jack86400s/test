const fs = require("fs");
const path = require("path");
const decodeUuid = require("./decode-uuid");

const srcDir = path.resolve("../126");

const baseDirName = 'z_'.concat(path.parse(srcDir).name);
const destDir = path.resolve('./'.concat(baseDirName));

console.log('srcDir:', srcDir)
console.log('destDir:', destDir);

const configFileArray = iterateFiles(srcDir, 'config')

// 遍历文件
function iterateFiles(filePath, includes) {
    const fileArray = []
    const iterate = function (filePath, includes) {
        const files = fs.readdirSync(filePath);
        files.forEach((filename) => {
            const filedir = path.join(filePath, filename);
            const stats = fs.statSync(filedir);
            if (stats.isDirectory()) {
                iterate(filedir, includes);
            }
            if (stats.isFile()) {
                if (includes && filename.includes(includes)) {
                    fileArray.push(filedir);
                }
                if (!includes) {
                    fileArray.push(filedir);
                }
            }
        })
    }
    iterate(filePath, includes);
    return fileArray
}

console.log('---> 完成')


function replace_uuids(work_path, json_data) {
    const uuidMap = []
    const uuids = json_data.uuids
    for (const uuid of uuids) {
        uuidMap.push({
            id: uuid,
            uuid: decodeUuid(uuid)
        })
    }
    return uuidMap
}

const notPath = []

function iterate_paths(work_path, json_data, uuidArray) {
    const paths = json_data.paths
    const versions = json_data.versions
    const types = json_data.types
    for (const val in paths) {
        const uuid_index = parseInt(val)
        const uuid_path = paths[val][0]
        const uuid_type = types[paths[val][1]]
        const uuid = uuidArray[uuid_index].uuid
        const uuid1 = uuidArray[uuid_index].id

        // 在import和native两个目录下判断{对应uuid前两位}/{对应uuid}.*
        const importAll = []
        const import_versions = versions.import
        const import_path = path.join(work_path, 'import')
        if (fs.existsSync(import_path)) {
            const import_files = fs.readdirSync(import_path);
            import_files.forEach((filedir) => {
                importAll.push(filedir);
                if (uuid.substring(0, 2) === filedir) {
                    const files = fs.readdirSync(path.join(import_path, filedir));
                    const versions = import_versions[uuid_index];

                    let file_name = ''
                    files.forEach((filename) => {
                        file_name = filename.includes(uuid) ? filename : ''
                    })

                    if (file_name.length > 0) {
                        const src_file = path.join(import_path, filedir, file_name)
                        const des_file = path.join(destDir, uuid_path, file_name)
                        const des_dir = path.join(destDir, uuid_path)
                        const stats = fs.statSync(src_file);

                        if (uuid_type !== 'cc.TTFFont') {
                            // console.log('import:', uuid_path, filename);
                            fs.mkdirSync(des_dir, {recursive: true});

                            if (uuid_type === 'cc.Texture2D') {
                                // console.log('import uuid_type :', uuid_type, src_file, des_dir, 'uuid1:', uuid1);
                            }

                            if (stats.isFile()) {
                                fs.copyFileSync(src_file, des_file);
                            }
                        }
                    } else {
                        let file_name_1 = uuid;
                        if (versions) {
                            file_name_1 = file_name_1.concat('.', versions);
                        }
                        const src_file = path.join(import_path, filedir, file_name_1.concat('.json'))
                        notPath.push(src_file)
                        // console.log('not import:', src_file);
                    }
                }
            })
        }

        const native_versions = versions.native
        const native_path = path.join(work_path, 'native')
        if (fs.existsSync(native_path)) {
            const native_files = fs.readdirSync(native_path);
            native_files.forEach((filedir) => {
                if (uuid.substring(0, 2) === filedir) {
                    const files = fs.readdirSync(path.join(native_path, filedir));
                    const versions = native_versions[uuid_index];

                    let file_name = ''
                    files.forEach((filename) => {
                        file_name = filename.includes(uuid) ? filename : ''
                    })

                    if (file_name.length > 0) {
                        let src_file = path.join(native_path, filedir, file_name)
                        let des_file = path.join(destDir, uuid_path, file_name)
                        let des_dir = path.join(destDir, uuid_path)
                        let stats = fs.statSync(src_file);

                        if (uuid_type === 'cc.Texture2D') {
                            // console.log('native uuid_type :', uuid_type, src_file, des_dir, 'uuid1:', uuid1);

                            // 还原 .fnt 文件
                            importAll.forEach((value, index, array) => {
                                const files = fs.readdirSync(path.join(import_path, value));
                                files.forEach((filename) => {
                                    if (!filename.includes('.json')) {
                                        return
                                    }
                                    const p = path.join(import_path, value, filename)
                                    const data = fs.readFileSync(p, {
                                        encoding: 'utf8',
                                        flag: 'r'
                                    })
                                    const json_data = JSON.parse(data)
                                    if (!(json_data[1] instanceof Array) || json_data[1].indexOf(uuid1) === -1) {
                                        return
                                    }
                                    if (!(json_data[2] instanceof Array)) {
                                        return
                                    }
                                    // console.log('native uuid1', uuid1, json_data[1], ' json_data :', json_data);
                                    const i1 = json_data[2].findIndex((value) => value === '_textureSetter');
                                    const i2 = json_data[2].findIndex((value) => value === 'spriteFrame');
                                    if (i1 === -1 || i2 === -1) {
                                        return
                                    }
                                    if (json_data[3][1][0] !== 'cc.BitmapFont') {
                                        return
                                    }
                                    // console.log('native d3:', i1, json_data[3], 'f:',json_data[3][1][0]);
                                    const textureSetter = json_data[5][i1][0][0]
                                    const spriteFrame = json_data[5][i2][0][0]
                                    const fontDef = spriteFrame[3]
                                    const fontDefDictionary = fontDef.fontDefDictionary
                                    // console.log('native p:', p, ' textureSetter:', textureSetter, 'spriteFrame:', spriteFrame);
                                    let _textureSetter =
                                        `info face="Arial" size=32 bold=0 italic=0 charset="" unicode=1 stretchH=100 smooth=1 aa=1 padding=0,0,0,0 spacing=1,1 outline=0
common lineHeight=32 base=26 scaleW=256 scaleH=256 pages=1 packed=0 alphaChnl=4 redChnl=0 greenChnl=0 blueChnl=0
page id=0 file="${fontDef.atlasName}"
chars count=${Object.keys(fontDefDictionary).length}\n`

                                    Object.keys(fontDefDictionary).forEach((value, index) => {
                                        // console.log('native _textureSetter:', fontDefDictionary[value]);
                                        const fontDef = fontDefDictionary[value]
                                        _textureSetter += `char id=${value}   x=${fontDef.rect.x}   y=${fontDef.rect.y}     width=${fontDef.rect.width}     height=${fontDef.rect.height}     xoffset=${fontDef.xOffset}     yoffset=${fontDef.yOffset}     xadvance=${fontDef.xAdvance}     page=0  chnl=15\n`
                                    })
                                    const fpcc = path.join(destDir, uuid_path+'.fnt')
                                    console.log('native des_file:', fpcc);

                                    writeFileData(fpcc, _textureSetter)
                                })

                            })


                        }


                        // console.log('native:', uuid_path, filename);
                        if (stats.isFile()) {
                            if (uuid_type === 'cc.Texture2D') {
                                let s1 = file_name.split('.')
                                des_file = des_dir + '.' + s1[s1.length - 1]
                                des_dir = path.join(des_dir, '../')
                            }

                            fs.mkdirSync(des_dir, {recursive: true});
                            fs.copyFileSync(src_file, des_file);
                        } else {
                            let f2 = fs.readdirSync(src_file);
                            file_name = f2[0]
                            des_file = path.join(destDir, uuid_path, file_name)

                            const p1 = path.join(src_file, file_name)

                            if (uuid_type === 'cc.TTFFont') {
                                let s1 = file_name.split('.')
                                des_file = des_dir + '.' + s1[s1.length - 1]
                                des_dir = path.join(des_dir, '../')
                            }

                            fs.mkdirSync(des_dir, {recursive: true});
                            fs.copyFileSync(p1, des_file);
                            // console.log('native p1 :', p1);
                        }
                    } else {
                        let file_name_1 = uuid;
                        if (versions) {
                            file_name_1 = file_name_1.concat('.', versions);
                        }
                        const src_file = path.join(native_path, filedir, file_name_1.concat('.png'))
                        notPath.push(src_file)
                        // console.log('not native:', src_file);
                    }
                }
            })
        }
    }
}

// 抽取还原目录
function read_config(filepath) {
    const work_path = path.parse(filepath).dir;
    const data = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'})
    const json_data = JSON.parse(data)
    const uuidArray = replace_uuids(work_path, json_data)
    iterate_paths(work_path, json_data, uuidArray)
}

// spine JSON文件的提取
function parse_json_files(work_path) {
    // console.log(work_path);
    const fileJson = iterateFiles(work_path, '.json');
    fileJson.forEach((file) => {
        const data = fs.readFileSync(file, {encoding: 'utf8', flag: 'r'})
        const json_data = JSON.parse(data)

        if (json_data[3][0][0] === 'cc.AudioClip') {

        }

        if (json_data[3][0][0] === 'sp.SkeletonData') {

            const spine_data = json_data[5][0]
            const spine_dir = path.parse(file).dir.split('/');
            const spine_name = spine_dir[spine_dir.length - 1];

            const f_json = path.join(file, '../../', spine_name.concat('.json')).replace(baseDirName, baseDirName.concat('_1'));
            const d_json = spine_data[4]
            writeFileData(f_json, JSON.stringify(d_json))

            const f_atlas = path.join(file, '../../', spine_name.concat('.atlas')).replace(baseDirName, baseDirName.concat('_1'))
            const d_atlas = spine_data[2]
            writeFileData(f_atlas, d_atlas)

            const png_files = []
            iterateFiles(path.parse(file).dir).forEach((f) => {
                if (f.endsWith('.png')) {
                    png_files.push(f)
                }
            })
            if (png_files.length > 1) {
                console.error('error: 出现多个.png，目录: ', path.parse(file).dir)
            } else if (png_files.length === 1) {
                const png_file = png_files[0]
                const f_png = path.join(png_file, '../../', spine_name.concat('.png')).replace(baseDirName, baseDirName.concat('_1'))
                fs.mkdirSync(path.parse(f_png).dir, {recursive: true});
                fs.copyFileSync(png_file, f_png);
            }
        }


    })
}

function writeFileData(file, data) {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file)
    }
    fs.mkdirSync(path.parse(file).dir, {recursive: true});
    fs.writeFileSync(file, data)
}


configFileArray.forEach(file => {
    // console.log(file);
    read_config(file)
})
// parse_json_files(destDir)













