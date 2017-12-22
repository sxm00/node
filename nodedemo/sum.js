/**
 * Created by sxm on 2017/8/7.
 */
//自定义模块1
/*exports.sum=function (num1,num2) {
    return num1+num2;
}*/
//自定义模块2
function sum(num1,num2) {
    return num1+num2;
}
//以module模块的形式到处
module.exports=sum;