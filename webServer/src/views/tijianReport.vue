<template>
	<div class="tijianReport">
		  <div class="pageHeader">
		  	   <div class="pageTitle">主机体检报告详情<span class="time">(2017年09月18日 00时-24时)</span></div>
		  </div>
		  <div class="content">
		  	 <div class="descItem gailan">
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
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="ok"/>
		  	 	  	 		<span class="odesc">未产生过监控告警记录</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="ok"/>
		  	 	  	 		<span class="odesc">磁盘使用率正常</span>
		  	 	  	 	</div>
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
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="ok"/>
		  	 	  	 		<span class="odesc">防火墙已开启</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="gard"/>
		  	 	  	 		<span class="odesc">SSH密码登录未关闭</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="ok"/>
		  	 	  	 		<span class="odesc">已开启内网IP访问</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="alarm"/>
		  	 	  	 		<span class="odesc">开放了危险的端口</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="ok"/>
		  	 	  	 		<span class="odesc">公网入站流量正常</span>
		  	 	  	 	</div>
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
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="warn"/>
		  	 	  	 		<span class="odesc">CPU负载极低</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="ok"/>
		  	 	  	 		<span class="odesc">内存负载正常</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="warn"/>
		  	 	  	 		<span class="odesc">公网出站负载极低</span>
		  	 	  	 	</div>		  	 	  	 	
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
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="warn"/>
		  	 	  	 		<span class="odesc">内存使用率变化趋势可控</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="ok"/>
		  	 	  	 		<span class="odesc">内存使用率变化趋势可控</span>
		  	 	  	 	</div>
		  	 	  	 	<div class="msg">
		  	 	  	 		<img :src="ok"/>
		  	 	  	 		<span class="odesc">磁盘使用率变化趋势可控</span>
		  	 	  	 	</div>	
		  	 	  	 </div>
		  	 	  </div>
		  	 </div>
		  	 
		  	 <div class="deatil">
		  	 	 <Collapse v-model="deatil">
			        <Panel name="1">
			                     可用性
			            <div slot="content">
			            	<div class="detail_item">
			            		<div class="detail_item_header">
			            			可用率
			            		</div>
			            		<div class="detail_item_content">
			            			
			            		</div>
			            	</div>
			            	<div class="detail_item">
			            		<div class="detail_item_header">
			            			告警记录
			            		</div>
			            		<div class="detail_item_content">
			            			
			            		</div>
			            	</div>
			            </div>
			        </Panel>
			        <Panel name="2">
			                     安全性
			            <div slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</div>
			        </Panel>
			        <Panel name="3">
			                    负载性能
			            <div slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</div>
			        </Panel>
			        <Panel name="4">
			                    趋势预测
			            <div slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</div>
			        </Panel>
			    </Collapse>
		  	 </div>
		  </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ok:'../../../static/images/ok.png',
				warn:'../../../static/images/w2.png',
				gard:'../../../static/images/w1.png',
				alarm:'../../../static/images/alarm.png',
				deatil:['1','2','3','4']
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
	.deatil{
	 	width:1100px;
	 	border:0px solid #19BE6B;
	 	margin:0 auto;
	 	overflow: hidden;
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
	 	margin-top: 6px;
	 }
	 .otherHeader .title{
	 	height:30px;
	 	line-height: 30px;
	 	font-size:16px;
	 }
	 .otherContent{
	 	padding-top:15px;
	 }
	 .otherContent .msg{
	 	height:30px;
	 	line-height: 30px;
	 	float: left;
	 }
	 .otherContent .msg>img{
	 	float: left;
	 	margin-left: 47px;
	 	margin-top:8px;
	 	margin-right:4px;
	 }
	 
	 .descItem .ivu-collapse{
	 	width:100%;
	 }
	 .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header{
	 	text-align: left;
	}
	 
	.detail_item{
		min-height:130px;
        border: 1px solid #D1D5DA;
        display: flex;
        display: -webkit-flex;
        justify-content:flex-start;
        margin-bottom: 10px;
	}
	.detail_item .detail_item_header{
		width:60px;
		background: #d2d1d1;
		writing-mode: tb-rl;
		line-height: 60px;
		letter-spacing:6px;
		font-size: 15px;
	} 
    .detail_item .detail_item_content{
    	width: 100%;
    	background:#EAEAEA
    }
</style>