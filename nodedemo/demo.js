/**
 * Created by sxm on 2017/8/7.
 */
//自定义模块1
/*var add=require("./sum.js");
console.dir(add(3,3));*/

//自定义模块2
var aaa=require("./sum");//当前目录
console.dir(aaa(3,3));