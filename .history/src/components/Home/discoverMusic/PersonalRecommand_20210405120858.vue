<template>
    <div>
         <!-- 轮播图 -->
        <el-carousel :interval="4000" type="card" height="220px">
          <el-carousel-item v-for="item in 10" :key="item">
            <img :src="bannerlist[item].imageUrl" />
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
        <!-- 独家放送 -->
       <div class="dujiaMokuai">
           <span class="dujiaFangsong">独家放送</span>
          <span class="el-icon-arrow-right"></span>
        <div class="tjmusic">
          <div
            class="dujiaRukouList"
            v-for="item in dujiafansongRukouList"
            :key="item.id"
          >
            <img :src="item.picUrl" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
       </div>
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
       <!-- 推荐MV -->
       <div class="dujiaMokuai">
           <span class="dujiaFangsong">推荐MV</span>
          <span class="el-icon-arrow-right"></span>
        <div class="tjMV">
          <div
            class="tuijianMVList"
            v-for="item in tuijianMVList"
            :key="item.id"
          >
            <img :src="item.picUrl" alt="" />
           <div class="MVShuxing">
            <span>{{ item.name }}</span>
            <span class="artistsName">{{ item. artistName }}</span>
            </div>
          </div>
        </div>
       </div>
      <!-- 电台个性推荐 -->
        <div class="personDiantaiTi">
           <span class="tuijianMusic">主播电台</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="tjRecommand">
          <div
            class="tjRecommandList"
            v-for="item in persongRecommandList"
            :key="item.id"
          >
            <img :src="item.picUrl" alt="" />
           <div class="tjRecommandShuxing">
            <span>{{ item.name }}</span>
            <span class="artistsName">{{ item. artistName }}</span>
            </div>
          </div>
        </div>
    <!-- 听听 -->
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
</template>


<script>
export default {
   data() {
    return {
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
      console.log(this.bannerlist);
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

.el-carousel__item:nth-child(1){
  transform: translateX(347.5px) scale(1);
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
