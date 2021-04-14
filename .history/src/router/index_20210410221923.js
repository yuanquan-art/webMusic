import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: ()=>import('../components/Home/Home.vue'),
    redirect: '/discoverMusic',
    children: [
      {
          path: '/discoverMusic',
          component: ()=>import('../components/Home/discoverMusic/discoverMusic.vue'),
      },
      {
          path: '/video',
          component: ()=>import('../components/Home/Videozujian/Video.vue') 
      }
    ]   
  }      
   
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
