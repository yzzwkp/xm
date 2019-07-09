<template>
<div>
   <h3>子组件s0.vue</h3>
      <h3>{{msg}}</h3>
      <img :src='img_url'/>
      <button @click='add3'>点击事件</button>
</div>
</template>
<script>
    export default{
        props:{
            msg:{default:''},
            img_url:{default:''},
            add3:{type:Function}
        },
       data(){
           return{
               
           }
       },
       methods:{

       }
    }
</script>