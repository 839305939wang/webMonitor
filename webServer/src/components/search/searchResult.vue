<template>
   <div class="search_reault">
       <div class="search_reault_img">
          <img class="search_reault_img_img" :src="1==1?'../../../static/images/win_m.png':'../../../static/images/linux_m.png'" alt="" />
       </div>
       <div class="search_reault_desc">
       	       <div class="name">
       	       	  <span class="computerName">ID:<span>{{item.name}}</span></span>
       	       </div>
       	   	   <div class="info">
       	   	   	 <span class="computerId">ID:<span>{{item.id}}</span></span>
       	   	     <span class="computerIp">IP:<span>{{item.ip}}</span></span>
       	   	   </div>
       </div>
   </div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			item:{
				type:Object
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
    .search_reault{
    	width: 100%;
	   	height:70px;
	   	background: #FFF;
	   	border-bottom: 1px solid #e6dbdb;
	   	padding:5px;
	   	display: flex;
	   	display: -webkit-flex;
    }
    .search_reault:hover{
    	background:#cfcece;
    }
    .search_reault_img{
    	height: 100%;
    	width:70px;
    	padding:15px 15px;
    }
    .search_reault_img .search_reault_img_img{
    	position: relative;
    	height:32px;
    	width:32px;
    	
    }
    .search_reault_desc>div{
    	height:30px;
    	line-height: 30px;
    	text-align: left;
    }
    .search_reault_desc>div.info>span:nth-child(2){
    	margin-left:30px;
    }
</style>