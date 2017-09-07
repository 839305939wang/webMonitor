<template>
	<div class="computer">
		  <div class="computer_head">
		      <div class="head_item name">
		         <img src="../../../../dist/static/images/linux.png" alt="" />
		         <span>A_Win2008_HN13 {{Data.id}}</span>
		      </div>
		      <div class="head_item del" @click="del">	      	
		      </div>
		  </div>
		  <div class="computer_body">
		       <div class="chart_item cpu">
		       	   <div class="chart_title">	       	   	  
		       	   	   <span><span class="dot"></span>CPU</span>
		       	   </div>
		       	   <div class="chart_content" ref="cpu"></div>
		       	   <div class="show">
		       	   	  30%
		       	   </div>
		       </div>
		       <div class="chart_item neicun">
		       	   <div class="chart_title">
		       	   	   <span><span class="dot"></span>内存</span>
		       	   </div>
		       	   <div class="chart_content" ref="dash"></div>
		       	   <div class="show">
		       	   	   78%
		       	   </div>
		       </div>
		       <div class="chart_item net">
		           <div class="chart_title">
		       	   	   <span><span class="dot"></span>网速</span>
		           </div>
		       	   <div class="chart_content" ref="net"></div>
		       	   <div class="show">
		       	   	  <div id="">
		       	   	  	I:78kb/s
		       	   	  </div>
		       	   	  <div>
		       	   	  	O:78kb/s
		       	   	  </div>
		       	   </div>
		       </div>
		       <div class="chart_item tcp">
		       	   <div class="chart_title">		       	   	   
		       	   	   <span><span class="dot"></span>TCP</span>
		       	   </div>
		       	   <div class="chart_content" ref="tcp"></div>
		       	   <div class="show">
		       	   	  123
		       	   </div>
		       </div>
		  </div>
	</div>
</template>

<script>
	import data from "../../../testData/data.js"
	export default {
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
			Data:{
				type:Object
			}
		},
		methods:{
			del(){
				if(this.Data.id){
					this.$emit("deleteComputer",this.Data.id)
				}
			},
			initCPU(){
				  let option = {
		            chart: {
		                zoomType: 'x'
		            },
		            title: {
		                text: ''
		            },
		            subtitle: {
		                text: ''
		            },
		            credits: {
					    enabled:false
					},
		            xAxis: {
		                tickWidth:0,
		                lineWidth:0,
		                strokeWidth:0,
		                lineColor : '#fff',
		                labels:{
		                	enabled:false,
		                },
		                gridLineWidth: 0, 
		            },
		            tooltip: {
		               dateTimeLabelFormats: {
		                    millisecond: '%H:%M:%S.%L',
		                    second: '%H:%M:%S',
		                    minute: '%H:%M',
		                    hour: '%H:%M',
		                    day: '%Y-%m-%d',
		                    week: '%m-%d',
		                    month: '%Y-%m',
		                    year: '%Y'
		                }
		            },
		            yAxis: {
		                title: {
		                    text: ''
		                },
		                gridLineWidth: 0,
		                labels:{
		                	enabled:false,
		                }
		            },
		            legend: {
		                enabled: false
		            },
		            plotOptions: {
		                area: {
		                    fillColor: {
		                        linearGradient: {
		                            x1: 0,
		                            y1: 0,
		                            x2: 0,
		                            y2: 1
		                        },
		                        stops: [
		                        
		                        ]
		                    },
		                    stops: [
	                            [0, '#342213'],
	                            [1, '#145213']
	                        ],
		                    marker: {
		                        radius: 2
		                    },
		                    lineWidth: 1,
		                    states: {
		                        hover: {
		                            lineWidth: 1
		                        }
		                    },
		                    threshold: null
		                }
		            },
		            series: [{
		                type: 'area',
		                name: 'cpu占用率',
		                data: data.chart1
		            }]
		        }
				
				let el = this.$refs.cpu;
				
				this.highcharts.chart(el,option);
			},
			initDash(){
				 var option = {
		            chart: {
		                zoomType: 'x'
		            },
		            credits: {
					    enabled:false
					},
		            title: {
		                text: ''
		            },
		            subtitle: {
		                text: ''
		            },
		            xAxis: {
		                type: 'datetime',
		                dateTimeLabelFormats: {
		                    millisecond: '%H:%M:%S.%L',
		                    second: '%H:%M:%S',
		                    minute: '%H:%M',
		                    hour: '%H:%M',
		                    day: '%m-%d',
		                    week: '%m-%d',
		                    month: '%Y-%m',
		                    year: '%Y'
		                },
		                lineWidth:0,
		                strokeWidth:0,
		                tickWidth:0,
		                labels:{
		                	enabled:false,
		                },
		                gridLineWidth: 0, 
		            },
		            tooltip: {
		                dateTimeLabelFormats: {
		                    millisecond: '%H:%M:%S.%L',
		                    second: '%H:%M:%S',
		                    minute: '%H:%M',
		                    hour: '%H:%M',
		                    day: '%Y-%m-%d',
		                    week: '%m-%d',
		                    month: '%Y-%m',
		                    year: '%Y'
		                }
		            },
		            yAxis: {
		                title: {
		                    text: ''
		                },
		                lineWidth:0,
		                strokeWidth:0,
		                tickWidth:0,
		                labels:{
		                	enabled:false,
		                },
		                gridLineWidth: 0, 
		            },
		            legend: {
		                enabled: false
		            },
		            plotOptions: {
		                area: {
		                    fillColor: {
		                        linearGradient: {
		                            x1: 0,
		                            y1: 0,
		                            x2: 0,
		                            y2: 1
		                        },
		                        stops: [
		                            [0, this.highcharts.getOptions().colors[0]],
		                            [1, this.highcharts.Color(this.highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
		                        ]
		                    },
		                    marker: {
		                        radius: 2
		                    },
		                    lineWidth: 1,
		                    states: {
		                        hover: {
		                            lineWidth: 1
		                        }
		                    },
		                    threshold: null
		                }
		            },
		            series: [{
		                type: 'area',
		                name: '内存',
		                data: data.chart1
		            }]
		        };
		        let el = this.$refs.dash;
				
				this.highcharts.chart(el,option);
			},
			initNet(){
				console.log("Data:"+this.Data)
				var option = {
			        chart: {
			            type: 'spline'
			        },
			        credits: {
					    enabled:false
					},
			        title: {
			            text: ''
			        },
			        subtitle: {
			            text: ''
			        },
			        xAxis: {
			            type: 'datetime',
			            tickWidth:0,
			            title: {
			                text: null
			            },
			            labels:{
		                	enabled:false,
		                },
		                lineWidth:0,
		                strokeWidth:0,
		                gridLineWidth: 0, 
			        },
			        legend: {
		                enabled: false
		            },
			        yAxis: {
			        	tickWidth:0,
			            title: {
			                text: ''
			            },
			            labels:{
		                	enabled:false,
		                },
		                lineWidth:0,
		                strokeWidth:0,
		                gridLineWidth: 0, 
			            min: 0
			        },
			        tooltip: {
			            headerFormat: '<b>{series.name}</b>:',
			            pointFormat: ' {point.y:.2f}KB/s'
			        },
			        plotOptions: {
			            spline: {
			                marker: {
			                    enabled: false
			                }
			            }
			        },
			        colors:['#18EF22','#EFEC18'],
			        series:data.chart3
			    };
			    let el = this.$refs.net;
				
				this.highcharts.chart(el,option);
			},
			initTcp(){
				var option = {
			        chart: {
			            type: 'spline'
			        },
			        credits: {
					    enabled:false
					},
			        title: {
			            text: ''
			        },
			        subtitle: {
			            text: ''
			        },
			        xAxis: {
			            type: 'datetime',
			            tickWidth:0,
			            title: {
			                text: null
			            },
			            labels:{
		                	enabled:false,
		                },
		                lineWidth:0,
		                strokeWidth:0,
		                gridLineWidth: 0, 
			        },
			        legend: {
		                enabled: false
		            },
			        yAxis: {
			        	tickWidth:0,
			            title: {
			                text: ''
			            },
			            labels:{
		                	enabled:false,
		                },
		                lineWidth:0,
		                strokeWidth:0,
		                gridLineWidth: 0, 
			            min: 0
			        },
			        tooltip: {
			            headerFormat: '<b>{series.name}</b>:',
			            pointFormat: ' {point.y}个'
			        },
			        plotOptions: {
			            spline: {
			                marker: {
			                    enabled: false
			                }
			            }
			        },
			        colors:['#19C9EF'],
			        series:data.chart4
			    };
			    let el = this.$refs.tcp;
				
				this.highcharts.chart(el,option);
			}
		},
		mounted(){
			this.initCPU();
			this.initNet();
			this.initDash();
			this.initTcp();
		}
	}
</script>

<style scoped>
	.computer{
		display: inline-block;
		margin:10px;
		height:265px;
		width: 380px;
		border: 1px solid #e3e6e3;
		position: relative;
		text-align: center;
		color:#80848F;
	}
	.computer>img{
		width:80px;
		height:80px;
		margin:5px;
	}
	.computer p{
		text-align: center;
	}
	.computer .computer_head:hover{
		cursor: move;
	}
	.computer .computer_head{
		height:45px;
		border-bottom: 1px solid #e3e6e3;
		background:#e3e6e3;
	}
	.computer .computer_name{
		font-weight: bolder;
	}
	.head_item{
		display: inline-block;
		height: 100%;
		line-height:45px;
		vertical-align: middle;
	}
	.head_item.name{
		float: left;
		margin-left:10px;
		
	}
	.head_item.name>img{
		float: left;
		margin-top: 12px;
		margin-right:4px;
	}
	.head_item.del{
		margin-top:10px;
		float: right;
		margin-right:10px;
		width:26px;
		height:26px;
		background: url(../../../static/images/del.png);
		border:1px solid #D1D5DA;
		border-radius: 2px;
	}
	.head_item.del:hover{
		cursor:pointer;
		box-shadow:0px 0px 2px #8391A5;
	}
	
	.chart_item{
		height:55px;
		width: 100%;
		border-top: 1px solid #e3e6e3;;
	}
	.chart_title{
		float: left;
		height: 100%;
		width:70px;
		border-right: 0px solid gold;
	    display: flex;
	    display: -webkit-flex;
	    justify-content: center;
	    align-content: center;
	}
	.chart_title span{
		display: inline-block;
		line-height: 55px;

	}
	.chart_title span.dot{
		height:10px;
		width: 10px;
	    box-shadow:0 0 3px #19BE6B;
		background:#18B566;
		border-radius: 50%;
		margin-right:5px;
	}
	.chart_content{
		float:left;
		width:228px;
		height: 100%;
	}
	.show{
		width:70px;
		height: 100%;
		float: right;
		line-height:55px;
	}
	.show>div:nth-child(1){
		line-height: 35px;
	}
	.show>div:nth-child(2){
		line-height: 10px;
	}
</style>