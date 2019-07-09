<template>
    <div>
    <message v-for="(item,i) of list.data" :key="i" :imgurl="require('../../../assets/a_7.png')" :title="item.title" :subtitle="item.subtitle" :sendtime="item.time" :id="item.id" :itemClick="clickItem" class="itemstyle"> 
    </message>
    </div>
</template>
<script>
import Message from './Message'
//引入json文件[数据]
//json文件引入当前项目
import messagejson from '../json/messagelist.json'
    export default{
        data(){
            return{
                list:messagejson
            }
        },
        methods:{
            clickItem(id){
                console.log(id);
            }
        },
        components:{
            "message":Message
        }
    }
</script>
<style scoped>
    .itemstyle{
        padding:5px;
        border-bottom:1px solid #d9d9d9;
    }
</style>