<template>
	<div class="tijianReport">
		  <div class="pageHeader">
		  	   <div class="pageTitle">主机体检报告详情<span class="time">(2017年09月18日 00时-24时)</span></div>
		  </div>
		  <div class="content">
		  	 <div class="descItem">
		  	 	  <div class="desc first">
		  	 	  	<div class="img">
		  	 	  		<img src="../static/images/t_l.png"/>
		  	 	  	</div>
		  	 	  	<div class="img_desc">
		  	 	  		<p class="name">A_CentOS6.5_HN1</p>
		  	 	  		<p class="id">（i-94xz46ek4）</p>
		  	 	  	</div>
		  	 	  </div>
		  	 	  <div class="desc other">
		  	 	  	 <div class="otherHeader">
		  	 	  	 	<div class="title">
		  	 	  	 		可用性
		  	 	  	 	</div>
		  	 	  	 	<div class="title_img">
		  	 	  	 		<img src="../static/images/t_s.png"/>
		  	 	  	 	</div>
		  	 	  	 </div>
		  	 	  	 <div class="otherContent">
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="ok"/>
		  	 	  	 		<span class="odesc">主机可用率为92.85%</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg"></div>
		  	 	  	 	<div class="msg"></div>
		  	 	  	 </div>
		  	 	  </div>
		  	 	  <div class="desc other">
		  	 	  	<div class="otherHeader">
		  	 	  	 	<div class="title">
		  	 	  	 		安全性
		  	 	  	 	</div>
		  	 	  	 	<div class="title_img">
		  	 	  	 		<img src="../static/images/t_ss.png"/>
		  	 	  	 	</div>
		  	 	  	 </div>
		  	 	  	  <div class="otherContent">
		  	 	  	 	<div class="msg"></div>
		  	 	  	 	<div class="msg"></div>
		  	 	  	 	<div class="msg"></div>
		  	 	  	 </div>
		  	 	  </div>
		  	 	  <div class="desc other">
		  	 	  	<div class="otherHeader">
		  	 	  	 	<div class="title">
		  	 	  	 		性能负载
		  	 	  	 	</div>
		  	 	  	 	<div class="title_img">
		  	 	  	 		<img src="../static/images/t_x.png"/>
		  	 	  	 	</div>
		  	 	  	 </div>
		  	 	  	  <div class="otherContent">
		  	 	  	 	<div class="msg"></div>
		  	 	  	 	<div class="msg"></div>
		  	 	  	 	<div class="msg"></div>
		  	 	  	 </div>
		  	 	  </div>
		  	 	  <div class="desc other">
		  	 	  	<div class="otherHeader">
		  	 	  	 	<div class="title">
		  	 	  	 		趋势预测
		  	 	  	 	</div>
		  	 	  	 	<div class="title_img">
		  	 	  	 		<img src="../static/images/t_q.png"/>
		  	 	  	 	</div>
		  	 	  	 </div>
		  	 	  	  <div class="otherContent">
		  	 	  	 	<div class="msg"></div>
		  	 	  	 	<div class="msg"></div>
		  	 	  	 	<div class="msg"></div>
		  	 	  	 </div>
		  	 	  </div>
		  	 </div>
		  </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ok:'../../../static/images/ok.png'
			}
		}
	}
</script>

<style scoped>
	.pageHeader{
		height:50px;
		padding:10px;
		margin:10px;
	}
	 .pageTitle{
	 	height:30px;
	 	line-height: 28px;
		text-indent: 10px;
		font-size: 24px;
		color: #666;
	 }
	 .pageTitle .time{
	 	font-size: 16px;
	 }
	 .content .descItem{
	 	height:230px;
	 	width:1100px;
	 	border:1px solid #19BE6B;
	 	margin:0 auto;
	 	overflow: hidden;
	 	border:1px solid #e8e8e8;
	 	display: flex;
	 	display: -webkit-flex;
	 	flex-wrap: nowrap;
	 }
	 .descItem .desc{
	 	width:220px;
	 	height: 100%;
	 	border-right:  1px solid #e8e8e8;
	 }
	 .desc.first{
	 	background: #6c99e5;
	 }
	 .desc.first>.img{
	 	margin-top:45px;
	 }
	 .img_desc>p{
	 	overflow: hidden;
       text-overflow: ellipsis;
       color: #fff;
	 }
	 .img_desc>.name{
	 	font-size:18px;
	 	font-weight: 600;
	 }
	 .img_desc>.id{
	 	font-size:15px;
	 	font-weight: 500;	 	
	 }
	 .descItem .desc.other .otherHeader{
	 	height:50px;
	 	background:#f5f5f5;
	 	position: relative;
	 }
	 .descItem .desc.other .otherHeader .title_img{
	 	position: absolute;
	 	height:40px;
	 	width: 40px;
	 	border: 1px solid #e3dede;
	 	border-radius: 50%;
	 	left: 50%;
	 	margin-left:-20px;
	 	bottom:-20px;
	 	background: #f5f5f5;
	 }
	 .descItem .desc.other .otherHeader .title_img>img{
	 	margin-top: 8px;
	 }
	 .otherHeader .title{
	 	height:30px;
	 	line-height: 30px;
	 	font-size:16px;
	 }
	 .otherContent .msg{
	 	height:30px;
	 	line-height: 30px;
	 }
	 .otherContent .msg>img{
	 	float: left;
	 	margin-top: 7px;
	 }
</style>