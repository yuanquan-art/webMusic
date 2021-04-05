<template>
  <div>
     <div class="gedanParent">
      <div>
        <a href="#">
         <img src="../../../assets/images/jingpingedan.jpg" alt="">
       </a>
            <!-- 热门歌单分类 -->
         <div id="remenMusicListGategory">
           <div>1</div>
           <div>
             <span v-for="item in "></span>
           </div>
         </div>
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
  display: flex;
  justify-content: center;
  #remenMusicListGategory{
    display: flex;
    justify-content: space-between;
  }
}
</style>
