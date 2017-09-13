<template>
	<div class="computerDetail">
		  <Collapse v-model="value1">
	        <Panel name="1">
	                       基本信息
	            <div slot="content" class="computerDetail_base">
	            	  <div class="computerDetail_base_item">
	            	  	
	            	  </div>
	            	  <div class="computerDetail_base_item">
	            	  	
	            	  </div>
	            	  <div class="computerDetail_base_item">
	            	  	
	            	  </div>
	            </div>
	        </Panel>    
	        <Panel name="2">
	                       监控概览
	            <div slot="content">
	            	
	            </div>
	        </Panel>
	        <Panel name="3">
	                      主机日志
	            <div slot="content">
	            	
	            </div>
	        </Panel>
	    </Collapse>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				value1: ['1','2']
			}
		}
	}
</script>

<style scoped="">
	*{
		text-align: left;
	}
	.computerDetail .ivu-collapse{
		border-radius: 0px;
	}
	
	.computerDetail_base{
		min-height:200px;
		display: flex;
		display:-webkit-flex;
		justify-content:flex-start;
		align-items: center;
	}
	.computerDetail_base_item{
		width:200px;
		min-height: 200px;
		border: 1px solid burlywood;
		margin: 10px 20px;
	}
</style>