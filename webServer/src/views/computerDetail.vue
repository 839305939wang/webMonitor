<template>
	<div class="computerDetail">
		  <Collapse v-model="value1">
	        <Panel name="1">
	                       基本信息
	            <div slot="content" class="computerDetail_base">
	            	  <div class="computerDetail_base_item">
	            	  	   <div class="computerDetail_img">
	            	  	   	     <img :src="item.type=='1'?'../../../static/images/win_l.png':'../../../static/images/linux_l.png'" alt="" />	            	  	   	    
	            	  	   </div>
	            	  	    <h3>windows98</h3>
	            	  	   <div class="computerDetail_operate">
	            	  	   	    <Button type="ghost" :disabled = 'shutdown' :loading="shutdown" @click="shutdownM">
							        <span v-if="!shutdown">关机</span>
							        <span v-else></span>
							    </Button>
							    <Button type="ghost" :disabled = 'reboot'  :loading="reboot" @click="rebootM">
							        <span v-if="!reboot">重启</span>
							        <span v-else></span>
							    </Button>
	            	  	   </div>
	            	  </div>
	            	  <div class="computerDetail_base_item">
	            	  	  <div class="computerDetail_base_item_row">
	            	  	  	 <span class="item_name">实&nbsp;例&nbsp;&nbsp;ID:</span>
	            	  	  	 <span class="item_text">i-94xz46ek4</span>
	            	  	  </div>
	            	  	  <div class="computerDetail_base_item_row">
	            	  	  	 <span class="item_name">操作系统:</span>
	            	  	  	 <span class="item_text">window10</span>
	            	  	  </div>
	            	  	  <div class="computerDetail_base_item_row">
	            	  	  	 <span class="item_name">创建时间:</span>
	            	  	  	 <span class="item_text">i-94xz46ek4</span>
	            	  	  </div>
	            	  </div>
	            	  <div class="computerDetail_base_item">
	            	  	  <div class="computerDetail_base_item_row">
	            	  	  	 <span class="item_name"><img src="../static/images/d1.png"/>&nbsp;实&nbsp;&nbsp;例:</span>
	            	  	  	 <span class="item_text">1核1G</span>
	            	  	  </div>
	            	  	  <div class="computerDetail_base_item_row">
	            	  	  	 <span class="item_name"><img src="../static/images/d2.png"/>内网IP:</span>
	            	  	  	 <span class="item_text">10.45.163.181</span>
	            	  	  </div>
	            	  	  <div class="computerDetail_base_item_row">
	            	  	  	 <span class="item_name"><img src="../static/images/d3.png"/>公网IP:</span>
	            	  	  	 <span class="item_text">120.76.126.93</span>
	            	  	  </div>
	            	  	  <div class="computerDetail_base_item_row">
	            	  	  	 <span class="item_name"><img src="../static/images/d4.png"/>系统盘:</span>
	            	  	  	 <span class="item_text">100G</span>
	            	  	  </div>
	            	  </div>
	            	   <div class="computerDetail_base_item">
	            	  	     
	            	  </div>
	            </div>
	        </Panel>    
	        <Panel name="2">
	                       监控概览
	            <div slot="content">
	            	<div class="computerDetail_chart_item cpu" ref = "cpu"></div>
	            	<div class="computerDetail_chart_item dash" ref = "dash"></div>
	            	<div class="computerDetail_chart_item inNet" ref = "inNet"></div>
	            	<div class="computerDetail_chart_item outNet" ref = "outNet"></div>
	            	<div class="computerDetail_chart_item storage" ref = "storage"></div>
	            	<div class="computerDetail_chart_item process" ref = "process"></div>
	            	<div class="computerDetail_chart_item tcp" ref = "tcp"></div>
	            </div>
	        </Panel>
	        <Panel name="3">
	                      主机日志
	            <div slot="content">
	            	
	            </div>
	        </Panel>
	    </Collapse>
	</div>
</template>

<script>
	import timer from "../components/time/timer"
	export default{
		data(){
			return {
				value1: ['1','2'],
				reboot:false,
				shutdown:false
			}
		},
		props:{
			item:{
				type:Object,
				default:function(){
					return {
                        name: 'SESU-12.8',
                        inIp: "172.10.2.15",
                        outIp:'120.24.68.29',
                        cpu:'0.60',
                        dash:'0.80',
                        status: '1',
                        type:'1',
                        id:"001"
                    }
				}
			}
		},
		methods:{
			rebootM(){
				this.reboot = true;
				setTimeout(()=>{
					this.reboot = false;
				},2000)
			},
			shutdownM(){
				this.shutdown = true;
				setTimeout(()=>{
					this.shutdown = false;
				},2000)
			},
			cpu(){
				let obj = this.$refs.cpu;
				let option = {
			    tooltip : {
			        formatter: "{b} : {c}%"
			    },
			    toolbox: {
			        /*feature: {
			            restore: {},
			            saveAsImage: {}
			        }*/
			    },
			    series: [
			        {
			            name: 'cpu使用率：',
			            type: 'gauge',
			             detail: {
                            textStyle: {
                                fontSize: 12,
                                color: '#707070'
                            },
                            formatter: '{value}%' /*function(){
                                return '上市时间' ;
                            }*/
                        },
			            data: [{value: 50, name: 'cpu'}]
			        }
			    ]
			};
			let chart = this.echart.init(obj);
			setInterval(function () {
			    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
			    chart.setOption(option, true);
			},2000);
			},
			dash(){
				let obj = this.$refs.dash;
				let option = {
			    tooltip : {
			        formatter: "{b} : {c}%"
			    },
			    toolbox: {
			        /*feature: {
			            restore: {},
			            saveAsImage: {}
			        }*/
			    },
			    series: [
			        {
			            name: '内存：',
			            type: 'gauge',
			             detail: {
                            textStyle: {
                                fontSize: 12,
                                color: '#707070'
                            },
                            formatter: '{value}%' /*function(){
                                return '上市时间' ;
                            }*/
                        },
			            data: [{value: 50, name: '内存'}]
			        }
			    ]
			};
			let chart = this.echart.init(obj);
			setInterval(function () {
			    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
			    chart.setOption(option, true);
			},2000);
			},
			inNet(){
				 let obj = this.$refs.inNet;
                 let option = {
					    title: {
					        x: 'center',
					        text: '',
					        
					    },
					    tooltip: {
					        trigger: 'item'
					    },
					    toolbox: {
					        show: true,
					        /*feature: {
					            dataView: {show: true, readOnly: false},
					            restore: {show: true},
					            saveAsImage: {show: true}
					        }*/
					    },
					    calculable: true,
					    grid: {
					        borderWidth: 0,
					        y: 80,
					        y2: 60
					    },
					    xAxis: [
					        {
					            type: 'category',
					            show: false,
					            data: ['上行速度', '下行速度']
					        }
					    ],
					    yAxis: [
					        {
					            type: 'value',
					            show: false
					        }
					    ],
					    series: [
					        {
					            name: '',
					            type: 'bar',
					            itemStyle: {
					            	width:40,
					                normal: {
					                    color: function(params) {
					                        // build a color map as your need.
					                        var colorList = [
					                          '#5AC581','#7E9A3B'
					                        ];
					                        return colorList[params.dataIndex]
					                    },
					                   
					                    label: {
					                        show: true,
					                        position: 'top',
					                        formatter: '{b}\n{c} KB/s'
					                    }
					                }
					            },
					            data: [1002,21]
					        }
					    ]
				};
			     let chart = this.echart.init(obj);
			     chart.setOption(option);
			},
			outNet(){
				let obj = this.$refs.outNet;
				
			},
			storage(){
				let obj = this.$refs.storage;
				let option = {
				    title : {
				        text: '',
				        subtext: '',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{d}%"
				    },
				    legend: {
				        orient : 'vertical',
				        x : 'left',
				        data:['占用','空闲']
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {
				                show: true, 
				                type: ['pie', 'funnel'],
				                option: {
				                    funnel: {
				                        x: '25%',
				                        width: '50%',
				                        funnelAlign: 'left',
				                        max: 1548
				                    }
				                }
				            },
				             normal: {
					                    color: function(params) {
					                        // build a color map as your need.
					                        var colorList = [
					                          '#5AC581','#7E9A3B'
					                        ];
					                        return colorList[params.dataIndex]
					                    } 
					               } ,
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    series : [
				        {
				            name:'磁盘',
				            type:'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:[
				                {value:30, name:'占用'},
				                {value:60, name:'空闲'}
				            ]
				        }
				    ]
				};
				  let chart = this.echart.init(obj);
			     chart.setOption(option);
			},
			process(){
				let obj = this.$refs.process;
				
			},
			tcp(){
				let obj = this.$refs.tcp;
				
			}
		},
		components:{
			timer
		},
		mounted(){
			this.cpu();
			this.dash();
			this.inNet();
			this.storage();
		}
	}
</script>

<style scoped="">
	*{
		/*text-align: left;*/
	}
	.ivu-collapse > .ivu-collapse-item > .ivu-collapse-header{
		text-align: left;
	}
	.computerDetail .ivu-collapse{
		border-radius: 0px;
	}
	
	.computerDetail_base{
		min-height:200px;
		display: flex;
		display:-webkit-flex;
		justify-content:flex-start;
		align-items: center; 
	}
	.computerDetail_base_item{
		width:200px;
		min-height: 200px;
		border: 0px solid burlywood;
		margin: 10px 20px;
		position: relative;
		text-align: center;
	}
	.computerDetail_img{
		height: 80px;
		min-width: 100px;
		border: 0px solid gold;
		position: relative;
		margin: 0px auto;
		margin-top: 10px;
	}
	.computerDetail_img img{
		margin-top: 2px;
	}
	.computerDetail_operate{
		margin-top: 10px;
	}
	.computerDetail_operate .ivu-btn{
		min-width:50px;
		border-radius: 0px;
	}
	.computerDetail_base_item_row{
		height: 40px;
		line-height: 40px;
		display: flex;
		display: -webkit-flex;
		justify-content: flex-start;
	}
	.computerDetail_base_item_row>span{
		display: block;
		font-family: "Microsoft YaHei";
	}
	.computerDetail_base_item_row .item_name{
		font-size:14px;
		font-weight: 400;
		width:80px;
		text-align: end;
		color: #333;
	}
	.computerDetail_base_item_row .item_text{
		font-size:14px;
		font-weight: 300;
		min-width:115px;
		text-align: start;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.computerDetail_base_item_row .item_name img{
		position: relative;
		top:5px;
		margin-right:2px;
	}
	.run_time{
		position:relative;
		top:50px;
		height: 100px;
		width: 100%;
		text-align: center;
		background: #2BAEE9;
	}
	
	.computerDetail_chart_item{
		width:250px;
		height: 250px;
		border: 1px solid #efefef;
		float: left;
		margin: 5px;
	}
	.computerDetail_chart_item:hover{
		box-shadow:  0 0 3px #2C3E50;
	}
</style>