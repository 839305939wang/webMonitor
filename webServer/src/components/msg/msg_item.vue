<template>
   <div class="msg_item">
         <div class="item msg_item_icon">
	         <Badge :dot="item.view">
	           <img :src="item.type==0?'../../../static/images/m_c.png':'../../../static/images/m_t.png'" alt="" />
	         </Badge>
         </div>
         <div class="item msg_info">
         	 {{item.msg}}
         </div>
         <div class="item operate">
         	  <Button type="ghost" size="small" @click="show">查看</Button>
         	  <Button type="ghost" size="small" @click="igore">忽略</Button>
         </div>
   </div>
</template>
    
<script>
	export default {
		data(){
			return {
				view:true
			}
		},
		props:{
			item:Object
		},
		methods:{
			show(){
				
			},
			igore(){
				this.$emit("igore",this.item.id)
			}
		}
	}
</script>

<style scoped>
   .msg_item{
   	width: 100%;
   	height:50px;
   	background: #FFF;
   	border-bottom: 1px solid #e6dbdb;
   	padding:5px;
   	display: flex;
   	display: -webkit-flex;
   }
   .msg_item .item{
   	   
   }
   .msg_item .item.msg_item_icon{
   	height:100%;
   	width:35px;   
   }
   .msg_item .item.msg_item_icon img{
   	  margin-top:3px;   
   }
   .msg_item .item.msg_info{
   	height:100%;
   	width:220px;
   	overflow: hidden;
   	text-overflow: ellipsis; 
   	line-height: 40px;
   }
   .msg_item .item.operate{
   	height:100%;
   	width:80px;
   	line-height:40px;   
   }
</style>