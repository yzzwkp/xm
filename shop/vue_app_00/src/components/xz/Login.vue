<template>
    <div class="login_container">
        <mt-field :placeholder="unameHolder" v-model='uname' class="myinput"></mt-field>
        <mt-field :placeholder="upwdHolder" v-model='upwd' type='password' class="myinput"></mt-field>
        <mt-button size="large" class="mybutton" @click="login">登录</mt-button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                unameHolder:"请输入用户名",
                upwdHolder:"请输入密码",
                uname:"tom",
                upwd:"123"
            }
        },
        methods:{
            login(){
                var u=this.uname;
                var p=this.upwd;
                var reg=/^[a-z0-9_]{3,12}$/i;
                if(!reg.test(u)){
                    this.$toast("用户名格式不正确");
                    return;
                }
                if(!reg.test(p)){
                    this.$toast("密码格式不正确");
                    return;
                }
                var url="login";
                var obj={uname:u,upwd:p};
                this.axios.get(url,{params:obj}).then(result=>{
                    console.log(result);
                    //1:判断服务器返回结果
                    //2:code:>0跳转Home1组件
                    if(result.data.code>0){
                        this.$router.push("/Home1");
                    }else{
                        this.$messagebox("提示","用户名或密码有误");
                    }
                    //3:创建xz/Home.vue组件
                    //4:code<0 交互提示框
                });
            }
        }
    }
</script>
<style scoped>
    .login_container{
        padding-top:40px;
        background-color:#ddd;
    }
</style>