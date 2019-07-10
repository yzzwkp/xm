<template>
    <div>
      <div class="Recommend">
          每日好句推荐
      </div>
      <!-- 轮播图 -->
      <div class="Sowing">

      </div>
       <!-- 搜索框 -->
        <div class="search1">
      <input type="text" placeholder="请输入单词搜索" class="search">
      <button class="btn"><img src="" alt=""></button>
      </div>
      <!-- 搜索内容 -->
      <div class="search_d">
        <div></div>
        <div></div>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
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
    }
   
</style>