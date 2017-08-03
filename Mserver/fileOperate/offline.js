let fs = require("fs");
module.exports = {
		getAllNum:function(callback){
			fs.readFile("./data/offline.txt",function(err,data){
				callback(err,data)
			})
		},
		addClient:function(name,callback){
			fs.appendFile("./data/offline.txt",name,function(err){
				callback(err);
			});
		},
		removeClient:function(name,callback){
				fs.appendFile("./data/offline.txt",name,function(err){
					callback(err);
				});
		},
		init:function(content,callback){
			fs.writeFile("./data/offline.txt",content,function(err){
				callback(err);
			})
		}
		           
}