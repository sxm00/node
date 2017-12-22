/**
 * Created by sxm on 2017/8/7.
 */
//引入fs文件系统:file system；
var fs=require('fs');
//readFile()把外部分文件导入到js中
fs.readFile("data.txt","utf8",function (error,data) {
    if (error){
        console.log("读取外部文件出错".error);
    }else {
        console.log(data);
    }
});