<template>
<div>
<h1>输入域</h1>
<div>
  <mt-field label='用户名' placeholder='请输入用户名' :attr='{maxlength:10}' v-model='uname'></mt-field>
   <mt-field label='密码' placeholder='请输入密码' :attr='{maxlength:10}' v-model='upwd' type='password'></mt-field>
    <mt-field label='生日' placeholder='请输入生日' :attr='{maxlength:8}' v-model='birth' type='date'></mt-field>
</div>
</div>
</template>
<script>
  export default{
      data(){
          return {uname:'tom',
                   upwd:'',
                   birth:''
                }
      },
      methods:{
        
      }
  }  
</script>
<style>
    
</style>