<template>
  <div id="app">
  	 <div class="headerBar">
               <div class="item logo">
                  <span>YSM</span>
               </div>
                <div class="item menu_list_icon">
                	 <Poptip v-model="menuShow" placement="bottom-start">
							        <div class="imgItem" :style="{top:'40px'}">
			                 	 <div class="icon">
			                 	 	  <Icon type="ios-home-outline"></Icon>
			                 	 </div>
			                   <span>主页</span>
			                   <div class="icon down">
			                 	 	  <Icon type="ios-arrow-down"></Icon>
			                 	 </div>
			                </div>
							        <div slot="content" class="menu_list">
							             <div class="menu_item main_index">
								             	 <Tooltip content="主页">
														          <img src="./static/images/0.png"/>
														   </Tooltip>
							             	  
							             </div>
							             <div class="menu_item main_com">
							             	 <Tooltip content="主机">
													         <img src="./static/images/1.png"/>
													   </Tooltip> 
							             </div>
							             <div class="menu_item main_dash">
							             	 <Tooltip content="磁盘">
													         <img src="./static/images/2.png"/>
													   </Tooltip>
							             	     
							             </div>
							             <div class="menu_item main_tijian">
							             	 <Tooltip content="体检中心">
													         <img src="./static/images/3.png"/>
													   </Tooltip>
							             </div>
							             <div class="menu_item main_work">
							             	 <Tooltip content="作业中心">
													          <img src="./static/images/4.png"/>
													   </Tooltip>							             	    
							             </div>
							             <div class="menu_item main_log">
							             	 <Tooltip content="操作日志">
													         <img src="./static/images/5.png"/>
													   </Tooltip>  
							             </div>							          
							        </div>
							    </Poptip>
	                 
               </div>
               <div class="item right search_icon">
               	    <Poptip v-model="searchShow" placement="bottom-end">
							         <div class="imgItem">
		                     <div class="icon">		                     	
												     <Icon type="ios-search" size="20"></Icon>
			                 	 </div>
		                  </div>
		                  <div slot="content" class="search_content">
								            <Input v-model="value" placeholder="请输入主机名称" style="width: 300px"></Input>
								            <Button type="ghost" shape="circle" icon="ios-search"></Button>
								      </div>
		                </Poptip>
               </div>
              <div class="item right msg_list_icon">
                  <Poptip v-model="msgListShow" placement="bottom-end">
							         <div class="imgItem">
		                     <div class="icon">
		                     	 <Badge dot>
												         <Icon type="ios-email-outline" size="28" :class="{msg_icon:false}"></Icon>
												    </Badge>
			                 	 </div>
		                   </div>
		                    <div slot="title" class="msg_list_title">
		                    	   <Button type="text" size="small" :class="{left:true}">系统消息</Button>
								             <Button type="ghost" size="small" :class="{right:true}" @click ="igoreAll">忽略</Button>
								        </div>
			                  <div slot="content" class="msg_list">
								             	<msgItem v-for = "item in msg_list" :item="item" @igore="igore"></msgItem>
								        </div>
							    </Poptip> 
               </div>

               <div class="item person">
	               	<Poptip v-model="personShow" placement="bottom">
								         <div class="person_head imgItem">
			                      <img src="./static/images/one.jpg" alt="" />
			                      <span>yangyang</span>
			                      <div class="icon down">
				                 	 	  <Icon type="ios-arrow-down"></Icon>
				                 	 </div>
			                   </div>
			                    <ul class="person_info_list" slot="content">
								              <li>
								              	<a>个人信息</a>
								              </li>
								              <li>
								              	<a>系统设置</a>
								              </li>
								              <li>
								              	<a>注销</a>
								              </li>
								          </ul>
								    </Poptip> 
               </div>
               
     </div>
     <router-view></router-view>
  </div>
</template>

<script>
	import msgItem from 'components/msg/msg_item.vue';
  import 'common/css/reset.css';
  export default {
    name: 'app',
    data(){
    	return {
    		menuShow:false,
    		personShow:false,
    		searchShow:false,
    		msgListShow:false,
    		msg_list:[{id:'01',type:0,view:true,msg:'通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。'},{id:'02',type:1,view:false,msg:'通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。'},{id:'03',type:0,view:true,msg:'通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。'}]
    	}
    },
    methods:{
       close(){
       	this.menuShow = !this.menuShow
       },
       igore(id){
       	 this.msg_list = this.msg_list.filter(function(item){
       	 	  if(item.id == id){
       	 	  	 item.view = false;
       	 	  };
       	 	  return item
       	 });
       	 
       },
       igoreAll(){
       	this.msg_list = this.msg_list.filter(function(item){
       	 	  item.view = false;
       	 	  return item
       	 });
       }
    },
    components:{
    	msgItem
    },
    computed:{
    	
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .btn{
  	border:1px solid green;
  	min-width:60px;
  	height:30px;
  	color:white;
  	background: green;
    border-radius: 3px;;
  }
   .headerBar{
        width: 100%;
        height: 60px;
        background:#0d67b7;
        padding: 10px 20px;
     }
     .headerBar .item{
        height:40px;
        min-width: 60px;
        line-height:40px;
        text-align: center;
        display: inline-block;
     }
     .imgItem{
     	   display:flex;
         display: -webkit-flex;
         align-items: center;
         height:100%;
     }
     .imgItem .icon{
     	    width:30px;
          height:30px;
          font-size: 20px;
          color: white;
          line-height: 30px;
          text-align: center;
     }
     .imgItem .icon.down{
     	  font-size: 15px;
     	  width:20px;
        height:20px;
     	 line-height:25px;
     }
      .headerBar .item.logo{
         float: left;
         font-size: 16px;
         color: #FA8072
     }
     .imgItem img{
         width:30px;
         height:30px;
         border:1px solid grayscale;
      }
      .imgItem span{
      	margin-left: 5px;
      	font-size: 16px;
      	color: white;
      }
     .headerBar .item.person{
        float: right;
     }
     .person_head img{
     	height: 30px;
     	width: 30px;
     	border-radius: 50%;
     }
     .ivu-poptip-content{
     	box-shadow: 0 0 14px -4px #000;
     }
     ul.person_info_list>li{
     	line-height:30px;
     	padding:3px 10px;
     	border-bottom: 1px solid gainsboro;
     	font-size: 13px;
   /*  	font-weight: 600;*/
     	
     }
    ul.person_info_list>li>a{
    	color: #333;
    }
		.person .ivu-poptip-body{
			padding: 0px 0px;
		}
		.msg_icon{
			  width: 35px;
        height: 35px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
		}
	
		.right{
			float: right;
		}
		.left{
			float: left;
		}
		.msg_list_icon .ivu-poptip,.msg_list_icon .ivu-poptip-rel{
			height: 100%;
		}
		.msg_list_icon .ivu-poptip-popper{
			
		}
		.msg_list_title{
			height: 24px;
		}
		.msg_list{
			width: 350px;
		}
		.item.menu_list_icon{
			float: left;
			margin-left:30px;
		}
		.menu_list{
			max-width:320px;
			display: flex;
			display: -webkit-flex;
			flex-wrap: wrap;
		}
		.menu_list>.menu_item{
			width:58px;
			height: 58px;
			margin:3px;
		}
		.menu_list>.menu_item:hover{
			background:#f3eeed;
		}
		.menu_list>.menu_item img{
			width: 57px;
			height: 57px;
			text-align: center;
		}
		.search_content{
			width:340px;
		}
		.search_icon .ivu-poptip-rel{
			margin-top: 8px;
		}
</style>
