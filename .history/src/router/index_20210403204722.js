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
          component: ()=>import('../components/Home/discoverMusic/PersonalRecommand.vue')
      }
    ]   
  }      
   
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
