//引入组件
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import HelloContainer from "./components/HelloWorld.vue"
Vue.use(Router)
//引入exam01的组件
import Exam01 from './components/exam/Exam01.vue'
import Exam02 from './components/exam/Exam02.vue'
import Exam03 from './components/exam/Exam03.vue'
import Exam04 from './components/exam/Exam04.vue'
import Examcontainer from './components/exam/Examcontainer.vue'
import S09 from './components/exam/S09.vue'
import F10 from './components/exam/F10.vue'
import Home from './components/weixin/Home.vue'
import MessageList from './components/weixin/common/MessageList.vue'
import Login from './components/xz/Login.vue'
import Home1 from './components/xz/Home1.vue'
import Product from './components/xz/Product.vue'
import Cart from './components/xz/Cart.vue'
//在这里添加了words的新路由
//主页
import HomePage from './components/words/HomePage.vue'
//登录
import LoginPage from './components/words/LoginPage.vue'
//个人中心
import MePage from './components/words/MePage.vue'
//挑战
import VsPage from './components/words/VsPage.vue'
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam04',component:Exam04},
    {path:'/Examcontainer',component:Examcontainer},
    {path:'/S09',component:S09},
    {path:'/F10',component:F10},
    {path:'/Home',component:Home},
    {path:'/MessageList',component:MessageList},
    {path:'/Login',component:Login},
    {path:'/Home1',component:Home1},
    {path:'/Product',component:Product},
    {path:'/Cart',component:Cart},
    //在这里注册了新的words路由
    //主页
    {path:'/Cart',component:Cart},
    //登录
    {path:'/LoginPage',component:LoginPage},
    //个人中心
    {path:'/MePage',component:MePage},
    //个人中心
    {path:'/VsPage',component:VsPage}
  ]
})
//配置exam01的路径