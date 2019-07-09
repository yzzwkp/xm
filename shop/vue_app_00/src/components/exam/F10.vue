<template>
<div>
   <h3>父组件F10</h3>
   <s09 
   msg='微信(11)'
   :img_url="require('../../assets/01.png')"
   add3='myadd'
   ></s09>
</div>
</template>
<script>
import S09 from './S09';
    export default{
       data(){
           return{
               
           }
       },
       components:{
           's09':S09
       },
       methods:{
        myadd(){

        }
       }
    }
</script>