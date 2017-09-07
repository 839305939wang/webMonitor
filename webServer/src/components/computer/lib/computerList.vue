<template>
	<div class="computer_list">
		<div class="arrow leftArrow"></div>
		<div class="computer_list_content">
			<slot></slot>
		</div>
		<div class="arrow rightArrow"></div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.computer_list{
		position: relative;
	}
	.computer_list .arrow{
		position: absolute;
		height:100px;
		width: 30px;
		background: rgba(255,255,255,0.5);
	}
	.computer_list .arrow.leftArrow{
		left: 20px;
		top:50%;
		margin-top:-50px;
	}
	.computer_list .arrow.rightArrow{
		right: 20px;
		top:50%;
		margin-top:-50px;
	}
</style>