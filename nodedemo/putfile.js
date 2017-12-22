/**
 * Created by sxm on 2017/8/7.
 */
//导入文件系统模块
var fs=require("fs");
//向外部文件写入数据
fs.writeFile("hello.txt","morning",function (error) {
    if (error){
        console.log("写入文件错误");
    }else{
        console.log("写入文件成功");
    }
});