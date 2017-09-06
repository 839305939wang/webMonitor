<template>
	<div class="computer">
		  <div class="computer_head">
		      <div class="head_item name">
		         <img src="../../../../dist/static/images/linux.png" alt="" />
		         <span>A_Win2008_HN13</span>
		      </div>
		      <div class="head_item del">	      	
		      </div>
		  </div>
		  <div class="computer_body">
		       <div class="chart_item cpu">
		       	   <div class="chart_title">	       	   	  
		       	   	   <span><span class="dot"></span>CPU</span>
		       	   </div>
		       	   <div class="chart_content" ref="cpu"></div>
		       </div>
		       <div class="chart_item neicun">
		       	   <div class="chart_title">
		       	   	   <span><span class="dot"></span>内存</span>
		       	   </div>
		       	   <div class="chart_content" ref="dash"></div>
		       </div>
		       <div class="chart_item net">
		           <div class="chart_title">
		       	   	   <span><span class="dot"></span>网速</span>
		           </div>
		       	   <div class="chart_content" ref="net"></div>
		       </div>
		       <div class="chart_item tcp">
		       	   <div class="chart_title">		       	   	   
		       	   	   <span><span class="dot"></span>TCP</span>
		       	   </div>
		       	   <div class="chart_content" ref="tcp"></div>
		       </div>
		  </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		props:{
			width:{
				default:'100px'
			},
			height:{
				default:'100px'
			},
			img_src:{
				
			}
		},
		methods:{
			initCPU(){
				let el = this.$refs.cpu;
				this.highcharts.init(el,{
					
				})
			},
			initDash(){
				
			},
			initNet(){
				
			},
			initTcp(){
				
			}
		},
		mounted(){
			this.initCPU();
		}
	}
</script>

<style scoped>
	.computer{
		display: inline-block;
		margin:10px;
		height:265px;
		width: 380px;
		border: 1px solid #e3e6e3;
		position: relative;
		text-align: center;
		color:#80848F;
	}
	.computer>img{
		width:80px;
		height:80px;
		margin:5px;
	}
	.computer p{
		text-align: center;
	}
	.computer .computer_head:hover{
		cursor: move;
	}
	.computer .computer_head{
		height:45px;
		border-bottom: 1px solid #e3e6e3;
		background:#e3e6e3;
	}
	.computer .computer_name{
		font-weight: bolder;
	}
	.head_item{
		display: inline-block;
		height: 100%;
		line-height:45px;
		vertical-align: middle;
	}
	.head_item.name{
		float: left;
		margin-left:10px;
		
	}
	.head_item.name>img{
		float: left;
		margin-top: 12px;
		margin-right:4px;
	}
	.head_item.del{
		margin-top:10px;
		float: right;
		margin-right:10px;
		width:26px;
		height:26px;
		background: url(../../../static/images/del.png);
		border:1px solid #D1D5DA;
		border-radius: 2px;
	}
	.head_item.del:hover{
		cursor:pointer;
		box-shadow:0px 0px 2px #8391A5;
	}
	
	.chart_item{
		height:55px;
		width: 100%;
		border-top: 1px solid #e3e6e3;;
	}
	.chart_title{
		float: left;
		height: 100%;
		width:80px;
		border-right: 1px solid gold;
	    display: flex;
	    display: -webkit-flex;
	    justify-content: center;
	    align-content: center;
	}
	.chart_title span{
		display: inline-block;
		line-height: 55px;

	}
	.chart_title span.dot{
		height:10px;
		width: 10px;
	    box-shadow:0 0 3px #19BE6B;
		background:#18B566;
		border-radius: 50%;
		margin-right:5px;
	}
	.chart_content{
		float:left;
		width:298px;
		background: bisque;
		height: 100%;
	}
</style>