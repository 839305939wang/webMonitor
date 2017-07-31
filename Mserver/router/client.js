let fs = require("fs");
let request = require("request");
let config = require("../config/config");
module.exports = {
		login: function(req, res) {
			console.log("+++++收q到客户端注册请求++++++");
			let ip = req.hostname;
			fs.readFile("./data/clientInfo.txt", function(err, data) {
				if(err) {
					throw err;
				}
				let clients = data.toString().split(";");
				console.log(clients.indexOf(ip))
				if(clients.indexOf(ip) != -1) {
					res.send({
						result: {
							code: "01",
							msg: "该设备已经在线"
						}
					})
				} else {
					fs.appendFile("./data/clientInfo.txt", ip + ";", function(err) {
						if(err) {
							res.send({
								result: {
									code: "01",
									msg: "该设备已经在线"
								}
							})
							throw err;
						} else {
							res.send({
								result: {
									code: "00",
									msg: "客户端注册成功"
								}
							})
						}
					})
				}
			})
		},
		keepAlive:function(callback) {
			setInterval(function(){
				fs.readFile("./data/clientInfo.txt", function(err,data) {
					var clients = data.toString().split(";");
					clients.forEach(function(item, index) {
						if(item){
							request.get("http://"+item +":"+config.base.clientPort+"/client/isOnline", function(err, res, body) {
								if(err) {
									console.log(item + "离线");
									clients = clients.map(function(ip,index){
										return ip!=item;
									});
									fs.writeFile("./data/clientInfo.txt",clients.join(";"),function(err){
										if(err){
											console.log("文件修改发生错误");
										}
									});
								} else {
									console.log(res)
									console.log(item + "在线")
								}
						   })
						}
					});	
				})
			},5000)
		    callback();	
		}
	}