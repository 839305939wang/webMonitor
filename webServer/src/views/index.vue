<template>
	<div class="main_container">
		<Row type="flex" :gutter="10" :style="{height:'400px'}">
			<Col span="6" :class="{chart:true}">
				<Card :class="{total_chart:true}">
					<div slot="title" class="total_header">
                         <p>主机</p>
                         <div class="total_header_content">
                         	<div class="total_header_content_left">
                         		<div>
                         			<span><span style="font-size:30px;font-weight: bold;">9</span>台</span>
                         		</div>
                         	</div>
                         	<div class="total_header_content_right">
                         		<ul>
                         			<li><span>通信总线服务器 : </span><span>3台</span></li>
                         			<li><span>通信总线服务器 : </span><span>3台</span></li>
                         			<li><span>通信总线服务器 : </span><span>3台</span></li>
                         		</ul>                   		
                         	</div>
                         </div>
					</div>
					<div class="total_content">
	                      <div class="online_chart">
	                      	   <span>9</span>
	                      </div>
	                       <div class="chart_desc">
	                      	  <div class="online_type normal"><span class="online_type_icon normal_icon"></span><span>正常运行:</span>8</div>
	                      	  <div class="online_type alarming"><span class="online_type_icon alarming_icon"></span><span>正常运行:</span>8</div>
	                      	  <div class="online_type hasStop"><span class="online_type_icon hasStop_icon"></span><span>正常运行:</span>8</div>
	                      	  <div class="online_type release"><span class="online_type_icon release_icon"></span><span>正常运行:</span>8</div>
	                      </div>
					</div>
					<div class="total_icon">
						
					</div>
				</Card>
			</Col>
			<Col span="18">
			    <Row :class="{status_item:true}" :style="{height:'110px'}" :gutter="10">
			    	<Col span="8" :class="{chart:true}">
			    		<Card :style="{background:'#19be6b'}">
			    			<h4 class="">体检中心</h4>
							<div class="card_icon card_">
			                  
							</div>
						</Card>
			    	</Col>
			    	<Col span="8" :class="{chart:true}">
						<Card :style="{background:'#eb5e3c'}">
							<h4 class="">体检中心</h4>
							<div class="card_icon card_check">
                                <Icon size="50" type="ios-medkit-outline"></Icon>
							</div>
						</Card>
					</Col>
					<Col span="8" :class="{chart:true}">
						<Card :style="{background:'#7696de'}">
							<h4 class="">体检中心</h4>
							<div class="card_icon">
			                      <Icon size="48" type="person-stalker"></Icon>			                     
							</div>
						</Card>
					</Col>
			    </Row>
			    <Row :style="{height:'290px'}" :gutter="10" :class="{table_item:true}">
			    	<Col span="12" >
			    		<Card padding="0 0 0 15" :class="{mark_card:true}">
							 <div slot="title" class="card_header">
			                    <span class="left_title">
							 		主机访问轨迹
							 	</span>
							 	<span>
							 		<Icon size="25" type="ios-location-outline"></Icon>
							 	</span>
							 	<span class="right_handl">
							 		<a href="">更多</a>
							 	</span>
							 </div>
							 <div class="mark_list">
							 	<workMark></workMark>
							 	<workMark></workMark>
							 	<workMark></workMark>
							 	<workMark></workMark>
							 	<workMark></workMark>
							 </div>
						</Card>
			    	</Col>
			    	<Col span="12" :class="">
						<Card :class="{card_alarm:true}" padding="0">
							 <div slot="title" class="card_header">
								 	<span class="left_title">
								 		告警消息
								 	</span>
								 	<span>
								 		<Icon size="25" type="ios-chatboxes-outline"></Icon>
								 	</span>
								 	<span class="right_handl">
								 		<a href="">更多</a>
								 	</span>
							</div>
							<div>
								<alarmBox></alarmBox>
							</div>
						</Card>
					</Col>					
			    </Row>
			</Col>			
		</Row>
		<Row type="flex" :gutter="1" :style="{minHeight:'280px'}" :class='{computers:true}'>
			<Col span="24" :class="">
						<Card>
							 <div slot="title"  class="card_header">
								 	<span class="left_title">监控仪表盘</span>
								 	<Button type="ghost" size="small" @click="showAddCard();">+</Button>							 	
							</div>
							<div v-if="computer_list.length==0" class="empty_monitor">
								  <div class="no_computer">
								  	   <div class="add_computer">
								  	   	   <p>可以将你特别关注的主机添加到这里</p>
								  	   	   <Button type="success" @click="showAddCard();">立即添加</Button>
								  	   </div>
								  </div>
							</div>
							<div class="mintor_List">
								<computer v-for="info in computer_list" :key="info.id" :Data="info" @setComputer="setComputer" @deleteComputer="deleteComputer"></computer>
							</div>
						</Card>
			</Col>	
		</Row>
		
		<!--监控主机添加面板-->
		<Modal
        v-model="addmodel"
        width="650"
        class-name="vertical-center-modal" @on-cancel="modalCancel">
            <div class="addHead">
            	<div class="add_title">
            		 <h2>添加关注的主机</h2>
            		 <p class="desc">将您特别关注的主机添加到仪表盘中（最多可添加15台）</p>
            	</div>          
            </div>
            <div class="addBody">
            	 <Tabs value="linux">
            	 	<TabPane label="linux" name="linux" icon="social-tux" >
			        	<Table :columns="columns" :data="linux_data" @on-select="select" @on-select-cancel="selectCancel" @on-select-all="selectAll"></Table>
			        </TabPane>
			        <TabPane label="win" name="win" icon="social-windows">
			        	<Table :columns="columns" :data="win_data" @on-select="select" @on-select-cancel="selectCancel" @on-select-all="selectAll"></Table>
			        </TabPane>
			        <TabPane label="mac" name="mac" icon="social-apple">
			        	<Table :columns="columns" :data="mac_data" @on-select="select" @on-select-cancel="selectCancel" @on-select-all="selectAll"></Table>
			        </TabPane>			       
			    </Tabs>
            </div>
            <div slot="footer" class="add_footer">
            	<div class="btn_group">
            		<Button type="ghost" @click="modalCancel">取消</Button>
            	    <Button type="success" @click="sure_add">添加</Button>
            	</div>
            </div>
        </Modal>
		
		<!--监控选项设置面板-->
		<Modal v-model="adjustMode" width="650" class-name="adjust vertical-center-modal" @on-cancel="modalCancel">
            <div class="adjustHead">
            	<div class="adjust_title">          		
            		 <div class="adjust_title_img">
            		 	<img src="../../dist/static/images/win.png"/>
            		 </div>
            		 <div class="desc">
            		 	Windows10_Wang(调整主机监控项顺序)
            		 </div>
            	</div>          
            </div>
            <div class="adjustBody">
            	  <!--<div class="show_area now_show"></div>
            	  <div class="show_area wait_show"></div>-->
            	  <Transfer
		        :data="data3"
		        :target-keys="targetKeys3"
		        :list-style="listStyle"
		        :render-format="render3"
		        :operations="['移除','添加']"
		        filterable
		        :titles="['待显示区','显示区']"
		        @on-change="handleChange3">
    </Transfer>
            </div>
            <div slot="footer" class="add_footer">
            	<div class="btn_group">
            		<Button type="ghost" @click="">取消</Button>
            	    <Button type="success" @click="">确定</Button>
            	</div>
            </div>
        </Modal>
		
		
	</div>
</template>

<script>
	import workMark from "../components/workMark/workMark.vue";
	import alarmBox from "../components/alarm_table";
	import computer from "../components/computer";
	import config from "../common/config.js"
	export default {
		data() {
				return {
					data3: this.getMockData(),
	                targetKeys3: this.getTargetKeys(),
	                listStyle: {
	                    width: '200px',
	                    height: '280px'
	                },
					 computer_list:[
					 
					 ],
					 select_list:[],
					 addmodel:false,
					 adjustMode:false,
					 columns:[
						 {
						 	type: 'selection',
	                        width: 60,
	                        align: 'center'
	                     },
						 {
	                        title: '主机名称',
	                        key: 'name'
	                    },
	                    {
	                        title: '主机IP',
	                        key: 'ip'
	                    },
	                    {
	                        title: '状态',
	                        key: 'status',
	                        render:(h, params) => {
	                            return h('span', {
	                                  style:{
	                                        color: 'green'
	                                    },
	                                   on:{
	                                        click: () => {
	                                            /*this.show(params.index)*/
	                                        }
	                                    }
	                            },"正常运行");
	                        }
	                     }   
                    ],
                    linux_data:[
                     {
                        name: 'SESU-12.8',
                        ip: "172.10.2.15",
                        status: '1',
                        id:"001"
                    },
                    {
                        name: 'ubantu-10.8',
                        ip: "172.10.2.16",
                        ststus: '2',
                        id:"002"
                    },
                    {
                        name: 'SESU-12.8-01',
                        ip: "172.10.2.17",
                        ststus: '1',
                        id:"003"
                    }],
					mac_data:[],
					win_data:[]
				}	
			},
			mounted() {
				
			},
			methods: {
					getMockData () {
		                let mockData = config.minitor_types;
		                return mockData;
		            },
		            getTargetKeys () {
		                return []
		            },
		            handleChange3 (newTargetKeys) {
		                this.targetKeys3 = newTargetKeys;
		            },
		            render3 (item) {
		                return item.label + ' - ' + item.description;
		            },
		            reloadMockData () {
		                this.data3 = this.getMockData();
		                this.targetKeys3 = this.getTargetKeys();
		            },
		        setComputer(id){
		        	if(id){
		        		this.adjustMode = true
		        	}
		        },
				deleteComputer(id){
					console.log("id:"+id);
					this.computer_list = this.computer_list.filter(function(item){
						if(item.id!=id){
						   return item	
						}						
					})
				},
				showAddCard(){
					this.addmodel=true
				},
				cancel(){
					this.addmodel=false
				},
				add(){
					 
				},
				selectAll(selects){
					console.log(selects)
					this.select_list = selects
				},
				selectCancel(select,row){
					console.log(row)
					this.deleteCom(row);
				},
				select(select,row){
					this.addCom(row);
				},
				deleteCom(obj){
					if(obj){
						this.select_list = this.select_list.filter(function(item){
							if(item.id!=obj.id){
								return item;
							}
						})
					}
				},
				addCom(obj){
					let target =[];
					if(obj){
						target = this.select_list.filter(function(item){
							if(item.id==obj.id){
								return item;
							}
						})
					};
					if(target.length==0){
						this.select_list.push(obj);
					}
				},
				modalCancel(){
					this.select_list = [];
					this.addmodel = false;
				},
				sure_add(){
					this.computer_list = [];
					for(var item in this.select_list){
						this.computer_list.push(this.select_list[item]);
					}
					this.addmodel = false;
				}
			},
			components:{
				workMark,
				alarmBox,
				computer,
			}
	}
</script>

<style >
	* {
		padding: 0;
		margin: 0;
		text-align: left;
	}
	
	.main_container {
		padding:10px;
		color: white;
	}
	
	.ivu-row-flex>.ivu-col>.ivu-card {
		height: 100%;
		position: relative;
	}
	
	.ivu-card-head {
		padding: 5px
	}
	


	.ivu-card-head{
		background: #f5f5f5;
	}
	.card_header{
		position: relative;
		height:40px;
		padding:5px;
		line-height: 30px;
		font-size:16px;
		
	}
	.left_title{
		float:left;
		margin-right:10px;
		color: #3f3f3f;
	}
	.right_handl{
		float: right;
	}
	.total_chart .ivu-card-head{
		min-height:100px;
		background:#a992e2;
	}
	.status_item{
		margin-bottom: 10px;
	}
	.status_item>.ivu-col{
		height:100%;
	}
	.ivu-card{
		height: 100%;
	}
	.status_item .ivu-card:nth-of-type(1){
		background: #55badf;
	}
	
	.table_item .ivu-col{
		height: 100%;
	}
	.computers{
	  margin-top: 20px;	
	}
	.total_header_content{
		position: relative;
		min-height:65px;
		display: flex;
		display: -webkit-flex;
		align-content: center;
		justify-content: center;
		color: white;
	}
	.total_chart{
		background: #b7a6e0;
	}
	.total_chart .ivu-card-head p{
		color: white;
	}
	.total_header_content_left{
		width:60px;
		height: 60px;
		margin:5px;
		line-height: 60px;
		display: flex;
		display: -webkit-flex;
		align-content: center;
		justify-content: center;
	}
	.total_header_content_left>p{
		text-align: center;
	}
	.total_header_content_right{
		min-width:60px;
		min-height: 60px;
		margin:5px;
		
	}
	.total_header_content_right>ul>li{
		margin:2px;
		list-style: circle;
	}
	.total_content{
		margin-top:15px;
		text-align: center;
	}
	.total_icon{
		width:70px;
		height: 70px;
		position:absolute;
		right: 5px;
		bottom: 5px;
		background:url(../static/images/total_ng.png);
	}
	.online_chart{
		height:130px;
		width: 130px;
		color: #3f3f3f;
		font-weight: bolder;
		border: 3px solid green;
		border-radius: 50%;
		display: inline-block;
		line-height:110px;
		font-family: "agency fb";
		font-size:35px;
		text-align: center;
		background: #f3f3f3;
	}
	.chart_desc{
		display: flex;
		display: -webkit-flex;
		align-content: center;
		justify-content: center;
		flex-wrap: wrap;
		padding-top: 16px;
	}
	.online_type{
		display: inline-block;
		width: 100px		
	}
	.online_type_icon{
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin-right:5px;
	}
	.normal_icon{		
		background: green;
	}
	.alarming_icon{
		background: yellow;
	}
	.hasStop_icon{
		background: gray;
	}
	.release_icon{
		background: orangered;
	}
	
	.empty_monitor{
		position: relative;
		margin: 0 auto;
		height:250px;
		width:750px;
		border: 0px solid yellowgreen;
		background: url(../static/images/bg2.png) no-repeat;
	}
	.no_computer>.add_computer{
		text-align: center;
		position: absolute;
		left: 62%;
		top:40%;

	}
	.no_computer>.add_computer>p{
		 color: slategray;
		 font-size: 15px;
	}
	.no_computer>.add_computer>button{
		margin-top: 10px;
	}
	.mark_card .ivu-card-body{
		padding:15px 0px;
	}
	.card_alarm .ivu-card-body{
		height:80%;
	}
    .vertical-center-modal .ivu-modal{
    	    position: absolute;
    	    left: 50%;
    	    margin-left: -300px;
            top: 50%;
    	    margin-top: -250px;
        }
    .addHead{
    	height:100px;
    	background: #577cce;
    	background: url(../static/images/add.png)  95% 50% no-repeat #577cce;
    }
    .vertical-center-modal .ivu-modal-body{
    	height:350px;
    	padding: 0px;
    }
    .add_title{
    	width:350px;
    	height:100%;
    	color: white;
    }
    .add_title h2,.add_title p{
    	text-align: center;

    }
    .add_title h2{
    	line-height:70px;
    }   
    .add_title p{
    	line-height:0px;

    }
    .addBody .ivu-tabs-bar{
       margin-bottom: 0px;	
    }
    .addBody{
    	padding:0 10px;
    	height:250px;
    }
     .add_footer{
    	height:50px;
    	background: #F7F9FB;
    }
    .vertical-center-modal .ivu-modal-footer{
    	padding: 0px;
    }
    .btn_group{
    	width:130px;
    	float: right;
    	margin-right:10px;
    	margin-top:10px;
    }
    .mintor_List{
    	width: 100%;
    	height:100%;   	
    }
    .ivu-card-body{
    	height: 81%;
    }
    .vertical-center-modal .ivu-modal-body{
    	/*height:500px;*/
    	background: #F7F9FB;
    }
    .adjustHead{
    	height: 50px;
    	line-height: 50px;
    	background: #F7F9FB;
    }
    .adjust_title{
    	display: flex;
    	display: -webkit-flex;
    	align-items: center;
    }
    .adjust_title{
    	padding-left:10px;
    }
    .adjust_title .adjust_title_img{
    	margin:10px;
    }
    .adjust_title img{
    	float: left;
    	line-height:20px;
    }
    .adjustBody{
    	height:300px;
    	width: 90%;
    	margin: 0 auto;
    	overflow: auto;
    	background: #FFF;
    	border: 1px solid gainsboro;
    	display: flex;
    	display:-webkit-flex;
    	justify-content: center;
    	align-items: center;
    }
    .show_area{
    	height:250px;
    	width:40%;
    	border: 1px solid gainsboro;
    	margin: 5px;
    }
   
</style>