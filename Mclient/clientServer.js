let restApi = require("restify");
let config = require("./config/config.json");
let client = restApi.createServer();
    exports.startServer = function(){
    	   client.get("/client/isOnline",function(req,res){
    	   	console.log("收到心跳包")
    	   	  res.send({result:{code:"00",msg:"online"}})
    	   });
           client.listen(config.base.clientPort,function(err){
           	  if(err){
           	  	console.warn("------------------客户端监听服务启动失败----------------------")
           	  }else{
           	  	 console.info("++++++++++++++++++客户端监听服务启动成功++++++++++++++++++++++")
           	  }
           });
          
    }