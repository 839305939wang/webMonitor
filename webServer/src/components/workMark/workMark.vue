<template>
    <div class="mark">
    	 <div class="time">
    	      今天 14:43
    	 </div>
    	 <div class="content">
    	      <div class="person">
    	      	 <img :src="markInfo.person_head" alt="" width="36" height="36"/>
    	      </div>
    	      <div class="person_name">{{markInfo.person_name}}</div>
    	      <div class="dist">{{markInfo.dist}}</div>
    	      <div class="computer">
    	      	   <img :src="markInfo.person_head==0?'../../static/images/linux.png':'../../static/images/win.png'"/>
    	      	   <div>{{markInfo.computer_namw}}</div>
    	      </div>
    	 </div>
    </div>
</template>

<script>
	export default{
		name:"workMark",
		data(){
			return {
				
			}
		},
		props:{
		    markInfo:{
		    	type:Object,
		    	default:{
		    		person_head:'../../../static/images/one.jpg',
		    		person_name:"zhangShan",
		    		dist:'访问主机',
		    		computer_type:0,
		    		computer_namw:'OpenSuSe'
		    	}
		    }
		}
	}
</script>

<style scoped>
	.mark{
		width: 100%;
		display:flex;
		display: -webkit-flex;
		height:47px;
		line-height: 47px;
		color: #333333;
	}
	.mark>.time{
		width:120px;
		height:100%;
		border-right: 1px solid #e6dbdb;
	}
	.mark>.content{
		position: relative;
		border-top: 1px solid #e6dbdb;
		width:100%;
	}
	.mark>.content>.person{
		width:36px;
		height: 36px;
		border-radius: 50%;
		border: 1px solid #e6dbdb;
		position: absolute;
		left: -18px;
		top:5px;
		z-index: 10;
		background: #e6dbdb;
	}
	.content>div:nth-child(2){
		width:30%;
		padding-left:18px;		
	}
	.content>div:nth-child(3){
		width:28%;
	}
	.content>div:nth-child(4){
		width:38%;
	}
	.content>div{
		display: inline-block;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		/*display: flex;
		display: -webkit-flex;
		flex-wrap: nowrap;*/
	}
	.computer>img{
		float: left;
		margin-top: 14px;
		margin-right:10px;
	}
</style>