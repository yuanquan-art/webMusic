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
        path: '/loveList',
        component: ()=>import('../components/Home/LoveList/LoveList.vue')
      },
      {
        path: '/hotcomments',
        component: ()=>import('../components/Home/Comments/HotComments.vue')
      },
      {
        path: '/tuijianDiantai',
        component: ()=> import('../components/Home/discoverMusic/Diantai/TuijianDiantai.vue')
      },
      {
        path: '/moneyBeautiful',
        component: ()=>import('../components/Home/moneyBeautiful/MoneyBeautiful.vue')
      },
      {
        path: '/personalMainPage',
        component: ()=>import('../components/Home/personalMainPage/PersonalMainPage.vue')
      },
      {
        path: '/privateFM',
        component: ()=>import('../components/Home/PrivateFM/PrivateFM.vue')
      },
      {
        path: '/myMusicCloud',
        component: ()=>import('../components/Home/MyMusicClound/MyMusicClound.vue')
      },
      {
        path: '/hidden',
        component: ()=>import('../components/Home/Hidden/Hidden.vue')
      }   
    ]   
  },
  {
    path: '/dujiaSend',
    component: ()=>import('../components/Home/discoverMusic/DujiaFangsong/DujiaFangsong.vue')
  }      
   
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
