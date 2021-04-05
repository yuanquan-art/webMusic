<template>
  <div>
     <div class="gedanParent">
      <div class="juzhong">
         <a href="#">
         <img src="../../../assets/images/jingpingedan.jpg" alt="">
       </a>
      </div>
       
     </div> 
  </div>  
</template>

<script>
export default {
 data(){
   return {
    // 热门歌单分类列表
    hotMusicListGategroy : []
   }
 },
 created(){
    this.getHotMusicListGategroy();
 },
 methods:{
     // 获取热门歌单分类
     async getHotMusicListGategroy(){
         const {data:res} = await this.$axios.get("/playlist/hot");
         console.log(res)
         this.hotMusicListGategroy = res.tags; 
     }
 }    
}
</script>

<style lang="less" scoped>
.gedanParent{
  img{
    display: block;
    margin: 0 auto;
  }
 
}
</style>
