<template>
     <div class="master_com">
          <img :src="item.type==1?'../../../static/images/win_l.png':'../../../static/images/linux_l.png'" alt="" />
          <p>{{item.name}}</p>
          <div class="ip" :style="{background:getBackground()}">
          	{{item.inIp}}
          </div>
     </div>
</template>

<script>
	export default{
		data(){
			return {
				background:'',
			}
		},
		props:{
			item:{
				type:Object
			}
		},
		methods:{
			getBackground(){
				var type = this.item.status;
				console.log("status："+type);
				if(type=="1"){
					return "#19be6b"
				}else if(type=="2"){
					return "rgb(245, 217, 12)"
				}else if(type=="0"){
					return "#a9b1ad"
				}
			}
		}
	}
</script>

<style scoped>
         .master_com{
         	width: 150px;
         	height: 150px;
         	border: 1px solid #F3F5F8;
         	box-shadow: 0 0 3px #BDBDBDCC;
            float: left;
            transition:all 0.5s linear;
            text-align: center;
         	margin: 10px;
         	position: relative;
         }
         .master_com:hover{
         	margin-top:1px;
         	cursor: pointer;
            
         }
         .master_com img{
         	margin-top:10px;
         }
         .master_com>.ip{
         	width: 100%;
         	position: absolute;
         	bottom:0px;
         	text-align: center;
         	height:20px;
         	display:block;
         	line-height: 20px;
         }
</style>