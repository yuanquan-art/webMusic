<template>
  <div>
    <div class="diantaiParent">  
       <!-- 轮播图 -->
        <el-carousel class="diantaiLunbo" :interval="2000" >
          <el-carousel-item v-for="(item,index) in diantaBannerList" :key="index">
            <img :src="item.pic +'?param=1080y400'" />
          </el-carousel-item>
        </el-carousel>
       <!-- 最新音乐 -->
        <div class="nearNewMusic">
           <span class="newMusic">最新音乐</span>
          <span class="el-icon-arrow-right"></span>
        <div class="tjmusic">
          <div
            class="nearNewMusicList"
            v-for="item in tuijianNewMusicList"
            :key="item.id"
          >
            <img class="newMusicPic" :src="item.picUrl" alt="" />
            <div class="newMusicShuxing">
            <span>{{ item.name }}</span>
            <span class="artistsName">{{ item.song.album.artists[0].name }}</span>
            </div>
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
.diantaiLunbo{
   width: 1080px;
   left: 150px;
}
// 最新音乐
.nearNewMusicList{
  width: 430px;
  height: 60px;
  margin-top: 10px;
  margin-right: 20px;
  img{
    width: 50px;
  }
}
.newMusicPic{
  float: left;
}
.artistsName{
  display: block;
}
.newMusicShuxing{
  margin
  .tjmusic{
  display: flex;
  flex-wrap: wrap;
}
.buttom{
  width: 1270px;
  height: 200px;
}-left: 67px;
}
</style>
