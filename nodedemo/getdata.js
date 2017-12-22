/**
 * Created by sxm on 2017/8/7.
 */
//导入mysql模块
var mysql=require("mysql");
//创建与mysql服务器的链接
var connection=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"",
    database:"web13"
});
//执行与mysql服务器的链接
connection.connect();
//插入数据
var sql="insert into member(username)values('aaabbb')";
connection.query(sql,function (error) {
     console.log(error);
})


/*//sql语句,选择member表
var sql="select * from member";
//执行sql语句
//回调函数，error错误信息，rows结果集，fileds字段
connection.query(sql,function (error,rows,fields) {
    if (error){
        console.log(error);
    }else{
        //console.log(fields);
        for(var i in rows){
            console.log(rows[i].username);
        }
    }
});*/
