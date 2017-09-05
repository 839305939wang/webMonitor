<template>
	<div class="main_container">
		<Row type="flex" :gutter="10" :style="{height:'400px'}">
			<Col span="6" :class="{chart:true}">
				<Card :class="{total_chart:true}">
					<div slot="title" class="total_header">
                         <p>主机</p>
                         <div class="total_header_content">
                         	<div class="total_header_content_left">
                         		<div>
                         			<span><span style="font-size:30px;font-weight: bold;">9</span>台</span>
                         		</div>
                         	</div>
                         	<div class="total_header_content_right">
                         		<ul>
                         			<li><span>通信总线服务器 : </span><span>3台</span></li>
                         			<li><span>通信总线服务器 : </span><span>3台</span></li>
                         			<li><span>通信总线服务器 : </span><span>3台</span></li>
                         		</ul>                   		
                         	</div>
                         </div>
					</div>
					<div class="total_content">
	                      <div class="online_chart">
	                      	   <span>9</span>
	                      </div>
	                       <div class="chart_desc">
	                      	  <div class="online_type normal"><span class="online_type_icon normal_icon"></span><span>正常运行:</span>8</div>
	                      	  <div class="online_type alarming"><span class="online_type_icon alarming_icon"></span><span>正常运行:</span>8</div>
	                      	  <div class="online_type hasStop"><span class="online_type_icon hasStop_icon"></span><span>正常运行:</span>8</div>
	                      	  <div class="online_type release"><span class="online_type_icon release_icon"></span><span>正常运行:</span>8</div>
	                      </div>
					</div>
					<div class="total_icon">
						
					</div>
				</Card>
			</Col>
			<Col span="18">
			    <Row :class="{status_item:true}" :style="{height:'110px'}" :gutter="10">
			    	<Col span="8" :class="{chart:true}">
			    		<Card :style="{background:'#19be6b'}">
							<div class="chart" ref="badChat">
			                  
							</div>
						</Card>
			    	</Col>
			    	<Col span="8" :class="{chart:true}">
						<Card :style="{background:'#eb5e3c'}">
							<h4 class="">体检中心</h4>
							<div class="chart alarm_item" ref="alarmChart">
                                <Icon size="50" type="ios-medkit-outline"></Icon>
							</div>
						</Card>
					</Col>
					<Col span="8" :class="{chart:true}">
						<Card :style="{background:'#7696de'}">
							<div class="chart" ref="alarmChart">
			                      <Icon size="48" type="person-stalker"></Icon>
							</div>
						</Card>
					</Col>
			    </Row>
			    <Row :style="{height:'290px'}" :gutter="10" :class="{table_item:true}">
			    	<Col span="12" >
			    		<Card padding="0 0 0 15" :class="{mark_card:true}">
							 <div slot="title" class="card_header">
			                    <span class="left_title">
							 		主机访问轨迹
							 	</span>
							 	<span>
							 		<Icon size="25" type="ios-location-outline"></Icon>
							 	</span>
							 	<span class="right_handl">
							 		<a href="">更多</a>
							 	</span>
							 </div>
							 <div class="mark_list">
							 	<workMark></workMark>
							 	<workMark></workMark>
							 	<workMark></workMark>
							 	<workMark></workMark>
							 	<workMark></workMark>
							 </div>
						</Card>
			    	</Col>
			    	<Col span="12" :class="">
						<Card>
							 <div slot="title" class="card_header">
								 	<span class="left_title">
								 		告警消息
								 	</span>
								 	<span>
								 		<Icon size="25" type="ios-chatboxes-outline"></Icon>
								 	</span>
								 	<span class="right_handl">
								 		<a href="">更多</a>
								 	</span>
							</div>
						</Card>
					</Col>					
			    </Row>
			</Col>			
		</Row>
		<Row type="flex" :gutter="1" :style="{height:'280px'}" :class='{computers:true}'>
			<Col span="24" :class="">
						<Card>
							 <div slot="title"  class="card_header">
								 	<span class="left_title">监控仪表盘</span>
								 	<Button type="ghost" size="small">+</Button>							 	
							</div>
							<div class="card_content">
								  <div v-if="computer==0" class="no_computer">
								  	   <div class="add_computer">
								  	   	   <p>可以将你特别关注的主机添加到这里</p>
								  	   	   <Button type="success">立即添加</Button>
								  	   </div>
								  </div>
							</div>
						</Card>
			</Col>	
		</Row>
	</div>
</template>

<script>
	import workMark from "../components/workMark/workMark.vue"
	export default {
		data() {
				return {
					 computer:0
				}
			},
			mounted() {
				
			},
			methods: {
				
			},
			components:{
				"workMark":workMark
			}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		text-align: left;
	}
	
	.main_container {
		padding:10px;
		color: white;
	}
	
	.ivu-row-flex>.ivu-col>.ivu-card {
		height: 100%;
		position: relative;
	}
	
	.ivu-card-head {
		padding: 5px
	}
	


	.ivu-card-head{
		background: #f5f5f5;
	}
	.card_header{
		position: relative;
		height:40px;
		padding:5px;
		line-height: 30px;
		font-size:16px;
		
	}
	.left_title{
		float:left;
		margin-right:10px;
		color: #3f3f3f;
	}
	.right_handl{
		float: right;
	}
	.total_chart .ivu-card-head{
		min-height:100px;
		background:#a992e2;
	}
	.status_item{
		margin-bottom: 10px;
	}
	.status_item>.ivu-col{
		height:100%;
	}
	.ivu-card{
		height: 100%;
	}
	.status_item .ivu-card:nth-of-type(1){
		background: #55badf;
	}
	
	.table_item .ivu-col{
		height: 100%;
	}
	.computers{
	  margin-top: 20px;	
	}
	.total_header_content{
		position: relative;
		min-height:65px;
		display: flex;
		display: -webkit-flex;
		align-content: center;
		justify-content: center;
		color: white;
	}
	.total_chart{
		background: #b7a6e0;
	}
	.total_chart .ivu-card-head p{
		color: white;
	}
	.total_header_content_left{
		width:60px;
		height: 60px;
		margin:5px;
		line-height: 60px;
		display: flex;
		display: -webkit-flex;
		align-content: center;
		justify-content: center;
	}
	.total_header_content_left>p{
		text-align: center;
	}
	.total_header_content_right{
		min-width:60px;
		min-height: 60px;
		margin:5px;
		
	}
	.total_header_content_right>ul>li{
		margin:2px;
		list-style: circle;
	}
	.total_content{
		margin-top:15px;
		text-align: center;
	}
	.total_icon{
		width:70px;
		height: 70px;
		position:absolute;
		right: 5px;
		bottom: 5px;
		background:url(../static/images/total_ng.png);
	}
	.online_chart{
		height:130px;
		width: 130px;
		color: #3f3f3f;
		font-weight: bolder;
		border: 3px solid green;
		border-radius: 50%;
		display: inline-block;
		line-height:110px;
		font-family: "agency fb";
		font-size:35px;
		text-align: center;
		background: #f3f3f3;
	}
	.chart_desc{
		display: flex;
		display: -webkit-flex;
		align-content: center;
		justify-content: center;
		flex-wrap: wrap;
		padding-top: 16px;
	}
	.online_type{
		display: inline-block;
		width: 100px		
	}
	.online_type_icon{
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin-right:5px;
	}
	.normal_icon{		
		background: green;
	}
	.alarming_icon{
		background: yellow;
	}
	.hasStop_icon{
		background: gray;
	}
	.release_icon{
		background: orangered;
	}
	
	.card_content{
		position: relative;
		margin: 0 auto;
		height:250px;
		width:750px;
		border: 0px solid yellowgreen;
		background: url(../static/images/bg2.png) no-repeat;
	}
	.no_computer>.add_computer{
		text-align: center;
		position: absolute;
		left: 62%;
		top:40%;

	}
	.no_computer>.add_computer>p{
		 color: slategray;
		 font-size: 15px;
	}
	.no_computer>.add_computer>button{
		margin-top: 10px;
	}
	.mark_card .ivu-card-body{
		padding:15px 0px;
	}
</style>