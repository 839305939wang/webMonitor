let config = require(__dirname + "/config/config");
let express = require("express");
let app = express();
let All = require("./fileOperate/clientInfo");
let Offline = require("./fileOperate/offline")
let client = require("./router/client");
app.use(express.static("./public"));

console.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>核心服务开始启动<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
//接受客户端服务注册请求
app.post("/client/login", client.login)
app.listen(config.base.port);
console.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>核心服务启动成功<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
//清除缓存在线设备文件
All.init( "", function(err) {
});
//清除缓存离线设备文件
Offline.init( "", function(err) {
})
//和客户端保持心跳
client.keepAlive(function() {
		console.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>启动心跳保持成功<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
})