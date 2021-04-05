<template>
  <div>
     <div class="gedanParent">
       <a href="#">
         <img src="../../../assets/images/jingpingedan.jpg" alt="">
       </a>

     </div> 
  </div>  
</template>

<script>
export default {
 data(){
   return {
    // 热门歌单分类列表
    HotMusicListGategroy : []
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
