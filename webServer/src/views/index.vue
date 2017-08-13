<template>
	<div class="main_container">
		<Row type="flex" :gutter="10" :style="{height:'430px'}">
			<Col span="6" :class="{chart:true}">
				<Card :class="{total_chart:true}">
					<div slot="title" class="total_header">
						
					</div>
					<div class="chart" ref="online">
	
					</div>
				</Card>
			</Col>
			<Col span="18">
			    <Row :class="{status_item:true}" :style="{height:'160px'}" :gutter="10">
			    	<Col span="8" :class="{chart:true}">
			    		<Card>
							<div class="chart" ref="badChat">
			
							</div>
						</Card>
			    	</Col>
			    	<Col span="8" :class="{chart:true}">
						<Card>
							<div class="chart" ref="alarmChart">
			
							</div>
						</Card>
					</Col>
					<Col span="8" :class="{chart:true}">
						<Card>
							<div class="chart" ref="alarmChart">
			
							</div>
						</Card>
					</Col>
			    </Row>
			    <Row :style="{height:'260px'}" :gutter="10" :class="{table_item:true}">
			    	<Col span="12" >
			    		<Card>
							 <div slot="title" class="card_header">
							 	<span class="left_title">
							 		主机访问轨迹
							 	</span>
							 	<span class="right_handl">
							 		更多
							 	</span>
							 </div>
						</Card>
			    	</Col>
			    	<Col span="12" :class="">
						<Card>
							 <div slot="title" class="card_header">
								 	<span class="left_title">
								 		告警消息
								 	</span>
								 	<span class="right_handl">
								 		更多
								 	</span>
							</div>
						</Card>
					</Col>					
			    </Row>
			</Col>			
		</Row>
		<Row type="flex" :gutter="1" :style="{height:'260px'}" :class='{computers:true}'>
			<Col span="24" :class="">
						<Card>
							 <div slot="title"  class="card_header">
								 	<span class="left_title">
								 		监控仪表盘
								 	</span>								
							</div>
						</Card>
			</Col>	
		</Row>
	</div>
</template>

<script>
	export default {
		data() {
				return {
				}
			},
			mounted() {
				
			},
			methods: {
				
			}			
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	
	.main_container {
		padding:10px;
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
		float: left;
	}
	.right_handl{
		float: right;
	}
	.total_chart .ivu-card-head{
		height:100px;
		background:#a992e2;
	}
	.total_chart .ivu-card-body{
		background: #e7e0f8;
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
	.status_item .ivu-card:nth-of-type(2){
		background: #eb5e3c;
	}
	.status_item .ivu-card:nth-of-type(3){
		background: #7696de;
	}
	.table_item .ivu-col{
		height: 100%;
	}
	.computers{
	  margin-top: 20px;	
	}
</style>