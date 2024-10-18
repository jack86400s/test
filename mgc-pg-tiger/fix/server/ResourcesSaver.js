//引入相关资源包
var fs = require("fs");
var path = require("path");
var request = require("request");

// 创建文件夹的函数
function makeDirAndAssignPermission(path, permission) {
	if (!fs.existsSync(path)) {
		fs.mkdirSync(path, { recursive: true }); // 递归创建文件夹
		fs.chmodSync(path, '0755'); // 赋予权限
	}
}
function makeDir(dirpath) {
	if (!fs.existsSync(dirpath)) {
		var pathtmp;
		dirpath.split("/").forEach(function(dirname) {
			if (pathtmp) {
				pathtmp = path.join(pathtmp, dirname);
			}
			else {
				if(dirname){
					pathtmp = dirname;
				}else{
					pathtmp = "/";
				}
			}
			if (!fs.existsSync(pathtmp)) {
				if (!fs.mkdirSync(pathtmp)) {
					return false;
				}
				fs.chmodSync(path, '0755');
			}
		});
	}else{
		//deleteFolderFiles(dirpath);
	}
	return true;
}

/**
 *
 * @param {*} url  网络文件url地址
 * @param {*} fileName 	文件名
 * @param {*} dir 下载到的目录
 */
function getfileByUrl(url,fileName,dir){
	makeDirAndAssignPermission(dir)
	console.log('------------------------------------------------')
	console.log(url)
	var savePath=path.join(dir, fileName)
	console.log(savePath)
	request(url).pipe(fs.createWriteStream(savePath)).on("close", () => {
		// console.log("文件" + savePath + "下载完毕");
		fs.stat(savePath, (err, stats) => {
			if (err) {
				console.error(err);
			} else {
				const fileSizeInBytes = stats.size;
				console.log(savePath +`文件大小为：${fileSizeInBytes} 字节`);
			}
		});
	});
}

function downloadFileByUrl(url_down,host,host_new,dir_down){
	url_down=url_down.replace(host,host_new)
	let lastindex=url_down.lastIndexOf("\/");
	let filename=url_down.substring(lastindex+1)
	let dir=(dir_down+url_down.substring(host_new.length,lastindex+1))
	getfileByUrl(url_down, filename, dir)
}



下载资源
[
	'https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/0/default_icon-f63c84ba.png',
	'https://public.pgf-asqb7a.com/pages/static/image/en/SocialGameSmall/2/GemSaviour_168x168-ab06cffe.png'
].forEach((it)=>{
	downloadFileByUrl(it,'http://localhost/mgc-pg-wildbandito','https://static.pgf-asqb7a.com','C:\\wamp\\www\\mgc-pg-wildbandito')
})