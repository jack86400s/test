var express = require('express');
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());//app.use(bodyParser.urlencoded({ extended: false }));// 创建 application/x-www-form-urlencoded 编码解析
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,AccessToken,X-CSRF-Token, Authorization, Token, UserId, uid, mid, skey, btt");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");//application/x-protobuf
    next();
});





// //https://api.pgf-nmu2nd.com/web-api/auth/session/v2/verifyOperatorPlayerSession?traceId=JZMJSU28
// app.post('/web-api/auth/session/v2/verifyOperatorPlayerSession',function(req,res){
//     var ret = {"dt":{"lut":0,"bs":null},"err":null}
//     res.send(JSON.stringify(ret))
// });

//https://api.pgf-nmu2nd.com/web-api/auth/session/v2/verifyOperatorPlayerSession?traceId=JZMJSU28
app.post('/web-api/auth/session/v2/verifyOperatorPlayerSession',function(req,res){
    var ret = {
        "dt": {
            "oj": {
                "jid": 0
            },
            "pid": "BoWDTN78Gk",
            "pcd": "65bf795edb730eaea4ea4bb2:1009",
            "tk": "E34D9C1A-0BA2-468B-8E58-75BE16D7020E",
            "st": 1,
            "geu": "game-api/fortune-tiger/",
            "lau": "/game-api/lobby/",
            "bau": "web-api/game-proxy/",
            "cc": "PHP",
            "cs": "₱",
            "nkn": "65bf795edb730eaea4ea4bb2:1009",
            "gm": [
                {
                    "gid": 126,
                    "msdt": 1638432092000,
                    "medt": 1638432092000,
                    "st": 1,
                    "amsg": "",
                    "rtp": {
                        "df": {
                            "min": 96.81,
                            "max": 96.81
                        }
                    },
                    "mxe": 2500,
                    "mxehr": 8960913
                }
            ],
            "uiogc": {
                "bb": 0,
                "grtp": 1,
                "gec": 0,
                "cbu": 0,
                "cl": 0,
                "bf": 0,
                "mr": 0,
                "phtr": 0,
                "vc": 0,
                "bfbsi": 1,
                "bfbli": 1,
                "il": 0,
                "rp": 0,
                "gc": 1,
                "ign": 1,
                "tsn": 0,
                "we": 0,
                "gsc": 0,
                "bu": 0,
                "pwr": 0,
                "hd": 0,
                "et": 0,
                "np": 0,
                "igv": 0,
                "as": 0,
                "asc": 0,
                "std": 0,
                "hnp": 0,
                "ts": 0,
                "smpo": 0,
                "ivs": 1,
                "ir": 0,
                "hn": 1
            },
            "ec": [
                {
                    "n": "132bb011e7",
                    "v": "10",
                    "il": 0,
                    "om": 0,
                    "uie": {
                        "ct": "1"
                    }
                },
                {
                    "n": "5e3d8c75c3",
                    "v": "6",
                    "il": 0,
                    "om": 0,
                    "uie": {
                        "ct": "1"
                    }
                }
            ],
            "occ": {
                "rurl": "",
                "tcm": "",
                "tsc": 0,
                "ttp": 0,
                "tlb": "",
                "trb": ""
            },
            "ioph": "747a754573de"
        },
        "err": null
    }
    res.send(JSON.stringify(ret))
});

//https://api.pgf-nmu2nd.com/web-api/auth/session/v2/verifySession?traceId=IQSUKD29
app.post('/web-api/auth/session/v2/verifySession',function(req,res){
    var ret = {
        "dt": {
            "oj": {
                "jid": 0
            },
            "pid": "BoWDTN78Gk",
            "pcd": "65bf795edb730eaea4ea4bb2:1009",
            "tk": "E34D9C1A-0BA2-468B-8E58-75BE16D7020E",
            "st": 1,
            "geu": "game-api/fortune-tiger/",
            "lau": "/game-api/lobby/",
            "bau": "web-api/game-proxy/",
            "cc": "PHP",
            "cs": "₱",
            "nkn": "65bf795edb730eaea4ea4bb2:1009",
            "gm": [
                {
                    "gid": 126,
                    "msdt": 1638432092000,
                    "medt": 1638432092000,
                    "st": 1,
                    "amsg": "",
                    "rtp": {
                        "df": {
                            "min": 96.81,
                            "max": 96.81
                        }
                    },
                    "mxe": 2500,
                    "mxehr": 8960913
                }
            ],
            "uiogc": {
                "bb": 0,
                "grtp": 1,
                "gec": 0,
                "cbu": 0,
                "cl": 0,
                "bf": 0,
                "mr": 0,
                "phtr": 0,
                "vc": 0,
                "bfbsi": 1,
                "bfbli": 1,
                "il": 0,
                "rp": 0,
                "gc": 1,
                "ign": 1,
                "tsn": 0,
                "we": 0,
                "gsc": 0,
                "bu": 0,
                "pwr": 0,
                "hd": 0,
                "et": 0,
                "np": 0,
                "igv": 0,
                "as": 0,
                "asc": 0,
                "std": 0,
                "hnp": 0,
                "ts": 0,
                "smpo": 0,
                "ivs": 1,
                "ir": 0,
                "hn": 1
            },
            "ec": [
                {
                    "n": "132bb011e7",
                    "v": "10",
                    "il": 0,
                    "om": 0,
                    "uie": {
                        "ct": "1"
                    }
                },
                {
                    "n": "5e3d8c75c3",
                    "v": "6",
                    "il": 0,
                    "om": 0,
                    "uie": {
                        "ct": "1"
                    }
                }
            ],
            "occ": {
                "rurl": "",
                "tcm": "",
                "tsc": 0,
                "ttp": 0,
                "tlb": "",
                "trb": ""
            },
            "ioph": "747a754573de"
        },
        "err": null
    }
    res.send(JSON.stringify(ret))
});

//https://api.pgf-nmu2nd.com/game-api/fortune-tiger/v2/GameInfo/Get?traceId=FBSOED29
app.post('/game-api/fortune-tiger/v2/GameInfo/Get',function(req,res){
    var ret = {
        "dt": {
            "fb": null,
            "wt": {
                "mw": 5.0,
                "bw": 20.0,
                "mgw": 35.0,
                "smgw": 50.0
            },
            "maxwm": null,
            "cs": [//设置投注大小
                0.2,
                2.0,
                20.0,
                100.0
            ],
            "ml": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10
            ],
            "mxl": 5,
            "bl": 0.00,
            "inwe": false,
            "iuwe": false,
            "ls": {
                "si": {
                    "wc": 3,
                    "ist": false,
                    "itw": false,
                    "fws": 0,
                    "wp": null,
                    "orl": null,
                    "lw": null,
                    "irs": false,
                    "gwt": 0,
                    "fb": null,
                    "ctw": 0.0,
                    "pmt": null,
                    "cwc": 0,
                    "fstc": null,
                    "pcwc": 0,
                    "rwsp": null,
                    "hashr": null,
                    "ml": 1,//设置初始投注等级
                    "cs": 0.2,//设置初始投注大小
                    "rl": [//设置初始卷轴上的符号
                        2,
                        3,
                        4,
                        0,
                        0,
                        0,
                        5,
                        6,
                        7
                    ],
                    "sid": "0",
                    "psid": "0",
                    "st": 1,
                    "nst": 1,
                    "pf": 0,
                    "aw": 0.00,
                    "wid": 0,
                    "wt": "C",
                    "wk": "0_C",
                    "wbn": null,
                    "wfg": null,
                    "blb": 0.00,
                    "blab": 0.00,
                    "bl": 0.00,
                    "tb": 0.00,
                    "tbb": 0.00,
                    "tw": 0.00,
                    "np": 0.00,
                    "ocr": null,
                    "mr": null,
                    "ge": null
                }
            },
            "cc": "PHP"
        },
        "err": null
    }
    res.send(JSON.stringify(ret))
});

//https://api.pgf-nmu2nd.com/web-api/game-proxy/v2/Resources/GetByReferenceIdsResourceTypeIds?traceId=CWVLCS27
app.post('/web-api/game-proxy/v2/Resources/GetByReferenceIdsResourceTypeIds',function(req,res){
    var ret = {}
    res.send(JSON.stringify(ret))
});

//https://api.pgf-nmu2nd.com/web-api/game-proxy/v2/Resources/GetByResourcesTypeIds?traceId=NEEGKS27
app.post('/web-api/game-proxy/v2/Resources/GetByResourcesTypeIds',function(req,res){
    var ret={
        "dt": [
            {
                "rid": 0,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/0/default_icon-f63c84ba.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 2,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/2/GemSaviour_168x168-ab06cffe.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 3,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/3/FortuneGods_168x168-3aff733d.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 6,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/6/Medusa2_168x168-2a9f180b.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 7,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/7/Medusa1_168x168-d4608fed.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 18,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/18/HoodWolf_168x168-843c442f.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 24,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/24/WinWinWon_168x168-913cf3ef.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 25,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/25/PlushieFrenzy_168x168-ab029c99.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 28,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/28/Hotpot_168x168-d59cd564.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 29,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/29/DragonLegend_168x168-91db6a15.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 31,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/31/BaccaratDeluxe_168x168-d60abb20.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 33,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/33/HipHopPanda_168x168-15547bc6.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 34,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/34/LegendofHouYi_168x168-13f58e2b.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 35,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/35/Mr.Hallow_168x168-d9bf8dcf.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 36,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/36/ProsperityLion_168x168_-92038410.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 37,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/37/SantasGiftRush_168x168-c54bc748.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 38,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/38/GemSaviourSword_168x168-e0c2f395.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 39,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/39/PiggyGold_168x168-7c105c37.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 40,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/40/JungleDelight_168x168-5c2bb748.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 41,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/41/SymbolsofEgypt_168x168-29fa097f.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 42,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/42/GaneshaGold_168x168-cdedd446.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 44,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/44/EmperorsFavour_168x168-fea2651e.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 48,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/48/DoubleFortune_168x168-8e865d56.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 50,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/50/JourneytotheWealth_168x168-5eb1be65.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 53,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/53/TheGreatIcescape_168x168_-507c8898.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 54,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/54/CaptainsBounty_168x168-f50bc63d.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 59,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/59/NinjavsSamurai_168x168-e2a52085.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 60,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/60/LeprechaunRiches_168x168-0b05dc84.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 61,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/61/FlirtingScholar_168x168-03cb5d2d.png",
                "l": "en-US",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 0,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/0/default_icon-f63c84ba.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 1,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/1/HoneyTrap_of_DiaoChan_168x168-b93b8e16.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 2,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/2/GemSaviour_168x168-ab06cffe.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 3,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/3/FortuneGods_168x168-3aff733d.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 6,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/6/Medusa2_168x168-2a9f180b.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 7,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/7/Medusa1_168x168-d4608fed.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:09"
            },
            {
                "rid": 18,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/18/HoodWolf_168x168-843c442f.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 24,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/24/WinWinWon_168x168-913cf3ef.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 25,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/25/PlushieFrenzy_168x168-ab029c99.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 28,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/28/Hotpot_168x168-d59cd564.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 29,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/29/DragonLegend_168x168-91db6a15.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 31,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/31/BaccaratDeluxe_168x168-d60abb20.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 33,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/33/HipHopPanda_168x168-15547bc6.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 34,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/34/LegendofHouYi_168x168-13f58e2b.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 35,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/35/Mr.Hallow_168x168-d9bf8dcf.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 36,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/36/ProsperityLion_168x168_-92038410.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 37,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/37/SantasGiftRush_168x168-c54bc748.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 38,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/38/GemSaviourSword_168x168-e0c2f395.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 39,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/39/PiggyGold_168x168-7c105c37.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 40,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/40/JungleDelight_168x168-5c2bb748.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 41,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/41/SymbolsofEgypt_168x168-29fa097f.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 42,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/42/GaneshaGold_168x168-cdedd446.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 44,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/44/EmperorsFavour_168x168-fea2651e.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 48,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/48/DoubleFortune_168x168-8e865d56.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 50,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/50/JourneytotheWealth_168x168-5eb1be65.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 53,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/53/TheGreatIcescape_168x168_-507c8898.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 54,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/54/CaptainsBounty_168x168-f50bc63d.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 59,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/59/NinjavsSamurai_168x168-e2a52085.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 61,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/61/FlirtingScholar_168x168-03cb5d2d.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 60,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/60/LeprechaunRiches_168x168-0b05dc84.png",
                "l": "zh-CN",
                "ut": "2019-09-27T10:57:10"
            },
            {
                "rid": 62,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/62/GemSaviourConquest_168x168-3bff30bd.png",
                "l": "zh-CN",
                "ut": "2019-09-30T04:54:27"
            },
            {
                "rid": 62,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/62/GemSaviourConquest_168x168-3bff30bd.png",
                "l": "en-US",
                "ut": "2019-09-30T04:54:27"
            },
            {
                "rid": 64,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/64/MuayThai_168x168-8638e0c1.png",
                "l": "zh-CN",
                "ut": "2019-10-01T12:08:20"
            },
            {
                "rid": 64,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/64/MuayThai_168x168-8638e0c1.png",
                "l": "en-US",
                "ut": "2019-10-01T12:08:21"
            },
            {
                "rid": 63,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/63/DragonTigerLuck_168x168-5894f51d.png",
                "l": "zh-CN",
                "ut": "2019-10-03T08:07:13"
            },
            {
                "rid": 63,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/63/DragonTigerLuck_168x168-5894f51d.png",
                "l": "en-US",
                "ut": "2019-10-03T08:07:13"
            },
            {
                "rid": 65,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/65/MahjongWays_168x168-cc7e08cc.png",
                "l": "zh-CN",
                "ut": "2019-10-18T09:33:17"
            },
            {
                "rid": 20,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/20/ReelLove_168x168-5038627d.png",
                "l": "zh-CN",
                "ut": "2019-11-22T04:42:03"
            },
            {
                "rid": 20,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/20/ReelLove_168x168-5038627d.png",
                "l": "en-US",
                "ut": "2019-11-22T04:42:03"
            },
            {
                "rid": 57,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/57/DragonHatch_168x168-456337e5.png",
                "l": "zh-CN",
                "ut": "2019-12-16T08:30:33"
            },
            {
                "rid": 57,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/57/DragonHatch_168x168-456337e5.png",
                "l": "en-US",
                "ut": "2019-12-16T08:30:33"
            },
            {
                "rid": 68,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/68/FortuneMouse_168x168-47dbb338.png",
                "l": "zh-CN",
                "ut": "2019-12-27T09:28:28"
            },
            {
                "rid": 68,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/68/FortuneMouse_168x168-47dbb338.png",
                "l": "en-US",
                "ut": "2019-12-27T09:28:29"
            },
            {
                "rid": 70,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/70/Candy Burst 168x168.png",
                "l": "zh-CN",
                "ut": "2020-02-13T09:58:37"
            },
            {
                "rid": 70,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/70/Candy Burst 168x168.png",
                "l": "en-US",
                "ut": "2020-02-13T09:58:37"
            },
            {
                "rid": 71,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/71/caishen-wins_168_168-86186b0c.png",
                "l": "zh-CN",
                "ut": "2020-02-19T02:50:48"
            },
            {
                "rid": 71,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/71/caishen-wins_168_168-86186b0c.png",
                "l": "en-US",
                "ut": "2020-02-19T02:50:48"
            },
            {
                "rid": 67,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/67/ShaolinSoccer_168x168-35282522.png",
                "l": "zh-CN",
                "ut": "2020-02-19T03:15:29"
            },
            {
                "rid": 67,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/67/ShaolinSoccer_168x168-35282522.png",
                "l": "en-US",
                "ut": "2020-02-19T03:15:29"
            },
            {
                "rid": 74,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/74/MahjongWaysTwo_168x168-1e5dbeee.png",
                "l": "zh-CN",
                "ut": "2020-03-06T08:37:45"
            },
            {
                "rid": 74,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/74/MahjongWaysTwo_168x168-1e5dbeee.png",
                "l": "en-US",
                "ut": "2020-03-06T08:37:45"
            },
            {
                "rid": 69,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/69/BikiniParadise_168x168-663109e3.png",
                "l": "zh-CN",
                "ut": "2020-03-19T09:46:20"
            },
            {
                "rid": 73,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/73/EgyptsBook_168_168-6ff312b3.png",
                "l": "zh-CN",
                "ut": "2020-04-07T10:20:11"
            },
            {
                "rid": 73,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/73/EgyptsBook_168_168-6ff312b3.png",
                "l": "en-US",
                "ut": "2020-04-07T10:20:11"
            },
            {
                "rid": 75,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/75/GaneshaFortune_168_168-8c160aaa.png",
                "l": "zh-CN",
                "ut": "2020-04-14T06:57:08"
            },
            {
                "rid": 75,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/75/GaneshaFortune_168_168-8c160aaa.png",
                "l": "en-US",
                "ut": "2020-04-14T06:57:08"
            },
            {
                "rid": 82,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/82/SGS-e7840b27.png",
                "l": "zh-CN",
                "ut": "2020-05-28T02:37:39"
            },
            {
                "rid": 82,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/82/SGS-e7840b27.png",
                "l": "en-US",
                "ut": "2020-05-28T02:37:39"
            },
            {
                "rid": 79,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/79/SGS-ea3acc20.png",
                "l": "zh-CN",
                "ut": "2020-06-03T07:50:47"
            },
            {
                "rid": 79,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/79/SGS-ea3acc20.png",
                "l": "en-US",
                "ut": "2020-06-03T07:50:47"
            },
            {
                "rid": 83,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/83/SGS-215874f9.png",
                "l": "zh-CN",
                "ut": "2020-06-16T01:50:12"
            },
            {
                "rid": 83,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/83/SGS-215874f9.png",
                "l": "en-US",
                "ut": "2020-06-16T01:50:12"
            },
            {
                "rid": 85,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/85/SGS-b0340781.png",
                "l": "zh-CN",
                "ut": "2020-07-06T09:33:28"
            },
            {
                "rid": 80,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/80/SGS-eab4819f.png",
                "l": "zh-CN",
                "ut": "2020-07-08T08:39:10"
            },
            {
                "rid": 80,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/80/SGS-eab4819f.png",
                "l": "en-US",
                "ut": "2020-07-08T08:39:10"
            },
            {
                "rid": 84,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/84/SGS-88a1b15b.png",
                "l": "zh-CN",
                "ut": "2020-07-17T02:34:13"
            },
            {
                "rid": 84,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/84/SGS-88a1b15b.png",
                "l": "en-US",
                "ut": "2020-07-17T02:34:13"
            },
            {
                "rid": 92,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/92/SGS-6814e138.png",
                "l": "zh-CN",
                "ut": "2020-07-24T03:40:00"
            },
            {
                "rid": 69,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/69/BikiniParadise_168x168-663109e3.png",
                "l": "en-US",
                "ut": "2020-07-24T07:57:50"
            },
            {
                "rid": 85,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/85/SGS-b0340781.png",
                "l": "en-US",
                "ut": "2020-07-27T11:08:59"
            },
            {
                "rid": 65,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/65/MahjongWays_168x168-cc7e08cc.png",
                "l": "en-US",
                "ut": "2020-07-27T13:51:59"
            },
            {
                "rid": 86,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/86/SGS-98a0a8a5.png",
                "l": "zh-CN",
                "ut": "2020-07-28T12:03:48"
            },
            {
                "rid": 86,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/86/SGS-98a0a8a5.png",
                "l": "en-US",
                "ut": "2020-07-28T12:03:48"
            },
            {
                "rid": 87,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/87/SGS-a63b7158.png",
                "l": "zh-CN",
                "ut": "2020-07-29T09:47:50"
            },
            {
                "rid": 87,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/87/SGS-a63b7158.png",
                "l": "en-US",
                "ut": "2020-07-29T09:47:50"
            },
            {
                "rid": 58,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/58/SGS-777a1211.png",
                "l": "zh-CN",
                "ut": "2020-08-07T08:05:18"
            },
            {
                "rid": 58,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/58/SGS-777a1211.png",
                "l": "en-US",
                "ut": "2020-08-07T08:05:18"
            },
            {
                "rid": 90,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/90/SGS-aa9b055c.png",
                "l": "zh-CN",
                "ut": "2020-08-21T07:12:00"
            },
            {
                "rid": 90,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/90/SGS-aa9b055c.png",
                "l": "en-US",
                "ut": "2020-08-21T07:12:00"
            },
            {
                "rid": 92,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/92/SGS-6814e138.png",
                "l": "en-US",
                "ut": "2020-09-01T03:51:33"
            },
            {
                "rid": 93,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/93/SGS-b30b213e.png",
                "l": "zh-CN",
                "ut": "2020-09-17T03:34:59"
            },
            {
                "rid": 93,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/93/SGS-b30b213e.png",
                "l": "en-US",
                "ut": "2020-09-17T03:34:59"
            },
            {
                "rid": 88,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/88/SGS-0d34a88c.png",
                "l": "zh-CN",
                "ut": "2020-09-28T09:10:25"
            },
            {
                "rid": 88,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/88/SGS-0d34a88c.png",
                "l": "en-US",
                "ut": "2020-09-28T09:10:25"
            },
            {
                "rid": 97,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/97/SGS-bb7bb55f.png",
                "l": "zh-CN",
                "ut": "2020-09-29T07:32:56"
            },
            {
                "rid": 97,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/97/SGS-bb7bb55f.png",
                "l": "en-US",
                "ut": "2020-09-29T07:32:56"
            },
            {
                "rid": 94,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/94/SGS-0f58b776.png",
                "l": "zh-CN",
                "ut": "2020-09-29T07:33:48"
            },
            {
                "rid": 94,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/94/SGS-0f58b776.png",
                "l": "en-US",
                "ut": "2020-09-29T07:33:48"
            },
            {
                "rid": 101,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/101/SGS-cc58800d.png",
                "l": "zh-CN",
                "ut": "2020-10-08T08:03:23"
            },
            {
                "rid": 101,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/101/SGS-cc58800d.png",
                "l": "en-US",
                "ut": "2020-10-08T08:03:23"
            },
            {
                "rid": 98,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/98/SGS-1055ea51.png",
                "l": "zh-CN",
                "ut": "2020-10-09T07:08:00"
            },
            {
                "rid": 98,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/98/SGS-1055ea51.png",
                "l": "en-US",
                "ut": "2020-10-09T07:08:00"
            },
            {
                "rid": 102,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/102/SGS-91d7bdd3.png",
                "l": "zh-CN",
                "ut": "2020-10-12T09:13:27"
            },
            {
                "rid": 102,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/102/SGS-91d7bdd3.png",
                "l": "en-US",
                "ut": "2020-10-12T09:13:27"
            },
            {
                "rid": 103,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/103/SGS-e98163a9.png",
                "l": "zh-CN",
                "ut": "2020-10-14T03:09:00"
            },
            {
                "rid": 100,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/100/SGS-21100faf.png",
                "l": "zh-CN",
                "ut": "2020-10-14T03:32:54"
            },
            {
                "rid": 100,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/100/SGS-21100faf.png",
                "l": "en-US",
                "ut": "2020-10-14T03:32:54"
            },
            {
                "rid": 89,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/89/SGS-9bd8e453.png",
                "l": "zh-CN",
                "ut": "2020-10-16T08:24:50"
            },
            {
                "rid": 89,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/89/SGS-9bd8e453.png",
                "l": "en-US",
                "ut": "2020-10-16T08:24:50"
            },
            {
                "rid": 95,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/95/SGS-8722e77b.png",
                "l": "zh-CN",
                "ut": "2020-10-20T10:39:00"
            },
            {
                "rid": 95,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/95/SGS-8722e77b.png",
                "l": "en-US",
                "ut": "2020-10-20T10:39:00"
            },
            {
                "rid": 91,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/91/SGS-e39408d8.png",
                "l": "zh-CN",
                "ut": "2020-10-28T08:24:12"
            },
            {
                "rid": 91,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/91/SGS-e39408d8.png",
                "l": "en-US",
                "ut": "2020-10-28T08:24:12"
            },
            {
                "rid": 105,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/105/SGS-27954eca.png",
                "l": "zh-CN",
                "ut": "2020-10-28T10:32:33"
            },
            {
                "rid": 105,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/105/SGS-27954eca.png",
                "l": "en-US",
                "ut": "2020-10-28T10:32:33"
            },
            {
                "rid": 104,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/104/SGS-6d855692.png",
                "l": "zh-CN",
                "ut": "2020-10-28T10:32:33"
            },
            {
                "rid": 104,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/104/SGS-6d855692.png",
                "l": "en-US",
                "ut": "2020-10-28T10:32:33"
            },
            {
                "rid": 106,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/106/SGS-ab10c5f2.png",
                "l": "zh-CN",
                "ut": "2020-11-09T07:35:04"
            },
            {
                "rid": 106,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/106/SGS-ab10c5f2.png",
                "l": "en-US",
                "ut": "2020-11-09T07:35:04"
            },
            {
                "rid": 107,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/107/SGS-1834c440.png",
                "l": "zh-CN",
                "ut": "2020-11-09T07:35:04"
            },
            {
                "rid": 107,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/107/SGS-1834c440.png",
                "l": "en-US",
                "ut": "2020-11-09T07:35:04"
            },
            {
                "rid": 108,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/108/SGS-466aef35.png",
                "l": "zh-CN",
                "ut": "2020-12-01T03:24:24"
            },
            {
                "rid": 108,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/108/SGS-466aef35.png",
                "l": "en-US",
                "ut": "2020-12-01T03:24:24"
            },
            {
                "rid": 103,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/103/SGS-e98163a9.png",
                "l": "en-US",
                "ut": "2021-01-11T04:04:58"
            },
            {
                "rid": 112,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/112/SGS-0538c773.png",
                "l": "zh-CN",
                "ut": "2021-01-21T02:38:33"
            },
            {
                "rid": 112,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/112/SGS-0538c773.png",
                "l": "en-US",
                "ut": "2021-01-21T02:38:33"
            },
            {
                "rid": 113,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/113/SGS-1754f37d.png",
                "l": "zh-CN",
                "ut": "2021-02-02T07:31:26"
            },
            {
                "rid": 113,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/113/SGS-1754f37d.png",
                "l": "en-US",
                "ut": "2021-02-02T07:31:26"
            },
            {
                "rid": 114,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/114/SGS-01607869.png",
                "l": "zh-CN",
                "ut": "2021-02-22T02:50:58"
            },
            {
                "rid": 114,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/114/SGS-01607869.png",
                "l": "en-US",
                "ut": "2021-02-22T02:50:58"
            },
            {
                "rid": 115,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/115/SGS-e31625c2.png",
                "l": "zh-CN",
                "ut": "2021-03-18T11:28:30"
            },
            {
                "rid": 115,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/115/SGS-e31625c2.png",
                "l": "en-US",
                "ut": "2021-03-18T11:28:30"
            },
            {
                "rid": 117,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/117/SGS-561c405f.png",
                "l": "zh-CN",
                "ut": "2021-04-19T02:01:43"
            },
            {
                "rid": 117,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/117/SGS-561c405f.png",
                "l": "en-US",
                "ut": "2021-04-19T02:01:43"
            },
            {
                "rid": 118,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/118/SGS-5cafd100.png",
                "l": "zh-CN",
                "ut": "2021-04-19T02:01:43"
            },
            {
                "rid": 118,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/118/SGS-5cafd100.png",
                "l": "en-US",
                "ut": "2021-04-19T02:01:43"
            },
            {
                "rid": 119,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/119/SGS-e7513a2b.png",
                "l": "zh-CN",
                "ut": "2021-05-24T03:43:13"
            },
            {
                "rid": 119,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/119/SGS-e7513a2b.png",
                "l": "en-US",
                "ut": "2021-05-24T03:43:13"
            },
            {
                "rid": 120,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/120/SGS-87e1ffad.png",
                "l": "zh-CN",
                "ut": "2021-06-21T04:33:50"
            },
            {
                "rid": 120,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/120/SGS-87e1ffad.png",
                "l": "en-US",
                "ut": "2021-06-21T04:33:50"
            },
            {
                "rid": 121,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/121/SGS-4cfbe2a6.png",
                "l": "zh-CN",
                "ut": "2021-06-21T04:33:51"
            },
            {
                "rid": 121,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/121/SGS-4cfbe2a6.png",
                "l": "en-US",
                "ut": "2021-06-21T04:33:51"
            },
            {
                "rid": 122,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/122/SGS-86e447da.png",
                "l": "zh-CN",
                "ut": "2021-06-21T04:33:51"
            },
            {
                "rid": 122,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/122/SGS-86e447da.png",
                "l": "en-US",
                "ut": "2021-06-21T04:33:51"
            },
            {
                "rid": 110,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/110/SGS-7acae095.png",
                "l": "zh-CN",
                "ut": "2021-06-24T07:49:50"
            },
            {
                "rid": 110,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/110/SGS-7acae095.png",
                "l": "en-US",
                "ut": "2021-06-24T07:49:50"
            },
            {
                "rid": 125,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/125/SGS-0d3e34ba.png",
                "l": "zh-CN",
                "ut": "2021-07-22T03:25:26"
            },
            {
                "rid": 125,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/125/SGS-0d3e34ba.png",
                "l": "en-US",
                "ut": "2021-07-22T03:25:26"
            },
            {
                "rid": 1,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/1/HoneyTrap_of_DiaoChan_168x168-b93b8e16.png",
                "l": "en-US",
                "ut": "2021-08-02T13:02:17"
            },
            {
                "rid": 126,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/126/SGS-5ebaee9a.png",
                "l": "zh-CN",
                "ut": "2021-08-24T10:16:12"
            },
            {
                "rid": 130,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/lucky-piggy/SGS-c0b6b25e.png",
                "l": "zh-CN",
                "ut": "2021-12-30T08:08:56"
            },
            {
                "rid": 130,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/lucky-piggy/SGS-c0b6b25e.png",
                "l": "en-US",
                "ut": "2021-12-30T08:08:56"
            },
            {
                "rid": 128,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/legend-perseus/SGS-c2ebc3d7.png",
                "l": "zh-CN",
                "ut": "2022-01-03T02:40:52"
            },
            {
                "rid": 128,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/legend-perseus/SGS-c2ebc3d7.png",
                "l": "en-US",
                "ut": "2022-01-03T02:40:52"
            },
            {
                "rid": 124,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/124/SGS-070082d5.png",
                "l": "zh-CN",
                "ut": "2022-01-14T03:12:52"
            },
            {
                "rid": 124,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/124/SGS-070082d5.png",
                "l": "en-US",
                "ut": "2022-01-14T03:12:52"
            },
            {
                "rid": 123,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/123/SGS-170fb26d.png",
                "l": "zh-CN",
                "ut": "2022-03-02T04:42:37"
            },
            {
                "rid": 123,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/123/SGS-170fb26d.png",
                "l": "en-US",
                "ut": "2022-03-02T04:42:37"
            },
            {
                "rid": 129,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/win-win-fpc/SGS-a2c5e701.png",
                "l": "zh-CN",
                "ut": "2022-04-08T09:00:08"
            },
            {
                "rid": 129,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/win-win-fpc/SGS-a2c5e701.png",
                "l": "en-US",
                "ut": "2022-04-08T09:00:08"
            },
            {
                "rid": 127,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/speed-winner/SGS-e140cbef.png",
                "l": "zh-CN",
                "ut": "2022-05-30T03:11:11"
            },
            {
                "rid": 127,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/speed-winner/SGS-e140cbef.png",
                "l": "en-US",
                "ut": "2022-05-30T03:11:11"
            },
            {
                "rid": 132,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/wild-coaster/SGS-3939262e.png",
                "l": "zh-CN",
                "ut": "2022-06-10T10:25:31"
            },
            {
                "rid": 132,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/wild-coaster/SGS-3939262e.png",
                "l": "en-US",
                "ut": "2022-06-10T10:25:31"
            },
            {
                "rid": 135,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/wild-bounty-sd/SGS-1625475e.png",
                "l": "zh-CN",
                "ut": "2022-06-21T08:53:46"
            },
            {
                "rid": 135,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/wild-bounty-sd/SGS-1625475e.png",
                "l": "en-US",
                "ut": "2022-06-21T08:53:46"
            },
            {
                "rid": 1312883,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/prosper-ftree/SGS-1d26f078.png",
                "l": "zh-CN",
                "ut": "2022-07-07T08:42:12"
            },
            {
                "rid": 1312883,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/prosper-ftree/SGS-1d26f078.png",
                "l": "en-US",
                "ut": "2022-07-07T08:42:12"
            },
            {
                "rid": 1338274,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/totem-wonders/SGS-74887bbd.png",
                "l": "zh-CN",
                "ut": "2022-07-13T03:29:58"
            },
            {
                "rid": 1338274,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/totem-wonders/SGS-74887bbd.png",
                "l": "en-US",
                "ut": "2022-07-13T03:29:58"
            },
            {
                "rid": 1418544,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/bakery-bonanza/SGS-5e2d74ba.png",
                "l": "zh-CN",
                "ut": "2022-08-17T10:07:49"
            },
            {
                "rid": 1418544,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/bakery-bonanza/SGS-5e2d74ba.png",
                "l": "en-US",
                "ut": "2022-08-17T10:07:49"
            },
            {
                "rid": 1372643,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/diner-delights/SGS-42fb6173.png",
                "l": "zh-CN",
                "ut": "2022-08-18T02:32:05"
            },
            {
                "rid": 1372643,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/diner-delights/SGS-42fb6173.png",
                "l": "en-US",
                "ut": "2022-08-18T02:32:05"
            },
            {
                "rid": 1368367,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/alchemy-gold/SGS-4f200843.png",
                "l": "zh-CN",
                "ut": "2022-10-04T02:49:18"
            },
            {
                "rid": 1368367,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/alchemy-gold/SGS-4f200843.png",
                "l": "en-US",
                "ut": "2022-10-04T02:49:18"
            },
            {
                "rid": 1381200,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/hawaiian-tiki/SGS-3173d9dd.png",
                "l": "zh-CN",
                "ut": "2022-10-18T09:33:58"
            },
            {
                "rid": 1381200,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/hawaiian-tiki/SGS-3173d9dd.png",
                "l": "en-US",
                "ut": "2022-10-18T09:33:58"
            },
            {
                "rid": 1402846,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/midas-fortune/SGS-b0cbf979.png",
                "l": "zh-CN",
                "ut": "2022-11-01T04:10:23"
            },
            {
                "rid": 1402846,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/midas-fortune/SGS-b0cbf979.png",
                "l": "en-US",
                "ut": "2022-11-01T04:10:23"
            },
            {
                "rid": 1420892,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/rave-party-fvr/SGS-7fae58b2.png",
                "l": "zh-CN",
                "ut": "2022-12-01T08:44:18"
            },
            {
                "rid": 1420892,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/rave-party-fvr/SGS-7fae58b2.png",
                "l": "en-US",
                "ut": "2022-12-01T08:44:18"
            },
            {
                "rid": 126,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/126/SGS-5ebaee9a.png",
                "l": "en-US",
                "ut": "2022-12-09T09:41:58"
            },
            {
                "rid": 1543462,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/fortune-rabbit/SGS-cb51bf17.png",
                "l": "zh-CN",
                "ut": "2023-01-06T09:50:36"
            },
            {
                "rid": 1543462,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/fortune-rabbit/SGS-cb51bf17.png",
                "l": "en-US",
                "ut": "2023-01-06T09:50:36"
            },
            {
                "rid": 26,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/26/TreeofFortune_168x168-631774c6.png",
                "l": "en-US",
                "ut": "2023-03-15T04:36:56"
            },
            {
                "rid": 26,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/zh/SocialGameSmall/26/TreeofFortune_168x168-631774c6.png",
                "l": "zh-CN",
                "ut": "2023-03-15T04:37:46"
            },
            {
                "rid": 1448762,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/songkran-spl/SGS-80716155.png",
                "l": "zh-CN",
                "ut": "2023-04-07T01:35:40"
            },
            {
                "rid": 1448762,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/songkran-spl/SGS-80716155.png",
                "l": "en-US",
                "ut": "2023-04-07T01:35:40"
            },
            {
                "rid": 1432733,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/myst-spirits/SGS-16c3227e.png",
                "l": "zh-CN",
                "ut": "2023-04-27T10:35:12"
            },
            {
                "rid": 1432733,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/myst-spirits/SGS-16c3227e.png",
                "l": "en-US",
                "ut": "2023-04-27T10:35:12"
            },
            {
                "rid": 1513328,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/spr-golf-drive/SGS-506e64f1.png",
                "l": "zh-CN",
                "ut": "2023-05-17T01:58:33"
            },
            {
                "rid": 1513328,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/spr-golf-drive/SGS-506e64f1.png",
                "l": "en-US",
                "ut": "2023-05-17T01:58:33"
            },
            {
                "rid": 1601012,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/lucky-clover/SGS-dc7a6b49.png",
                "l": "zh-CN",
                "ut": "2023-06-12T06:36:42"
            },
            {
                "rid": 1601012,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/lucky-clover/SGS-dc7a6b49.png",
                "l": "en-US",
                "ut": "2023-06-12T06:36:42"
            },
            {
                "rid": 1397455,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/fruity-candy/SGS-52bc4515.png",
                "l": "zh-CN",
                "ut": "2023-07-10T10:05:04"
            },
            {
                "rid": 1397455,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/fruity-candy/SGS-52bc4515.png",
                "l": "en-US",
                "ut": "2023-07-10T10:05:04"
            },
            {
                "rid": 1340277,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/asgardian-rs/SGS-b7b58bab.png",
                "l": "zh-CN",
                "ut": "2023-07-17T04:48:03"
            },
            {
                "rid": 1340277,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/asgardian-rs/SGS-b7b58bab.png",
                "l": "en-US",
                "ut": "2023-07-17T04:48:03"
            },
            {
                "rid": 1473388,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/cruise-royale/SGS-5d34cf10.png",
                "l": "zh-CN",
                "ut": "2023-08-08T07:04:12"
            },
            {
                "rid": 1473388,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/cruise-royale/SGS-5d34cf10.png",
                "l": "en-US",
                "ut": "2023-08-08T07:04:12"
            },
            {
                "rid": 1594259,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/safari-wilds/SGS-2649f83a.png",
                "l": "zh-CN",
                "ut": "2023-08-24T04:46:30"
            },
            {
                "rid": 1594259,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/safari-wilds/SGS-2649f83a.png",
                "l": "en-US",
                "ut": "2023-08-24T04:46:30"
            },
            {
                "rid": 1529867,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/ninja-raccoon/SGS-81d12e83.png",
                "l": "zh-CN",
                "ut": "2023-10-11T07:39:40"
            },
            {
                "rid": 1529867,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/ninja-raccoon/SGS-81d12e83.png",
                "l": "en-US",
                "ut": "2023-10-11T07:39:40"
            },
            {
                "rid": 1489936,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/ult-striker/SGS-44177ef3.png",
                "l": "zh-CN",
                "ut": "2023-10-11T07:39:40"
            },
            {
                "rid": 1489936,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/ult-striker/SGS-44177ef3.png",
                "l": "en-US",
                "ut": "2023-10-11T07:39:40"
            },
            {
                "rid": 1568554,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/wild-heist-co/SGS-c6cd2748.png",
                "l": "zh-CN",
                "ut": "2023-10-30T16:01:54"
            },
            {
                "rid": 1568554,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/wild-heist-co/SGS-c6cd2748.png",
                "l": "en-US",
                "ut": "2023-10-30T16:01:54"
            },
            {
                "rid": 1555350,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/forge-wealth/SGS-b6c28d1e.png",
                "l": "zh-CN",
                "ut": "2023-11-15T06:54:12"
            },
            {
                "rid": 1555350,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/forge-wealth/SGS-b6c28d1e.png",
                "l": "en-US",
                "ut": "2023-11-15T06:54:12"
            },
            {
                "rid": 1580541,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/mafia-mayhem/SGS-1cdf4e86.png",
                "l": "zh-CN",
                "ut": "2023-12-05T05:02:51"
            },
            {
                "rid": 1580541,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/mafia-mayhem/SGS-1cdf4e86.png",
                "l": "en-US",
                "ut": "2023-12-05T05:02:51"
            },
            {
                "rid": 1655268,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/tsar-treasures/SGS-cbae2d00.png",
                "l": "zh-CN",
                "ut": "2023-12-12T03:06:29"
            },
            {
                "rid": 1655268,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/tsar-treasures/SGS-cbae2d00.png",
                "l": "en-US",
                "ut": "2023-12-12T03:06:29"
            },
            {
                "rid": 1451122,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/dragon-hatch2/SGS-8787a1fa.png",
                "l": "zh-CN",
                "ut": "2024-01-08T08:00:51"
            },
            {
                "rid": 1451122,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/dragon-hatch2/SGS-8787a1fa.png",
                "l": "en-US",
                "ut": "2024-01-08T08:00:51"
            },
            {
                "rid": 1695365,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/fortune-dragon/SGS-85d8c240.png",
                "l": "zh-CN",
                "ut": "2024-01-18T08:32:45"
            },
            {
                "rid": 1695365,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/fortune-dragon/SGS-85d8c240.png",
                "l": "en-US",
                "ut": "2024-01-18T08:32:45"
            },
            {
                "rid": 1671262,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/gemstones-gold/SGS-5443abf7.png",
                "l": "zh-CN",
                "ut": "2024-02-27T09:56:06"
            },
            {
                "rid": 1671262,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/gemstones-gold/SGS-5443abf7.png",
                "l": "en-US",
                "ut": "2024-02-27T09:56:06"
            },
            {
                "rid": 1682240,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/cash-mania/SGS-ab3ac88a.png",
                "l": "zh-CN",
                "ut": "2024-03-11T08:09:06"
            },
            {
                "rid": 1682240,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/cash-mania/SGS-ab3ac88a.png",
                "l": "en-US",
                "ut": "2024-03-11T08:09:06"
            },
            {
                "rid": 1508783,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/wild-ape-3258/SGS-b6ed6baa.png",
                "l": "zh-CN",
                "ut": "2024-03-25T09:10:16"
            },
            {
                "rid": 1508783,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/wild-ape-3258/SGS-b6ed6baa.png",
                "l": "en-US",
                "ut": "2024-03-25T09:10:16"
            },
            {
                "rid": 1492288,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/pinata-wins/SGS-eace3609.png",
                "l": "zh-CN",
                "ut": "2024-04-09T07:56:23"
            },
            {
                "rid": 1492288,
                "rtid": 14,
                "url": "https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/pinata-wins/SGS-eace3609.png",
                "l": "en-US",
                "ut": "2024-04-09T07:56:23"
            }
        ],
        "err": null
    }
    res.send(JSON.stringify(ret))
});


//https://api.pgf-nmu2nd.com/web-api/game-proxy/v2/GameUI/Get?traceId=EPNOCF27
app.post('/web-api/game-proxy/v2/GameUI/Get',function(req,res){
    var ret={}
    res.send(JSON.stringify(ret))
});

https://api.pgf-nmu2nd.com/web-api/game-proxy/Social/SocialInitConfig/Get?traceId=IAAHSK27
    app.post('/web-api/game-proxy/Social/SocialInitConfig/Get',function(req,res){
        var ret={}
        res.send(JSON.stringify(ret))
    });

//https://api.pgf-nmu2nd.com/web-api/game-proxy/v2/GameName/Get?traceId=SQCJNI27
app.post('/web-api/game-proxy/v2/GameName/Get',function(req,res){
    var ret={}
    res.send(JSON.stringify(ret))
});

//https://api.pgf-nmu2nd.com/game-api/fortune-tiger/v2/Spin?traceId=ZYQNJA27
app.post('/game-api/fortune-tiger/v2/Spin',function(req,res){
    var ret= {
        "dt": {
            "si": {
                "wc": 7,
                "ist": false,
                "itw": true,//false为大奖或巨奖
                "fws": 0,
                "wp": {//各中奖线的位置，未中奖为null
                    "2": [//2线位置
                        0,//位置0
                        3,//位置3
                        6 //位置6
                    ],
                    "3": [//3线位置
                        2,//位置2
                        5,//位置5
                        8 //位置8
                    ],
                    "5": [//5线位置
                        2,//位置2
                        4,//位置4
                        6 //位置6
                    ]
                },
                "lw": {//各中奖线的赢了多少，未中奖为null
                    "2": 90.0,//第2线赢得90.0
                    "3": 10.8,//第3线赢得10.8
                    "5": 10.8 //第5线赢得10.8
                },
                "irs": false,
                "gwt": 2,//未中奖-1 大奖2 巨奖3 超级巨奖4
                "fb": null,
                "ctw": 111.6,//赢奖金额
                "pmt": null,
                "cwc": 1,//未中奖0
                "fstc": null,
                "pcwc": 1,//未中奖0
                "rwsp": {
                    "2": 25.0,//第2线倍数25
                    "3": 3.0, //第3线倍数3
                    "5": 3.0  //第5线倍数3
                },
                "hashr": "0:3;0;0#3;7;0#7;7;0#R#3#001020#MV#18.0#MT#1#R#7#021222#MV#18.0#MT#1#R#7#021120#MV#18.0#MT#1#MG#111.6#",
                "ml": 4,//投注倍数
                "cs": 0.9,//投注大小
                "rl": [//转动后的结果
                    3,//0百搭 2元宝 3玉如意 4福袋 5红包 6鞭炮 7橘子
                    3,//0百搭 2元宝 3玉如意 4福袋 5红包 6鞭炮 7橘子
                    7,//0百搭 2元宝 3玉如意 4福袋 5红包 6鞭炮 7橘子
                    0,//0百搭 2元宝 3玉如意 4福袋 5红包 6鞭炮 7橘子
                    7,//0百搭 2元宝 3玉如意 4福袋 5红包 6鞭炮 7橘子
                    7,//0百搭 2元宝 3玉如意 4福袋 5红包 6鞭炮 7橘子
                    0,//0百搭 2元宝 3玉如意 4福袋 5红包 6鞭炮 7橘子
                    0,//0百搭 2元宝 3玉如意 4福袋 5红包 6鞭炮 7橘子
                    0 //0百搭 2元宝 3玉如意 4福袋 5红包 6鞭炮 7橘子
                ],
                "orl": null,//重新旋转前的卷轴显示的符号
                "sid": "1763892409165348352",
                "psid": "1763892409165348352",
                "st": 1,
                "nst": 1,
                "pf": 1,
                "aw": 111.60,//赢奖金额
                "wid": 0,
                "wt": "C",
                "wk": "0_C",
                "wbn": null,
                "wfg": null,
                "blb": 100000.00,//开始钱包余额
                "blab": 99982.00,//最低钱包余额
                "bl": 100093.60,//钱包余额
                "tb": 18.00,//投注总额
                "tbb": 18.00,//投注总额
                "tw": 111.60,//赢奖金额
                "np": 93.60,// 赢利：赢奖金额-投注总额
                "ocr": null,
                "mr": null,
                "ge": [
                    1,
                    11
                ]
            }
        },
        "err": null
    }
    res.send(JSON.stringify(ret))
});

//https://api.philucky01.com/api/v1/platform/collection/set_game_history  //{"user_id":"656c4863b10a37108bf05dcd","token":"1977cfa3-327a-4ecb-bb9b-1254ced9bbf1","game_id": "154357","game_uuid": "126"}
app.post('/api/v1/platform/collection/set_game_history',function(req,res){
    var ret = {"code":0,"data":true,"msg":"ok"}
    res.send(JSON.stringify(ret))
});

//https://api.pgf-nmu2nd.com/web-api/game-proxy/v2/BetSummary/Get?traceId=WTRORQ27
app.post('/web-api/game-proxy/v2/BetSummary/Get',function(req,res){
    var ret = {
        "dt": {
            "lut": 1709110681008,//时间
            "bs": {
                "gid": 126,//游戏ID
                "bc": 1,//总记录条数
                "btba": 1.00,//总投注金额
                "btwla": -1.00,//总盈利金额
                "lbid": 1762764067258372096 //最近交易单号
            }
        },
        "err": null
    }
    res.send(JSON.stringify(ret))
});

//https://api.pgf-nmu2nd.com/web-api/game-proxy/v2/BetHistory/Get?traceId=PTLDFT27
app.post('/web-api/game-proxy/v2/BetHistory/Get',function(req,res){
    var ret = {
        "dt": {
            "bh": [
                {
                    "tid": "1762764067258372096",//交易单号
                    "gid": 126,//游戏ID
                    "cc": "PHP",
                    "gtba": 1.00,//投注金额
                    "gtwla": -1.00,//盈利金额
                    "bt": 1709110681008,//时间
                    "ge": [
                        1,
                        11
                    ],
                    "bd": [//开奖详细数据
                        {
                            "tid": "1762764067258372096",//交易单号
                            "tba": 1.0,
                            "twla": -1.0,
                            "bl": 921.08,
                            "bt": 1709110678854,
                            "gd": {
                                "wc": 18,
                                "ist": true,
                                "itw": true,
                                "fws": 0,
                                "wp": null,
                                "orl": [
                                    7,
                                    3,
                                    5,
                                    5,
                                    3,
                                    6,
                                    7,
                                    6,
                                    3
                                ],
                                "lw": null,
                                "irs": false,
                                "gwt": -1,
                                "fb": null,
                                "ctw": 0.0,
                                "pmt": null,
                                "cwc": 0,
                                "fstc": null,
                                "pcwc": 0,
                                "rwsp": null,
                                "hashr": null,
                                "ml": 1,
                                "cs": 0.2,
                                "rl": [
                                    7,
                                    3,
                                    5,
                                    5,
                                    3,
                                    6,
                                    7,
                                    6,
                                    3
                                ],
                                "sid": "1762764067258372096",
                                "psid": "1762764067258372096",
                                "st": 1,
                                "nst": 1,
                                "pf": 1,
                                "aw": 0.0,
                                "wid": 0,
                                "wt": "C",
                                "wk": "0_C",
                                "wbn": null,
                                "wfg": null,
                                "blb": 922.08,
                                "blab": 921.08,
                                "bl": 921.08,
                                "tb": 1.0,
                                "tbb": 1.0,
                                "tw": 0.0,
                                "np": -1.0,
                                "ocr": null,
                                "mr": null,
                                "ge": [
                                    1,
                                    11
                                ]
                            }
                        }
                    ],
                    "mgcc": 0,
                    "fscc": 0
                }
            ]
        },
        "err": null
    }
    res.send(JSON.stringify(ret))
});

//https://api.pgf-nmu2nd.com/web-api/game-proxy/v2/GameRule/Get?traceId=FVYWDM27
app.post('/web-api/game-proxy/v2/GameRule/Get',function(req,res){
    var ret= {
        "dt": {
            "rtp": {
                "Default": {
                    "min": 140.0,
                    "max": 140.0
                }
            },
            "ows": {
                "itare": false,
                "tart": 0,
                "igare": false,
                "gart": 0
            },
            "jws": null
        },
        "err": null
    }
    var ret = ret
    res.send(JSON.stringify(ret))
});

//https://api.pgf-nmu2nd.com/web-api/game-proxy/v2/GameWallet/Get?traceId=MEMJDM27
app.post('/web-api/game-proxy/v2/GameWallet/Get',function(req,res){
    var ret= {
        "dt": {
            "cc": "PHP",
            "tb": 999999.00,//现金钱包
            "pb": 0.00,
            "cb": 999999.00,//现金钱包
            "tbb": 0.00,
            "tfgb": 0.00,
            "rfgc": 0,
            "inbe": false,
            "infge": false,
            "iebe": false,
            "iefge": false,
            "ch": {
                "k": "0_C",
                "cid": 0,
                "cb": 999999.00//现金钱包
            },
            "p": null,
            "ocr": null
        },
        "err": null
    }
    res.send(JSON.stringify(ret))
});


app.listen(13001);
console.log("game server is listening on " +13001);




