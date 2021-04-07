<template>
  <div>
    <div class="diantaiParent">  
       <!-- 轮播图 -->
        <el-carousel class="diantaiLunbo" :interval="2000" >
          <el-carousel-item v-for="(item,index) in diantaBannerList" :key="index">
            <img :src="item.pic +'?param=1080y400'" />
          </el-carousel-item>
        </el-carousel>
         
            <!-- 推荐歌单 -->
         <span class="tuijianMusic">推荐歌单</span>
          <span class="el-icon-arrow-right"></span>
        <div class="tjmusic">
         
          <div
            class="musicList"
            v-for="item in tuijianMusicList"
            :key="item.id"
          >
            <img :src="item.picUrl" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 电台轮播图列表
      diantaBannerList: [ ],
       //bannner
      bannerlist: [],
    }
  },
  created(){
    this.getDiantaiLunbotuList();

  },
  methods: {
    //获取电台轮播图列表
    async getDiantaiLunbotuList(){
        const {data:res} = await this.$axios.get('/dj/banner');
        this.diantaBannerList = res.data;
        console.log(this.diantaBannerList)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
