<template>
    <div>
      <div class="Recommend">
          每日推荐
      </div>
      <!-- 轮播图 -->
      <div class="Sowing">
          <div id="left1">
      <homepage></homepage>
        </div>
      </div>
       <!-- 搜索框 -->
        <div class="search1">
      <input type="text" placeholder="请输入单词搜索" class="search">
      <button class="btn"></button>
      </div>
      <!-- 搜索内容 -->
      <div class="search_d">
        <div>
       <p>为你搜索到以下单词</p>
         <div>
             <p>how are you</p>
         </div>
          <div>
              <p>你好吗？</p>
          </div>
        </div>
        <div><img src="../../assets/01.png" alt=""></div>
      </div>
    </div>
</template>

<script>
import HomePage from './HomePage';
    export default {
        data(){
            return {}
        },
        methods:{
      
        },
        components:{
           'homepage':HomePage
       },
    }
</script>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
} 
/* 搜索框 */
.search1{
    display: flex;
    justify-content: flex-end;
    border: 1px solid brown;
    width: 99%;
    height: 60px;
    background-color: #f9940c;
    border-radius: 11px;
    margin: 10px 0;
}
    .search{
        width: 99%;
        height: 37px;
        outline: none;
        margin-top: 10px;
        border:0;
    }
    /* 搜索按钮 */
    .btn{
      width: 60px;
      height: 37px;
      position: absolute;
      margin-top: 10px;
      border-radius: 5px;
      outline: none;
      background-image:url("../../assets/soushuo1.png");
      background-size:46px 31px;
      background-repeat:no-repeat;
    }
    .search_d{
        border: 1px solid #f9940c;
        width: 99%;
        height: 230px;
        top:300px;
        position:absolute;
        top:375px;
    }
    .search_d>div:nth-child(1){
        border: 1px solid #f9940c;
        width: 49%;
        height:230px;
        float: left;
    }
    .search_d>div:nth-child(1)>div>p{
        width: 100%;
        height: 100%;
       text-align: center;
       line-height: 85px;
       color: blue;
    }
     .search_d>div:nth-child(1)>p:nth-child(1){
         color:rgb(109, 18, 112);
         width: 85%;
         margin: 0 auto;
     }
    .search_d>div:nth-child(1)>div:nth-child(2){
        border: 1px solid #f9940c;
        width: 90%;
        height: 85px;
        margin: 0 auto;
        margin-top: 10px;
        border-radius: 11px;
    }
    .search_d>div:nth-child(1)>div:nth-child(3){
        border: 1px solid #f9940c;
        width: 90%;
        height: 85px;
        margin: 0 auto;
        margin-top: 10px;
        border-radius: 11px;
    }
    /* 搜索内容右侧div */
    .search_d>div:nth-child(2){
        border: 1px solid #f9940c;
        width: 49%;
        height:230px;
        float: right;
    }
    .search_d>div:nth-child(2)>img{
width: 100%;
height: 100;
    }
    /* 每日好句推荐 */
    .Recommend{
       width: 99%;
        height: 40px;
        border: 3px solid #f9940c;
        border-radius:11px;
        margin: 0 auto;
        color:blue;
        text-align: center;
        line-height: 36px;
        
    }
    /* 轮播图 */
    .Sowing{
         width: 99%;
        height: 200px;
        border: 1px solid #f9940c;
        margin: 0 auto;
        margin-top: 10px;
        overflow: hidden;
    }
   #left1{
    width: 99%;
    height: 30%;
    overflow: hidden;
    position: fixed;
    float: left;
}
#play-lun{
    width: 1920PX;
    height: 100%;
}
#play-lun>li{
    float: left;
    list-style: none;
}
#play-lun>li>img{
width: 356px;
height: 158px;
border: 1px solid #f9940c;
}
</style>