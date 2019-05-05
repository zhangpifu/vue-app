import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from 'layout/index'
import store from '@/store'
Vue.use(VueRouter)

const isLogin = ''

const routers = [{
    path: '/',
    component: Layout,
    // redirect: 'index', // 重定向
    children: [{
        path: '',
        name: 'index',
        component: () => import('@/views/home/index'),
        meta: {
          title: '首页',
          leftArrow: false, // 显示返回箭头 // 默认值是true
          needValid: false, // 判断是否需要登录，或者验证用户信息
          headerShow: true, // 显示头部 默认值是true,
          tabbarShow: true // 显示底部 默认值是false,
        }
      },
      {
        path: 'mall',
        name: 'mall',
        component: () => import('@/views/home/subpage/mall'),
        meta: {
          title: '商城',
          needValid: false // 判断是否需要登录，或者验证用户信息
        }
      }
    ]
  },

  // 我的
  {
    path: '/mine',
    component: Layout,
    // redirect: '/mine/mIndex',
    children: [{
      path: '',
      name: 'mine',
      component: () => import('@/views/mine/index'),
      meta: {
        title: '我的',
        leftArrow: false,
        needValid: true,
        tabbarShow: true
      }
    }]
  },

  // 登录
  {
    path: '/login',
    component: Layout,
    children: [{
      path: '',
      name: 'login',
      component: () => import('@/views/login/index'),
      meta: {
        title: '登录',
        icon: '',
        needValid: false
      }

    }]

  },
  {
    path: '*',
    component: import('@/views/404')
  }
]

var router = new VueRouter({
  // mode: 'history',
  routes: routers
})

router.beforeEach((to, from, next) => {
  // console.log(to),
  // console.log(from)
  store.dispatch('modifyRouterMate', to.meta)
  if (to.meta.needValid) {
    if (isLogin) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          fullPath: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
export default router
