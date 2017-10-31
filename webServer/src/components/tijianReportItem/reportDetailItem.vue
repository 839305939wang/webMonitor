<template>
	<div :class="className">
		<div class="detail_item_header">
			   {{title}}
		</div>
		<div class="detail_item_content">
			  <slot></slot>          			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				"className":{"detail_item":true}
			}
		},
		props:{
			title:{
				
			},
			size:{
				default:'small'
			}
		},
		comupted:{
	
		},
		mounted(){
			switch (this.size){
				case "msmall":
				    this.className = {"detail_item":true,"small":true}
				    break;
				case "small":
				    this.className = {"detail_item":true,"small":true}
				    break;
				case "middle":
				    this.className = {"detail_item":true,"middle":true}
				    break;
				case "big":
				     this.className = {"detail_item":true,"big":true}
				    break;
				default :
				     this.className = {"detail_item":true,"small":true}
				    break;
			}
		}
	}
</script>

<style scoped>
	.detail_item{
		min-height:130px;
        border: 1px solid #D1D5DA;
        display: flex;
        display: -webkit-flex;
        justify-content:flex-start;
        margin-bottom: 10px;
	}
	.detail_item .detail_item_header{
		width:50px;
		background: #d2d1d1;
		letter-spacing:2px;
		font-size: 15px;
		padding:0 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		word-break: break-all;
	} 
    .detail_item .detail_item_content{
    	width: 100%;
    	background:#EAEAEA
    }
    .detail_item.msmall{
		min-height:100px;
	}
    .detail_item.small{
		min-height:150px;
	}
    .detail_item.middle{
		min-height:260px;
	}
	.detail_item.big{
		min-height:230px;
	}
	
</style>