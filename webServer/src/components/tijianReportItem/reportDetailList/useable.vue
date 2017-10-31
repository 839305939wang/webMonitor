<template>
	<div class="useable">
		 <div class="chart" ref="chart">
		 </div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			data:{
				
			}
		},
		methods:{
			initChart(){
				let obj = this.$refs.chart;
				let option = {
					 chart: {
				        inverted: true,
				        marginLeft: 135,
				        type: 'bullet'
				    },
				    title: {
				        text: null
				    },
				    legend: {
				        enabled: false
				    },
				    plotOptions: {
				        series: {
				            pointPadding: 0.25,
				            borderWidth: 0,
				            color: '#000',
				            targetOptions: {
				                width: '200%'
				            }
				        }
				    },
				    exporting: {
				        enabled: false
				    },
				    xAxis: {
				        categories: ['<span class="hc-cat-title">新客户</span><br/>数量']
				    },
				    yAxis: {
				        plotBands: [{
				            from: 0,
				            to: 1400,
				            color: '#666'
				        }, {
				            from: 1400,
				            to: 2000,
				            color: '#999'
				        }, {
				            from: 2000,
				            to: 9e9,
				            color: '#bbb'
				        }],
				        labels: {
				            format: '{value}'
				        },
				        title: null
				    },
				    series: [{
				        data: [{
				            y: 1650,
				            target: 2100
				        }],
				        type:'bar'
				    }],
				    tooltip: {
				        pointFormat: '<b>{point.y}</b> （目标值 {point.target}）'
				    },
				    credits: {
				        enabled: true
				    }
				}
			let chart = this.echart.init(obj);
			 chart.setOption(option, true);
			
			}
		},
		mounted(){
			this.initChart();
		}
	}
</script>

<style scoped>
	.useable{
		height: 100%;
		width: 100%;
	}
	.useable .chart{
		height: 100%;
		width: 100%;
	}
</style>