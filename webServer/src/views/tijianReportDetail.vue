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
			            	<reportDetailItem title="可用率" :size="'msmall'">
			            		<useable></useable>
			            	</reportDetailItem>
			            	<reportDetailItem title="告警记录" :size="'msmall'"></reportDetailItem>
			            	<reportDetailItem title="磁盘分区使用率"></reportDetailItem>
			            </div>
			        </Panel>
			        <Panel name="2">
			                     安全性
				           <div slot="content">
				            <reportDetailItem title="网络安全" :size="'msmall'"></reportDetailItem>
			            	<reportDetailItem title="端口服务"></reportDetailItem>
			            	<reportDetailItem title="公网如站流量"></reportDetailItem>
				          </div>
			        </Panel>
			        <Panel name="3">
			                      负载性能
			           <div slot="content">
			           	    <reportDetailItem title="CPU负载" :size="'middle'"></reportDetailItem>
			            	<reportDetailItem title="内存负载" size="middle"></reportDetailItem>
			            	<reportDetailItem title="磁盘读写" size="middle"></reportDetailItem>
			            </div>
			        </Panel>
			        <Panel name="4">
			                    趋势预测
			            <div slot="content">
			            	<reportDetailItem title="内存使用率趋势" :size="'big'"></reportDetailItem>
			            	<reportDetailItem title="磁盘分区使用率趋势" size="big"></reportDetailItem>
			            </div>
			        </Panel>
			    </Collapse>
		  	 </div>
		  </div>
	</div>
</template>

<script>
	import reportDetailItem from "../components/tijianReportItem/reportDetailItem.vue"
	import useable from  "../components/tijianReportItem/reportDetailList/useable.vue"
	export default{
		data(){
			return{
				ok:'../../../static/images/ok.png',
				warn:'../../../static/images/w2.png',
				gard:'../../../static/images/w1.png',
				alarm:'../../../static/images/alarm.png',
				deatil:['1','2','3','4']
			}
		},
		components:{
			reportDetailItem,
			useable
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
	 	display: flex;
	    align-items: center;
	    justify-content: center
	 }
	 .descItem .desc.other .otherHeader .title_img>img{
	 
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
	 
</style>