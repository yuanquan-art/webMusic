<template>
  <div>
    <div class="diantaiParent">
      <!-- 轮播图 -->
      <el-carousel class="diantaiLunbo" :interval="2000">
        <el-carousel-item
          v-for="(item, index) in diantaBannerList"
          :key="index"
        >
          <img :src="item.pic + '?param=1080y400'" />
        </el-carousel-item>
      </el-carousel>
      <div class="DiantaiCenter">
        <!-- 推荐歌单 -->
        <span class="tuijianMusic">付费精品</span>
        <span class="el-icon-arrow-right"></span>
        <div class="tjmusic">
          <div
            class="musicList"
            v-for="item in DiantaiMoneySpecilFourPicList"
            :key="item.id"
            @click="moneyJingchai(item.id, item.picUrl, item.originalPrice)"
          >
            <img :src="item.picUrl" alt="" />
            <div class="newMusicShuxing">
              <span>{{ item.name }}</span>
              <p>{{ item.rcmdText }}</p>
              <p>{{ item.lastProgramName }}</p>
              <p style="color:red">￥{{ item.originalPrice / 100 }}</p>
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
            @click="goTuijiandiantai(item.id, item.picUrl)"
          >
            <img :src="item.picUrl" alt="" />
            <div class="tjRecommandShuxing">
              <span>{{ item.name }}</span>
              <span class="artistsName">{{ item.artistName }}</span>
            </div>
          </div>
        </div>
        <!-- 创作翻唱 -->
        <div class="chuangZuoFanChang">
          <span class="tuijianMusic">创作翻唱</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="tjRecommand">
          <div
            class="tjRecommandList"
            v-for="(item, index) in chuangzuoFanchangSixPicList"
            :key="index"
            @click="goTuijiandiantai(item.id, item.picUrl)"
          >
            <img :src="item.picUrl" alt="" />
            <div class="tjRecommandShuxing">
              <span class="artistsName">{{ item.rcmdtext }}</span>
            </div>
          </div>
        </div>
        <!-- 声之剧场 -->
        <div class="chuangZuoFanChang">
          <span class="tuijianMusic">声之剧场</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="tjRecommand">
          <div
            class="tjRecommandList"
            v-for="(item, index) in DiantaiMoneySpecilSixPicList"
            :key="index"
            @click="moneyJingchai(item.id, item.picUrl, item.originalPrice)"
          >
            <img :src="item.picUrl" alt="" />
            <div class="tjRecommandShuxing">
              <span>{{ item.rcmdText }}</span>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 电台轮播图列表
      diantaBannerList: [],
      //bannner
      bannerlist: [],
      //电台付费精品4图展示列表
      DiantaiMoneySpecilFourPicList: [],
      //电台付费精品之声之剧场6图展示列表
      DiantaiMoneySpecilSixPicList: [],
      // 主播电台个性推荐
      persongRecommandList: [],
      // 创作翻唱列表6图展示列表
      chuangzuoFanchangSixPicList: [],
    };
  },
  created() {
    this.getDiantaiLunbotuList();
    this.getDiantaiMoneySpecilFourPic();
    this.getDiantaiMoneySpecilSixPic();
    this.getPersonTuijianDiantaiList();
    this.getChuangzuoFanchangSixPicList();
  },
  methods: {
    //获取电台轮播图列表
    async getDiantaiLunbotuList() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/dj/banner"
      );
      this.diantaBannerList = res.data;
    },
    // 获取电台付费精品4图展示
    async getDiantaiMoneySpecilFourPic() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/dj/paygift?limit=4"
      );
      this.DiantaiMoneySpecilFourPicList = res.data.list;
    },
    // 获取电台个性推荐列表
    async getPersonTuijianDiantaiList() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/dj/personalize/recommend"
      );
      this.persongRecommandList = res.data;
    },
    // 获取创作翻唱列表6图展示
    async getChuangzuoFanchangSixPicList() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/dj/radio/hot?cateId=2001"
      );
      for (let i = 0; i < 6; i++) {
        this.chuangzuoFanchangSixPicList.push(res.djRadios[i]);
      }
    },
    // 获取 //电台付费精品之声之剧场6图展示列表
    async getDiantaiMoneySpecilSixPic() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/dj/paygift?limit=10"
      );
      for (let i = 4; i < 10; i++) {
        this.DiantaiMoneySpecilSixPicList.push(res.data.list[i]);
      }
    },
    // 跳转到付费精品页面
    moneyJingchai(id, url) {
      this.$router.push({
        path: "/moneyBeautiful",
        query: {
          id: id,
          picUrl: url,
          originalPrice: originalPrice,
        },
      });
    },
    // 去推荐电台
    goTuijiandiantai(id, url, originalPrice) {
      this.$router.push({
        path: "/tuijianDiantai",
        query: {
          id: id,
          picUrl: url,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.diantaiLunbo {
  width: 1080px;
  left: 150px;
}
.DiantaiCenter {
  margin: 20px auto 0 auto;
  width: 1100px;
}
// 音乐推荐
.tuijianMusic {
  font-weight: 900;
  font-size: 20px;
  color: #373737;
}

.el-carousel__item:nth-child(1) {
  transform: translateX(347.5px) scale(1);
}

.el-icon-arrow-right {
  width: 20px;
  font-size: 20px;
  margin-left: 5px;
}
// 音乐推荐
.musicList {
  width: 500px;
  height: 100px;
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 40px;
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 5px;
    border-radius: 5px;
  }
}

.tjmusic {
  display: flex;
  flex-wrap: wrap;
}
.buttom {
  width: 1270px;
  height: 200px;
}
.newMusicShuxing {
  margin-left: 10px;
  display: inline-block;
  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
// 电台个性推荐
.personDiantaiTi {
  margin-bottom: 10px;
}
.tjRecommand {
  display: flex;
  .tjRecommandList {
    margin-right: 20px;
    width: 163px;
    height: 163px;
    img {
      width: 163px;
      height: 163px;
      margin-bottom: 5px;
    }
  }
}
// 创作翻唱
.chuangZuoFanChang {
  margin-top: 50px;
}
</style>
