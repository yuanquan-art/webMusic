<template>
  <div>
     <div class="gedanParent">
      <div>
        <a href="#">
         <img src="../../../assets/images/jingpingedan.jpg" alt="">
       </a>
            <!-- 热门歌单分类 -->
         <div id="remenMusicListGategory">
           <div class="gedanFenleiMing">{{activeName}}</div>
           <div>
              <!-- Tabs标签切换 -->
                <el-tabs v-model="activeName"             @tab-click="handleClick">
                  <el-tab-pane :label="item.name"             :name="item.name" v-for="item in             hotMusicListGategroy" :key="item.id">{{       item.name }} dddddddddddddddddd
                  </el-tab-pane>
                </el-tabs>
             <span></span>
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
    // Tabs激活默认
      activeName: "first",
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
        //  console.log(res)
         this.hotMusicListGategroy = res.tags; 
        //  console.log(this.hotMusicListGategroy);
     }
 }    
}
</script>

<style lang="less" scoped>
.gedanParent{
  display: flex;
  justify-content: center;
  img{
    display: block;
    margin-left: 250px;
  }
  #remenMusicListGategory{
    display: flex;
    justify-content: space-between;
    .gedanFenleiMing{
      
    }
    .el-tabs__content{
      overflow: none;
      margin-left: -287px;
    }
  }
}
</style>
