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
              <!-- Tabs标签切换 -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="first">
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">
      </el-tab-pane>
      <el-tab-pane label="主播电台" name="third">主播电台</el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth">排行榜</el-tab-pane>
      <el-tab-pane label="歌手" name="five">歌手</el-tab-pane>
      <el-tab-pane label="最新音乐" name="six">最新音乐</el-tab-pane>
    </el-tabs>
             <span v-for="item in hotMusicListGategroy" :key="item.id">{{ item.name }}</span>
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
