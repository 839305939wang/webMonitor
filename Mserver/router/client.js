let request = require("request");
let config = require("../config/config");
let All = require("../fileOperate/clientInfo");
let Offline = require("../fileOperate/offline")
module.exports = {
		login: function(req, res) {
			console.log("+++++收q到客户端注册请求++++++");
			let ip = req.hostname;
			All.getAllNum(function(err, data) {
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
					All.addClient( ip + ";", function(err) {
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
				All.getAllNum(function(err,data) {
					var clients = data.toString().split(";");
					clients.forEach(function(item, index) {
						if(item){				
							request.get("http://"+item +":"+config.base.clientPort+"/client/isOnline", function(err, res, body) {
								if(err) {
									//修改在线文件
									clients = clients.map(function(ip,index){
										console.log(ip+"--:"+item)
										if(ip&ip!=undefined&ip!=item){
											return item;
										}		
									});
									All.init(clients.join(";"),function(err){
										if(err){
											console.log("文件修改发生错误");
										}
									});
									//修改离线文件
									Offline.addClient(item+";",function(err){
										if(err){
											console.log("离线文件添加失败")
										    return;
										}
										    console.log(item + "离线");
									});									
								} else {
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