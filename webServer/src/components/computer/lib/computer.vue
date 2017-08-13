<template>
	<div class="computer">
		 <img src="" alt="image" class="computer_image"/>
		 <div class="computer_desc">
		    <p class="computer_name"></p>
		 	<p class="computer_ip"></p>
		 	<p class="computer_detail">详情</p>
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
				default:'100px';
			},
			height:{
				default:'100px';
			},
			img_src:{
				
			}
		}
	}
</script>

<style scoped>
	.computer{
		position: relative;
	}
</style>