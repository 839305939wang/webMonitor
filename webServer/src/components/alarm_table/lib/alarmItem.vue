<template>
	<div class="alarmItem">
		<div class="computer">
		 {{alarmInfo.ip}}
		</div>
		<div class="level_alarm">
		  <span :class="'level_'+alarmInfo.level">
		  	{{alarmInfo.level}}级告警
		  </span>
		</div>
		<div class="alarm_msg">
			<span>{{alarmInfo.msg}}</span>
		</div>
		<div class="alarm_msg">
			<Button type="ghost" size="small">忽略</Button>
		</div>
	</div>
</template>

<script>
	export default{
		name:'alarmItem',
		data(){
			return {
				
			}
		},
		props:{
			alarmInfo:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style scoped>
	.alarmItem{
		padding: 2px;
		height:40px;
		/*background: #F3EEED;*/
		border-top: 1px solid #EEEEEE;
		line-height: 36px;
		color: #708090;
	}
	.alarmItem>div{
		display:inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
	}
	.alarmItem>div:nth-child(1){
		width: 25%;
	}
	.alarmItem>div:nth-child(2){
		width: 20%;
	}
	.alarmItem>div:nth-child(3){
		width: 35%;
	}
	.alarmItem>div:nth-child(4){
		width: 15%;
	}
	.level_1{
		color:red;
	}
	.level_2{
		color: orange;
	}
	.level_3{
		color: yellow;
	}
</style>