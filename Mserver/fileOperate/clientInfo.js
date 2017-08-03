let fs = require("fs");
module.exports = {
		getAllNum:function(callback){
			fs.readFile("./data/clientInfo.txt",function(err,data){
				callback(err,data)
			})
		},
		addClient:function(name,callback){
			fs.appendFile("./data/clientInfo.txt",name,function(err){
				callback(err);
			})
		},
		init:function(content,callback){
			fs.writeFile("./data/clientInfo.txt",content,function(err){
				callback(err);
			})
		}
}