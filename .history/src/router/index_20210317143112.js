import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
     path: '/home',
     name: 'Home',
     component: () => import('../components/Home/Home.vue')
    },
  {
    path: '/login',
    component: ()=>import('../components/Login/Login.vue')
  },
  {
    path: '/home',
    component: ()=>import('../components/Home/Home.vue'),
    redirect: '/discoverMusic',
    children: [
      {
          path: '/discoverMusic',
          component: ()=>import('../components/Home/discoverMusic/DiscoverMusic.vue')
      },
      {
          path: '/video',
          component: ()=>import('../components/Home/video/Video.vue')
      }
    ]   
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
