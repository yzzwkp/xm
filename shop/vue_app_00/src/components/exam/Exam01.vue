<template>
<div>第一个组件，唯一根元素<hr> 
<button @click='openToast'>显示提示信息</button>
</div>
</template>
<script>
  export default{
      data(){
          return {}
      },
      methods:{
          openToast(){
             this.$toast({
                 message:'操作成功',
                 position:'middle',
                 duration:3000
             })
             
          }
      }
  }  
</script>
<style>
    
</style>