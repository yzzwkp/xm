<template>
<div>第二个组件，唯一根元素<hr> 
简写提示框
<button @click='openAlert'>警告提示</button>
<button @click='openconfirm'>提示确认</button>
<button @click='openprompt'>输入确认</button>
</div>
</template>
<script>
  export default{
      data(){
          return {}
      },
      methods:{
          openAlert(){
            this.$messagebox('','删除成功');
                // title:'消息'，
          },
        openconfirm(){
            this.$messagebox.confirm('是否删除指定数据').then(action=>{

            }).catch(err=>{

            })
          },
          openprompt(){
              this.$messagebox.prompt('请输入年龄').then(({value,action})=>{
               
              }).catch(err=>{

            });
          }
      }
  }  
</script>
<style>
   
</style>