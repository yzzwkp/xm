import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上三行不动保留位置，引入有序，第三方组件库在下面引入

//1:完整引入mint-ui
import MintUI from 'mint-ui'
//2:单引入mint-ui
import'mint-ui/lib/style.css'
Vue.use(MintUI);
import './font/iconfont.css'
import axios from './axios'
//6.引入vuex
import Vuex from "vuex"
//7.注册vuex组件
Vue.use(Vuex)
//8.创建vuex 实例  stort
var store=new Vuex.Store({
  //vuex中全局共享数据
  state:{cartCount:0},
  //修改vuex中全局共享数据
  mutations:{
    //购物车的数量+1
    increment(state){
      state.cartCount++;
    },
    //购物车数量添加指定值5
    updateCount(state,c){
      state.cartCount+=c;
    }
  },
  //获取vuex中全局共享数据
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }
})

//9.将store保存在vue实列中
Vue.config.productionTip = false
new Vue({//
  router,
  render: h => h(App),
  store
}).$mount('#app')
