/**
 * 主机页面
 */
<template>
	 <div class="master">
	 	  <div class="master_bar">
	 	  	  <div class="master_bar_item marter_search">
	 	  	  	 <Input v-model="search_value" @on-change="search" icon="ios-search" placeholder="请输入主机名称..." style="width: 300px"></Input>
	 	  	  </div>
	 	  	  <div class="master_bar_item master_change">
	 	  	  	   <ButtonGroup>
				        <Button type="success" @click="changeType('list')">列表</Button>
				        <Button @click="changeType('tubiao')">图表</Button>
				    </ButtonGroup>
	 	  	  </div>
	 	  </div>
          <div v-if="showType=='list'" class="master_table">
          	<Table :columns="columns" :data="data"></Table>
          </div>
          <div v-if="showType=='tubiao'" class="master_list">
          	    <master v-for="item in data" :item="item"></master>
          </div>
	 </div>
</template>

<script>
	import master from '../components/master/master.vue';
	export default {
	    data(){
	    	return {
	    		 search_value:'',
	    		 showType:'list',
	    		 columns:[
						 {
						 	type: 'index',
	                        width: 60,
	                        title:'序号',
	                        align: 'center'
	                     },
						 {
	                        title: '主机名称',
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
	                        	    		src:params.row.type==1?'../../../static/images/linux_m.png':'../../../static/images/win_m.png'
	                        	    	},
	                        	    	style:{
	                        	    		marginTop:'5px',
	                        	    		
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
	                        	  		overflow:'hiddden',
	                        	  		textOverflow:'ellipsis',
	                        	  		lineHeight:'40px'
	                        	  	}
	                        	  },params.row.name)
	                        	]
	                        }
	                    },
	                    {
	                        title: '公网IP',
	                        key: 'outIp',
	                         align: 'center'
	                    },
	                    {
	                        title: '内网IP',
	                        key: 'inIp',
	                         align: 'center'
	                    },
	                    {
	                        title: 'CPU',
	                        key: 'cpu',
	                        width:'220px',
	                        align: 'center',
	                        className:'flexCell',
	                        render:(h, params) => {
	                             return [
	                                h('div',{
	                                	props:{
	                                		className:'cpu_process'
	                                	},
	                                	style:{
		                                 	background:params.row.status=="0"?'#a9b1ad':'#fff',
		                                 	height:'25px',
		                                 	width:'180px'
		                                }
	                                },[
	                                  h('div',{
	                                	props:{
	                                		className:'cpu_process'
	                                	},
	                                	style:{
		                                 	background:params.row.status=="0"?'#a9b1ad':'#46c017',
		                                 	height:'25px',
		                                 	width:params.row.cpu*180+'px'
		                                }
	                                  })
	                                ]),
	                                h('div',{
	                                	props:{
	                                		className:'cpu_desc'
	                                	},
	                                	style:{
		                                 	height:'25px',
		                                 	width:'35px'
		                                }
	                                },params.row.status=="0"?'':params.row.cpu*100+'%')
	                             ]
	                        }
	                    },
	                    {
	                        title: '内存',
	                        key: 'dash',
	                        width:'220px',
	                        align: 'center',
	                        className:'flexCell',
	                        render:(h, params) => {
	                        	var color = "rgb(70, 192, 23)";
	                        	if(params.row.dash>=0.8){
	                        		color = "rgb(245, 217, 12)";
	                        	}
	                        	if(params.row.dash>=0.9){
	                        		color = 'red';
	                        	}
	                            return [
	                                h('div',{
	                                	props:{
	                                		class:'dash_process'
	                                	},
	                                	style:{
	                                		background:params.row.status=="0"?'#a9b1ad':'#fff',
		                                 	height:'25px',
		                                 	width:'180px'
		                                }
	                                },[
	                                  h('div',{
	                                	props:{
	                                		className:'dash_process'
	                                	},
	                                	style:{
		                                 	background:params.row.status=="0"?'#a9b1ad':color,
		                                 	height:'25px',
		                                 	width:params.row.cpu*180+'px'
		                                }
	                                  })
	                                ]),
	                                h('div',{
	                                	props:{
	                                		className:'dash_desc'
	                                	},
	                                	style:{
		                                 	height:'25px',
		                                 	width:'35px'
		                                }
	                                },params.row.status=="0"?'':params.row.dash*100+'%')
	                             ]
	                        }
	                    },
	                    {
	                        title: '状态',
	                        key: 'status',
	                        align: 'center',
	                        render:(h, params) => {
	                        	var name = "正常在线";
	                        	var color = "green";
	                        	if(params.row.status=="2"){
	                        		name = "故障"
	                        		color = 'yellow'
	                        	}else if(params.row.status=="0"){
	                        		name = "离线",
	                        		color = '#sliver';
	                        	}
	                            return  h('Tag', {
		                                props: {
		                                    type: 'dot',
		                                    color: color
		                                }
                                }, name);
	                        }
	                     }   
                    ],
                    dataAll:[
                     {
                        name: 'SESU-12.8',
                        inIp: "172.10.2.15",
                        outIp:'120.24.68.29',
                        cpu:'0.60',
                        dash:'0.80',
                        status: '1',
                        type:'1',
                        id:"001"
                    },
                    {
                        name: 'windows-10_yangyangwang',
                        inIp: "172.10.2.14",
                        outIp:'120.24.68.25',
                        cpu:'0.36',
                        dash:'0.60',
                        status: '2',
                        type:'2',
                        id:"002"
                    },
                    {
                        name: 'Centos-14.8',
                        inIp: "172.10.2.16",
                        outIp:'120.24.68.26',
                        cpu:'0.66',
                        dash:'0.98',
                        status: '0',
                        type:'1',
                        id:"003"
                    }],
                    data:[
                     {
                        name: 'SESU-12.8',
                        inIp: "172.10.2.15",
                        outIp:'120.24.68.29',
                        cpu:'0.60',
                        dash:'0.80',
                        status: '1',
                        type:'1',
                        id:"001"
                    },
                    {
                        name: 'windows-10_yangyangwang',
                        inIp: "172.10.2.14",
                        outIp:'120.24.68.25',
                        cpu:'0.96',
                        dash:'0.90',
                        status: '2',
                        type:'2',
                        id:"002"
                    },
                    {
                        name: 'Centos-14.8',
                        inIp: "172.10.2.16",
                        outIp:'120.24.68.26',
                        cpu:'0.66',
                        dash:'0.78',
                        status: '0',
                        type:'1',
                        id:"003"
                    }]
	    	}
	    },
	    props:{
	    	
	    },
	    components:{
	    	master
	    },
	    methods:{
		    search(){
	    		if(this.search_value){
	    			this.data = this.dataAll.filter((value)=>{
	    			  if(value.name.indexOf(this.search_value)!=-1){
	    			  	  return value;
	    			  }
	    		  });
	    		}else{
	    			this.data = this.dataAll;
	    		}   		   		
	    	},
	    	changeType(type){
	    		this.showType = type
	    	}
	    },
	    computed:{
	    	
	    },
	    mounted(){
	    	
	    }
	}
</script>

<style scoped>
	.master_bar{
		height:48px;
		width: 100%;
		background: #fff;
		display: flex;
		display: -webkit-flex;
		justify-content:flex-end;
		align-items: center;
		border-bottom:1px solid #F3F5F8
	}
	
	.master_bar_item.master_change{
		margin-right:20px;
	}
	.master_bar_item.marter_search{
		margin-right:5px;
	}
	.ivu-btn-group>.ivu-btn{
		border-radius: 0px;
	}
    
    .master_list{
    	padding: 20px 30px;
    }
    .zidigyicell.tableCelleImg{
    	cursor:pointer;
    }
</style>