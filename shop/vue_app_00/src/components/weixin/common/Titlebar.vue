<template>
<div class='page-head'>
<span>{{leftTitle}}</span>
<div class='right-head'>
<div @click='search' class='searchdiv'><img :src='rightFirstImg' style="width:25px"/></div>
<div @click='add3' 
class='searchdiv' style="margin-left:20px"><img :src='rightSecondImg' style="width:25px;margin-right:15px"/></div>

</div>
  
</div>
</template>
<script>
    export default{
        props:{
         leftTitle:{default:''},
         rightFirstImg:{default:''},
         rightSecondImg:{default:''},
         search:{type:Function},
         add3:{type:Function}
        },
        data(){return{}},
    }
</script>
<style scoped>
    .page-head{
        top:0px;
        display:flex;
        position:fixed;
        z-index:999;
        width:100%;
        justify-content:space-between;
        align-items:center;
        background-color:#3e3a39;
        padding-left:7px;
        padding-right:7px;
        height:48px;
        color:#fff;
        font-size:18px;
    }
    .right-head{
        display:flex;
    }
    .searchdiv{
        display:flex;
        align-items:center;
        height:48px;
    }
</style>
