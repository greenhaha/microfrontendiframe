import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Store from '../store'
import Home from '../views/Home.vue'
interface menuObj {
  path: string,
  name: string,
  address: string
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    name: 'Home',
    component: Home
  },
  {
    path: '/404',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

let registerRouteFresh = true
router.beforeEach(async (to, from, next) => {
  // console.log(to.path)
// 如果首次或者刷新界面，next(...to, replace: true)会循环遍历路由，如果to找不到对应的路由那么他会再执行一次beforeEach((to, from, next))直到找到对应的路由，我们的问题在于页面刷新以后异步获取数据，直接执行next()感觉路由添加了但是在next()之后执行的，所以我们没法导航到相应的界面。这里使用变量registerRouteFresh变量做记录，直到找到相应的路由以后，把值设置为false然后走else执行next(),整个流程就走完了，路由也就添加完了。
  if (registerRouteFresh) {
    console.log(Store.state.menuList)
    // const store = useStore()
    // console.log(store)
    const menuList = Store.state.menuList
    menuList.forEach((value: menuObj) => {
      router.addRoute({
        name: value.name,
        path: `/${value.path}`,
        component: Home
      })
    })
    next({ ...to, replace: true })
    registerRouteFresh = false
  } else {
    next()
  }
})

export default router
