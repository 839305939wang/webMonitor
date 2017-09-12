<template>
	 <div class="z_tableCell" :style="{height:height}">
	 	123
	 </div>
</template>

<script>
	export default{
		data(){
			
		},
		props:{
			height:{
				type:Number,
				default:32
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.z_tableCell{
		width:80%;
		background: brown;
	}
</style>