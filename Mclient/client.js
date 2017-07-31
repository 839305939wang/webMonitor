let client = require("request");
let restify = require("restify");
let queryString = require("querystring");
let config = require(__dirname + "/config/config");
let monitServer = require("./clientServer.js")
console.info(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>开始启动客户端${config.base.serverHost}<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
client.post(config.base.serverHost + "/client/login", {}, function(err, res, body) {
	if(err) {
		console.warn("---------链接核心服务器出现错误-----------")
	} else {
		if(res.statusCode == 200) {
			var resultCode = eval("("+body+")").result.code;
			switch(resultCode) {
				case "00":
					console.info("++++++++注册成功+++++++++");
					console.info(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>开始启动客户端监听服务<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
					monitServer.startServer();
					break;
				case "01":
				     console.info("注册失败");
				     break;
				default:
					console.info("注册失败")
			}
		} else {
			console.log("注册失败")
		}
	}
})