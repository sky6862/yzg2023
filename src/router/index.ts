import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue' //后台首页
import Layout from '../views/Layout/Layout.vue'
const GoodsList = () => import(/* webpackChunkName: "GoodsList" */ '../views/Goods/GoodsList.vue')
const GoodsAdd = () => import(/* webpackChunkName: "GoodsAdd" */ '../views/Goods/GoodsAdd.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect:"/home", //跳到首页

    // chldren 里面的内容会显示在 layout 页面中的 router-view 
    children:[
      {
        path: '/home',
        name: 'home_page',
        component:Home
      }
    ]
  },
  // 商品管理
  {
    path:"/goods",
    name: 'goods',
    component: Layout,
    children:[
      // 子路由中不要带/,/表示根目录
      {
        // /goods/goods_list
        path: 'goods_list',
        name: 'goods_list',
        component:GoodsList
      },
      {
        // /goods/goods_add
        path: 'goods_add',
        name: 'goods_add',
        component:GoodsAdd
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
