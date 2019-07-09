<template>
    <div @click="itemClick(id)" class="rootstyle">
        <div class="leftimgandtxt">
            <img :src="imgurl" class="imgstyle" />
            <div class="rightOfImg">
                <span class="title">{{title}}</span>
                <span class="subtitle">{{subtitle}}</span>
            </div>
        </div>
        <span class="sendtime">{{sendtime}}</span>
    </div>
</template>
<script>
    export default{
        props:{
            imgurl:{default:""},
            title:{default:""},
            subtitle:{default:""},
            sendtime:{default:""},
            id:{default:""},
            itemClick:{type:Function}
        },
        data(){
            return{}
        }
    }
</script>
<style scoped>
    .rootstyle{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .leftimgandtxt{
        display:flex;
    }
    .imgstyle{
        width:50px;
        height:50px;
    }
    .rightOfImg{
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin-left:7px;
    }
    .title{
        color:#000;
        font-size:17px;
    }
    .subtitle{
        color:gray;
        margin-top:4px;
    }
    .sendtime{
        color:gray;
    }
</style>