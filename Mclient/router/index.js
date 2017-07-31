module.exports = {
	getOSInfo:function(req,res){
		console.log("获取客户端系统参数");
		res.send({result:{data:[]}})
	},
	getUserInfo:function(req,res){
		console.log("获取客户端的用户登录信息");
		res.send({result:{data:[]}})
	}
}	