<template>
<div class='weixin_container'>
<div class="page-wrap">
<titlebar leftTitle='微信(11)' :rightFirstImg="require('../../assets/ic_search.png')" :rightSecondImg="require('../../assets/ic_add.png')" :search='mysearch' :add3='myadd3'>

</titlebar>
<div style="margin-top:0px"></div>
<mt-tab-container v-model="active">
    <mt-tab-container-item id="message">
       <messagelist></messagelist>
    </mt-tab-container-item>
</mt-tab-container>
<mt-tab-container v-model="active">
    <mt-tab-container-item id="contact">
       <MePage></MePage>
    </mt-tab-container-item>
</mt-tab-container>
<mt-tabbar v-model="active"fixed>
        <mt-tab-item id="message" @click.native="changeState(0)">
        <tabbaricon :selectedImage="require('../../assets/ic_weixin_selected.png')" :normalImage="require('../../assets/ic_weixin_normal.png')" :focused="currentIndex[0].isSelect"></tabbaricon>
        首页
    </mt-tab-item>

    <mt-tab-item id="contact" @click.native="changeState(1)">
        <tabbaricon :selectedImage="require('../../assets/ic_contacts_selected.png')" :normalImage="require('../../assets/ic_contacts_normal.png')" :focused="currentIndex[1].isSelect"></tabbaricon>
        生词本
    </mt-tab-item>

    <mt-tab-item id="find" @click.native="changeState(2)">
        <tabbaricon :selectedImage="require('../../assets/ic_find_selected.png')" :normalImage="require('../../assets/ic_find_normal.png')" :focused="currentIndex[2].isSelect"></tabbaricon>
        挑战
    </mt-tab-item>

    <mt-tab-item id="me" @click.native="changeState(3)">
        <tabbaricon :selectedImage="require('../../assets/ic_me_selected.png')" :normalImage="require('../../assets/ic_me_normal.png')" :focused="currentIndex[3].isSelect"></tabbaricon>
        我
    </mt-tab-item>

</mt-tabbar>
</div>
</div>
</template>
<script>
import Titlebar from './common/Titlebar.vue'
import MessageList from "./common/MessageList.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
import MePage from '../words/MePage.vue'
    export default{
        data(){return{
            active:"message",
                currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false}
            ]
        }},
        methods:{
            changeState(n){
                for(var i=0;i<this.currentIndex.length;i++){
                    if(n==i){
                        this.currentIndex[i].isSelect=true;
                    }else{
                        this.currentIndex[i].isSelect=false;
                    }
                }
            },
            mysearch(){
               console.log('搜索')
            },
            myadd3(){
                console.log('添加')
            }
        },
        components:{
            'Titlebar':Titlebar,
            "messagelist":MessageList,
            "tabbaricon":TabBarIcon,
            "MePage":MePage
            }
    }
</script>
<style scoped>
    .weixin_container{
        overflow:hidden;
    }
    .page-wrap{
        overflow:auto;
        padding-bottom:60px;
    }
    .mint-tabbar>.mint-tab-item{
        color:#999999;
    }
    .mint-tabbar>.mint-tab-item.is-selected{
       background-color:transparent;
       color:#45c018;
    }
</style>