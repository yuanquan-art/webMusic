import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: ()=>import('../components/Home/Home.vue'),
    // 临时注释
    redirect: '/discoverMusic',
    // redirect: '/friends',
    children: [
      {
          path: '/discoverMusic',
          component: ()=>import('../components/Home/discoverMusic/discoverMusic.vue'),
      },
      {
          path: '/video',
          component: ()=>import('../components/Home/Videozujian/Video.vue') 
      },
      {
         path: '/searchhome',
         component: ()=>import('../components/Home/Search/SearchHome.vue')
      },
      {
        path: '/friends',
        component: ()=>import('../components/Home/Friends/Friends.vue')
      },
      {
        path: '/musicListXQ',
        component: ()=>import('../components/Home/discoverMusic/MusicListXQ/MusicListXQ.vue')
      },
      {
        path: '/hotcomments',
        component: ()=>import('../components/Home/Comments/HotComments.vue')
      }
    ]   
  }      
   
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
