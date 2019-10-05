import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default.vue'
import BlankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/ChangeCity.vue'
import goodList from '@/page/goodList.vue'
import Login  from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history', //每次跳转时会刷新页面,可以拼接hash值,mode默认是hash,路由中会带#,会影响开发
  routes: [{
      path: '/',
      name: 'defaultPage',
      component: DefaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }, {
        path: 's/:name',
        name: 'goods',
        component: goodList
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: BlankPage,
      children:[{
        path:'login',
        name:'login',
        component:Login
      },{
        path:'register',
        name:'register',
        component:Register
      }]
    }
  ]
})
