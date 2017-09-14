<template>
     <div class="timer">
           <div class="hour">
               <div class="minutes">
                    <div class="seconds">
                         <div class="time">
                             
                         </div>
                    </div>
               </div>
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
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
   .timer{
   	position: relative;
   	width:200px;
   	height: 200px;
   	border: 1px solid green;
   	box-shadow: 0 0 4px gray;
   	border-radius: 50%;
   }
   .hour,.minutes,.seconds{
   	 position: relative;
   	 border:10px solid gainsboro;
   	 height: 100%;
   	 /*border-radius: 50%;*/
   }
   .hour{
   	  border:10px solid #19BE6B;
   }
   .minutes{
   	 border:10px solid #2B85E4;
   }
   
   .seconds{
   	  border: 8px solid #000;
    -moz-border-bottom-colors: red;
    -moz-border-top-colors:    blue;
    -moz-border-left-colors:   #555 #666 #777 #888 #999 #aaa #bbb #ccc;
    -moz-border-right-colors:  #555 #666 #777 #888 #999 #aaa #bbb #ccc;
   }
</style>