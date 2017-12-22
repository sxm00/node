/**
 * Created by sxm on 2017/8/7.
 */
//引入http模块
var http=require("http");
var fs=require("fs");
//console.log(http);
//http模块创建server,创建服务器方法
/*
http.createServer(function (req,res) {
    fs.readFile("h5Product/html/index.html","utf-8",function (error,data) {
        console.log(5555555555)
        if(error){
            console.log("读取外部文件出错".error);
        }
        //writeHead()写入文件头数据
        res.writeHead(200,{'content-Type':"text/html"});
        //向页面上输出的信息
        res.end(data);
    })

    //监听
}).listen(8080);
console.log("server works");*/

 var path = require('path'); var util = require('util');
http.createServer(function (request, response) {
    console.log('request starting...');
    console.log(request.url)
    if(request.url == "/favicon.ico"){
        response.end("", 'utf-8');
    }
    var filePath = './h5Product' + request.url;
    if (filePath == './h5Product/' )
        filePath = 'h5Product/html/index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    var ifbinary = false;
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.gif':
            contentType = 'image/gif';
            ifbinary = true;
            break;
        case '.png':
            contentType = 'image/png';
            ifbinary = true;
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            ifbinary = true;
            break;
    }
    console.log("path:  ********" + filePath)
    fs.readFile(filePath, function(error, content) {
        if (error) {
            console.log(error)
            response.writeHead(500);
            response.end();
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}).listen(8080);
console.log("OK")
