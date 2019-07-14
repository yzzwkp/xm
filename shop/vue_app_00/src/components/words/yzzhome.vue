<template>
    <div>
      <div class="Recommend">
          每日好句推荐
      </div>
      <!-- 轮播图 -->
      <div class="Sowing">
          <div id="left1">
          <ul id="play-lun">
            <li><img src="../../assets/01.png" alt=""></li>
            <li><img src="../../assets/02.png" alt=""></li>
            <li><img src="../../assets/03.png" alt=""></li>
            <li><img src="../../assets/04.png" alt=""></li>
          </ul>
        </div>
      </div>
       <!-- 搜索框 -->
        <div class="search1">
      <input type="text" placeholder="请输入单词搜索" class="search">
      <button class="btn"><img src="" alt=""></button>
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
    export default {
        data(){
            return {}
        },
        methods:{
     
        }
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
    background-color: rgb(126,178,248);
    border-radius: 11px;
    margin: 10px 0;
}
    .search{
        width: 99%;
        height: 37px;
        outline: none;
        margin-top: 10px;
        border-radius: 10px;
    }
    /* 搜索按钮 */
    .btn{
      width: 60px;
      height: 41px;
      position: absolute;
      margin-top: 10px;
      border-radius: 5px;
      outline: none;
    }
    .search_d{
        border: 1px solid red;
        width: 99%;
        height: 170px;
    }
    .search_d>div:nth-child(1){
        border: 1px solid red;
        width: 49%;
        height:170px;
        float: left;
    }
    .search_d>div:nth-child(1)>div>p{
        width: 100%;
        height: 100%;
       text-align: center;
       line-height: 60px;
       color: blue;
    }
     .search_d>div:nth-child(1)>p:nth-child(1){
         color:rgb(109, 18, 112);
         width: 85%;
         margin: 0 auto;
     }
    .search_d>div:nth-child(1)>div:nth-child(2){
        border: 1px solid blue;
        width: 90%;
        height: 60px;
        margin: 0 auto;
        margin-top: 10px;
        border-radius: 11px;
    }
    .search_d>div:nth-child(1)>div:nth-child(3){
        border: 1px solid blue;
        width: 90%;
        height: 60px;
        margin: 0 auto;
        margin-top: 10px;
        border-radius: 11px;
    }
    /* 搜索内容右侧div */
    .search_d>div:nth-child(2){
        border: 1px solid red;
        width: 49%;
        height:170px;
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
        border: 1px solid red;
        margin: 0 auto;
        color:blue;
        text-align: center;
        line-height: 40px;
        
    }
    /* 轮播图 */
    .Sowing{
         width: 99%;
        height: 157px;
        border: 1px solid red;
        margin: 0 auto;
        margin-top: 10px;
         overflow: hidden;
    }
   #left1{
    width: 99%;
    height: 100%;
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
border: 1px solid hotpink;
}
</style>