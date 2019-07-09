<template>
   <div>
   <h3>表单练习</h3>
   <h4>开关组件</h4>
  <mt-switch v-model='val3'>开关</mt-switch >
   <h4>单选列表组件</h4>
   <mt-radio title='单选框列表' v-model='val4' :options="['选项a','选项b','选项c']"></mt-radio>
   <button @click='handleradio'>选中那个</button>   
   <h4>复选列表组件</h4>
   <mt-checklist title='复选框列表' v-model='val5' :options="['马达啦','萨斯个','哪里多']"></mt-checklist>
   <button @click='handlecheck'>读取复选框</button>
   </div>

</template>
<script>
    export default{
        data(){
            return{
            val3:true,
            val4:'',
            val5:[]
        }
        },
     methods:{
         handleradio(){
             console.log(this.val4)
         },
         handlecheck(){
             console.log(this.val5)
         }
     }
    }
</script>
<style>
    
</style>