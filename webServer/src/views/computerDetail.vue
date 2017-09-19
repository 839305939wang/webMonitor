<template>
	<div class="computerDetail">
		  <Collapse v-model="value1">
	        <Panel name="1">
	                        基本信息<span class="">&nbsp;(<span class="tijian_report" @click.stop.default="tijian">&nbsp;体检报告:<span class="error">&nbsp;<Icon type="alert"></Icon>&nbsp;1项严重问题</span>&nbsp;<span class="general"><Icon type="alert-circled"></Icon>&nbsp;2项一般问题</span></span>)</span>
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
	                       监控概览<span class="right" @click.stop.default="refresh">刷新(每五分钟自动刷新)</span>
	            <div slot="content">
	            	<div class="computerDetail_chart_item cpu">
	            		<div class="chart"  ref = "cpu">
	            			
	            		</div>
	            		<div class="bottom">
	            			CPU使用率
	            		</div>
	            	</div>
	            	<div class="computerDetail_chart_item dash">
	            		<div class="chart"  ref = "dash">
	            			
	            		</div>
	            		<div class="bottom">
	            			内存使用率
	            		</div>
	            	</div>
	            	<div class="computerDetail_chart_item inNet">
	            		<div class="chart"  ref = "inNet">
	            			
	            		</div>
	            		<div class="bottom">
	            			内网:10.45.163.181
	            		</div>
	            	</div>
	            	<div class="computerDetail_chart_item outNet">
	            		<div class="chart"  ref = "outNet">
	            			
	            		</div>
	            		<div class="bottom">
	            			外网:120.76.126.93
	            		</div>
	            	</div>
	            	<div class="computerDetail_chart_item storage">
	            		<div class="chart"  ref = "storage">
	            			
	            		</div>
	            		<div class="bottom">
	            			磁盘空间
	            		</div>
	            	</div>
	            	<div class="computerDetail_chart_item process">
	            		<div class="chart" ref = "process">
	            			<div class="processChart">
	            			 	80
	            			 </div>
	            		</div>
	            		<div class="bottom">
	            			进程数
	            		</div>
	            	</div>
	            	<div class="computerDetail_chart_item tcp">
	            		<div class="chart"  ref = "tcp">
	            			 <div class="tcpChart">
	            			 	   25
	            			 </div>
	            		</div>
	            		<div class="bottom">
	            			TCP链接数
	            		</div>
	            	</div>
	            	<div class="computerDetail_chart_item average">
	            		<div class="chart"  ref = "average">
	            			 <div class="averageChart">
	            			 	  <div class="average_item">
	            			 	  	<span>5min&nbsp;:&nbsp;</span><span>0</span>
	            			 	  </div>
	            			 	  <div class="average_item">
	            			 	  	<span>10min&nbsp;:&nbsp;</span><span>0</span>
	            			 	  </div>
	            			 	  <div class="average_item">
	            			 	  	<span>15min&nbsp;:&nbsp;</span><span>0</span>
	            			 	  </div>
	            			 </div>
	            		</div>
	            		<div class="bottom">
	            			平均负载
	            		</div>
	            	</div>
	            </div>
	        </Panel>
	        <Panel name="3">
	                      主机日志
	            <div slot="content">
	            	 <div class="log_list">
	            	  	    <Table :columns="columns" :data="data"></Table>
	            	 </div>
	            	 <div class="log_bottom">
	            	 	查看详情及更多记录请前往<a href="#">操作日志</a>
	            	 </div>
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
				value1: ['3'],
				reboot:false,
				shutdown:false,
				columns:[
						 {
						 	type: 'index',
	                        width: 100,
	                        title:'序号',
	                        align: 'center'
	                     },
						 {
	                        title: '操作人员',
	                        key: 'name',
	                        align: 'center',
	                        sortable: true,
	                        width:'230px',
	                        render:(h,params)=>{
	                        	return [
	                        	  h('div',{
	                        	  	attrs:{
	                        	  		"class":'zidigyicell tableCelleImg',	                        	  		
	                        	  	},
	                        	  	style:{
	                        	  		height:'40px',
	                        	  		width:'40px',
	                        	  		float:'left',
	                        	  		cursor:'pointer'
	                        	  	}
	                        	  },[
	                        	    h('img',{
	                        	    	attrs:{
	                        	    		src:params.row.type==1?'../../../static/images/head.jpg':'../../../static/images/one.jpg'
	                        	    	},
	                        	    	style:{
	                        	    		marginTop:'5px',
	                        	    		borderRadius:'50%',
	                        	    		height:'32px',
	                        	    		width:'32px'
	                        	    		
	                        	    	},
	                        	    	on:{
	                        	    		click:()=>{
	                        	    			this.$router.push('/computerDetail?id="001"')
	                        	    		}
	                        	    	}
	                        	    })
	                        	  ]),
	                        	  h('div',{
	                        	  	attrs:{
	                        	  		"class":'zidigyicell tableCelleName',	                        	  		
	                        	  	},
	                        	  	style:{
	                        	  		height:'40px',
	                        	  		width:'130px',
	                        	  		float:'left',
	                        	  		textAlign:'left',
	                        	  		overflow:'hiddden',
	                        	  		textOverflow:'ellipsis',
	                        	  		lineHeight:'40px'
	                        	  	}
	                        	  },params.row.name)
	                        	]
	                        }
	                    },
	                    {
	                        title: '操作类型',
	                        key: 'operate',
	                        align: 'center'
	                    },
	                    {
	                        title: '操作结果',
	                        key: 'inIp',
	                        align: 'center',
	                        render:(h, params) => {
	                        	var name = "成功";
	                        	var color = "green";
	                        	if(params.row.result=="0"){
	                        		name = "失败",
	                        		color = '#sliver';
	                        	}
	                            return  h('Tag', {
		                                props: {
		                                    type: 'dot',
		                                    color: color
		                                }
                                }, name);
	                        }
	                    },
	                    {
	                        title: '操作时间',
	                        key: 'time',
	                        align: 'center',
	                       
	                     }   
                    ],
                     data:[
                     {
                        name: 'Mark-Kai',
                        result: "0",
                        operate:'访问主机',
                        time:'2017-09-14 18:34',
                        id:"001"
                    },
                    {
                        name: 'yangyangwang',
                        result: "1",
                        time:'2017-09-14 18:34',
                        operate:'重启',
                        id:"002"
                    },
                    {
                        name: 'Centos',
                        result: "0",
                        operate:'访问主机',
                        time:'2017-09-14 18:34',
                        id:"003"
                    }, {
                        name: 'zhangxiaoxiao',
                        result: "1",
                        time:'2017-09-14 18:34',
                        operate:'访问主机',
                        id:"004"
                    },{
                        name: 'xiaoxiao',
                        result: "1",
                        time:'2017-09-14 18:34',
                        operate:'访问主机',
                        id:"005"
                    },]
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
			refresh(){//刷新
				console.log("刷新")
			},
			tijian(){
				this.$route.push("/tijianReport")
			},
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
			 chart.setOption(option, true);
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
			 chart.setOption(option, true);
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
				       /* orient : 'vertical',
				        x : 'left',
				        data:['占用','空闲']*/
				    },
				    toolbox: {
				        show : true,
				        feature : {
				           /* mark : {show: true},
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
				            saveAsImage : {show: true}*/
				        }
				    },
				    color:['#5AC581','#8C8989'],
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
			     setInterval(function(){
			     	let data1 = Math.random()*100;
			     	let data2 = Math.random()*100;
			     	option.series[0].data = [ {value:data1, name:'占用'},
				                              {value:data2, name:'空闲'}]
			     	 chart.setOption(option);
			     },5000)
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
			this.outNet();
			this.storage();
		}
	}
</script>

<style scoped>
	*{
		/*text-align: left;*/
	}
	.computerDetail{
		overflow-y: hidden;
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
		height: 280px;
		border: 1px solid #efefef;
		float: left;
		margin: 5px;
	}
	.computerDetail_chart_item>.chart{
		height: 230px;
		width:250px;
	}
	.computerDetail_chart_item>.bottom{
		height: 50px;
		line-height: 50px;
		font-size:14px;
		font-weight:800;
	}
	.computerDetail_chart_item:hover{
		box-shadow:  0 0 3px #2C3E50;
	}
	

	.processChart,.tcpChart{
		position: relative;
		top: 69px;
		left: 50px;
		height: 150px;
		width: 150px;
		line-height: 110px;
	    font-size: 16px;
	    font-weight: bolder;
		border:20px solid #25DEE8;
		border-radius: 50%;
	}
	.tcpChart{
		border-color: #42B983;
	}
	.averageChart{
		padding-top: 60px;
	}
	.average_item{
		position: relative;
		height: 35px;
	    line-height: 35px;
	    font-size: 16px;
	    font-weight: bold;
	    margin-top: 10px;
	}
    .average_item:nth-child(1) span:nth-child(2){
    	color: #25DEE8;
    }
     .average_item:nth-child(2) span:nth-child(2){
    	color: #2B85E4;
    }
     .average_item:nth-child(2) span:nth-child(2){
    	color: #2BAEE9;
    }
    
    .right{
    	float: right;
    	margin-right: 30px;
    }
    .log_bottom{
    	height: 35px;
    	line-height: 35px;
    	text-align: left;
    }
    .tijian_report{
    	color: #888;
    }
    .error{
    	color:#A52A2A;
    }
    .general{
    	color: #DEB887;
    }
</style>