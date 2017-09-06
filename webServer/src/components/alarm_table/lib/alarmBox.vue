<template>
	<div class="alarmBox">
		<div class="no_alarm_msg" v-if="alarmLists.length==0">
			  <p>当前没有报警信息产生</p>
		</div>
		<div class="alarm_list">
			<alarmItem v-for="item in alarmLists" :alarmInfo="item"></alarmItem>
		</div>
	</div>
</template>

<script>
	import alarmItem from "./alarmItem.vue"
	export default {
		name:'alarmBox',
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
				
			},
			alarmLists:{
				type:Array,
				default:function(){
					return [{
							id:'001',
							ip:"172.25.25.132",
							level:"1",
							msg:'主机网络流量异常'
						},{
							id:'002',
							ip:"172.25.25.132",
							level:"2",
							msg:'磁盘空间不足'
						},{
							id:'003',
							ip:"172.25.25.132",
							level:"3",
							msg:'内存不足'
						},{
							id:'001',
							ip:"172.25.25.132",
							level:"1",
							msg:'主机网络流量异常'
						},{
							id:'002',
							ip:"172.25.25.132",
							level:"2",
							msg:'磁盘空间不足'
						},{
							id:'003',
							ip:"172.25.25.132",
							level:"1",
							msg:'内存不足'
						}]
					}
				}
		},
		components:{
			alarmItem
		}
	}
</script>

<style scoped>
	.alarmBox{
		height: 100%;
		width: 100%;
		box-sizing: border-box;
	}
	.no_alarm_msg{
		width: 100%;
		height: 30px;
		color: #708090;
		position:absolute;
		top:55%;
		/*left: 40%;*/
		
	}
	.no_alarm_msg>p{
		text-align: center;
	}
</style>