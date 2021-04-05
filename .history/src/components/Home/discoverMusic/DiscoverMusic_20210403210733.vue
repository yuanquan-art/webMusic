<template>
  <div class="discoverMusic">
    <!-- Tabs标签切换 -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="first">
          <router-link :to="{ path: }"></router-link>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">歌单</el-tab-pane>
      <el-tab-pane label="主播电台" name="third">主播电台</el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth">排行榜</el-tab-pane>
      <el-tab-pane label="歌手" name="five">歌手</el-tab-pane>
      <el-tab-pane label="最新音乐" name="six">最新音乐</el-tab-pane>
    </el-tabs>
 
    <!-- 空白div  底部占位 -->
    <div class="buttom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Tabs激活默认
      activeName: "first",
      //bannner
      bannerlist: [],
      // 推荐歌单
      tuijianMusicList: [],
      // 独家放送入口列表
      dujiafansongRukouList: [],
      // 推荐新音乐列表
      tuijianNewMusicList: [],
      // 推荐MV列表
      tuijianMVList: [],
      // 主播电台个性推荐
      persongRecommandList: []
    };
  },
  created() {
    this.getBanner();
    this.getTuijianMusicList();
    this.getDujiafangsongRukouList();
    this.getTuijianNewMusicList();
    this.getTuijianMVList();
    this.getPersonTuijianDiantaiList();
  },
  methods: {
    //获取轮播图
    async getBanner() {
      const { data: res } = await this.$axios.get("/banner?type=0");
      this.bannerlist = res.banners;
    },
    // 获取推荐歌单
    async getTuijianMusicList() {
      const { data: res } = await this.$axios.get("/personalized?limit=10");
      this.tuijianMusicList = res.result;
    },
    // 获取独家放送入口列表
    async getDujiafangsongRukouList() {
      const {data:res} = await this.$axios.get('/personalized/privatecontent');
      this.dujiafansongRukouList = res.result;
    },
    //获取推荐新音乐列表
    async getTuijianNewMusicList() {
      const {data:res} = await this.$axios.get('/personalized/newsong?limit=12');
      this.tuijianNewMusicList = res.result;
    },
    //获取推荐MV列表
    async getTuijianMVList() {
      const {data:res} = await this.$axios.get('/personalized/mv');
      this.tuijianMVList = res.result;
    },
    async getPersonTuijianDiantaiList() {
      const {data:res} = await this.$axios.get('/dj/personalize/recommend');
      console.log(res)
      this.persongRecommandList = res.data;
    }

  },
};
</script>

<style lang="less" scoped>
.tuijianMusic {
  font-weight: 900;
  font-size: 20px;
  color: #373737;
}

.el-icon-arrow-right {
  width: 20px;
  font-size: 20px;
  margin-left: 5px;
}
// 音乐推荐
.musicList {
  width: 250px;
  height: 255px;
  margin-top: 10px;
  margin-right: 20px;
   margin-bottom: 40px;
    img {
  width: 250px;
  height: 250px;
  margin-bottom: 5px;
}
}

.tjmusic{
  display: flex;
  flex-wrap: wrap;
}
.buttom{
  width: 1270px;
  height: 200px;
}
//独家发送
.dujiaMokuai{
  margin-top: 20px;
}
.dujiaFangsong{
  font-weight: 900;
  font-size: 20px;
  color: #373737;
}
// 独家放送入口列表
.dujiaRukouList{
  width: 430px;
  height: 255px;
  margin-top: 10px;
  margin-right: 20px;
  img{
    width: 430px;
    margin-bottom: 5px;
  }
}
.nearNewMusic{
   margin-top: -20px;
}
.newMusic{
  font-weight: 900;
  font-size: 20px;
  color: #373737;
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
  margin-left: 67px;
}
// 推荐MV
.tjMV{
  height: 250px;
  .tuijianMVList{
  width: 320px;
  height: 210px;
  margin-top: 10px;
  margin-right: 20px;
  float: left;
  overflow: hidden;
  img{
    width: 300px;
    height: 150px;
    }
  }
  .MVShuxing{
    margin-left: 0;
    margin-top: 10px;
  }
}
// 电台个性推荐
.personDiantaiTi{
   margin-bottom: 10px;
}
.tjRecommand{
    display: flex;
   .tjRecommandList{
      margin-right: 20px;
      width: 208px;
      height: 250px;
      img{
         width: 208px;
         height: 208px;
         margin-bottom: 5px;
      }
      .tjRecommandShuxing{

      }
   }
}
</style>
