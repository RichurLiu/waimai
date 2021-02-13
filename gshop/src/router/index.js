// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 配置所有多有routes数组
  routes: [
    // 路由是个对象
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/search',
      component: Search
    },
    // 默认显示msite
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})

