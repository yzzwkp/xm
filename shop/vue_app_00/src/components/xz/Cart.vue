<template>
    <div class="cart">
        <div class="selectAll">
            全选
            <input type="checkbox" @change="selectAll" />
        </div>
        <div class="cart-item" v-for="(item,i) of list" :key="i">
            <div class="leftImgText">
                <input type="checkbox" v-model="item.cb" />
                <img :src="'http://127.0.0.1:3000/img/'+item.img_url" />
                <div class="price">
                    <span>{{item.price}}</span>
                </div>
            </div>
            <mt-button :data-id="item.id" @click="delItem">删除</mt-button>
        </div>
        <div>
            <mt-button @click="delAll">删除选中的商品</mt-button>
            <h3>
            购物车的数量：
            <span style="color:red">
                {{$store.getters.getCartCount}}
            </span>
            </h3>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            
            return{
                list:[]
            }
        },
        created(){
            this.loadMore();
        },
        methods:{
            delAll(){
            //删除多个商品
                //1.创建变量保存空字符串
                var str="";
                // 2.创建循环拼接字符串内容
                for(var item of this.list){
                    if(item.cb){
                        str+=item.id+","
                    }
                }
                 //console.log(str);
                 //1,6,
                 //截取最后内容之前的内容，
                 str=str.substring(0,str.length-1);
                 console.log(str);
                //3.判断如果用户没有选商品提示
                if(str.length==0){
                    this.$toast("请选中商品");
                    return;
                }
                //4.发送ajax请求5.重新加载数据
                var url="delAll";
                var obj={ids:str};
                this.axios.get(url,{params:obj}).then(result=>{
                    //获取没有删除的数据
                    this.loadMore();
                });
            }
            ,
            delItem(e){
                //1:获取当前商品id
                    var id=e.target.dataset.id;
                //2:显示交互确认框
                //3:如果用户选择“确认”
                this.$messagebox.confirm("是否删除指定数据").then(action=>{
                    var  url="delItem";
                    var obj={id:id};
                    //4:发送ajax删除数据
                    this.axios.get(url,{params:obj}).then(result=>{
                        this.loadMore();
                    })
                    //5:如果用户选择“取消”
                }).catch(err=>{
                    return;
                })     
                
            },
            selectAll(e){
                var cb=e.target.checked;
                for(var item of this.list){
                    item.cb=cb;
                }
            },
            loadMore(){
               //1:创建url
               var url="cart";
               //2:发送ajax请求
               this.axios.get(url).then(result=>{
                  // this.list=result.data.data;
                  //1:获取服务器数组
                  var rows=result.data.data;
                  //2:创建循环为数组中每个对象添加cb属性
                  //2.1cb控制商品前复选框
                  for(var item of rows){
                      item.cb=false;
                  //2.2更新购物车的数量
                  this.$store.commit("increment");
                  }
                  //3:将新数据保存
                  this.list=rows;
               })
            }
        }
    }
</script>
<style scoped>
    .cart-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #ccc;
    }
    .leftImgText{
        display:flex;
    }
    .leftImgText img{
        width:50px;
        height:50px;
    }
    .price{
        margin-top:15px;
    }
</style>