var fs = require("fs");
fs.readFile("../data/clientInfo.txt",function(err,data){
	console.log(data.toString())
})
fs.open("../data/clientInfo.txt","a+",function(err,fd){
	if(err){
		
	}else{
		/*fs.write(fd,"127.0.0.1",0,"UTF-8",function(err){
			fs.close(fd,function(err){
				
			})
		})*/
	}
})
