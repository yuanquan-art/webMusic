<template>
  <div>
    <div class="dujiaSendParent">
      <el-container>
        <el-aside width="600px">
          <p class="mvxq">
            &lt; MV详情
          </p>
          <div class="shipingView">播放视频</div>
          <!-- 视频信息区域 -->
          <el-container>
            <el-header class="mvInfoHeader">
              <img :src="mvXQdata.cover" alt="" class="mvXQimg" />
              <span class="artistsName"
                >{{ mvXQdataArtistsName1 }}/{{ mvXQdataArtistsName2 }}</span
              >
            </el-header>
            <el-main class="hmain">
              <!--标题信息  -->

              <el-collapse accordion>
                <el-collapse-item>
                  <template #title class="hInfo">
                    <span>{{ mvXQdata.name }}</span>
                    <i class="iconfont iconxiajiantou"></i>
                  </template>
                  <div>
                   {{ mvXQdata.data.desc }}
                  </div>
                  <div>
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  </div>
                </el-collapse-item>
              </el-collapse>
              111111111
            </el-main>
          </el-container>
        </el-aside>
        <el-main>相关推荐</el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // mv详情数据
      mvXQdata: {},
      mvXQdataArtistsName1: "",
      mvXQdataArtistsName2: "",
    };
  },
  created() {
    console.log(this.$route.query.id);
    this.getVideoXQ();
  },
  methods: {
    //获取mv详情
    async getVideoXQ() {
      console.log(this.$route.query.id);
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/mv/detail?mvid=" + this.$route.query.id
      );
      console.log(res);
      this.mvXQdata = res.data;
      this.mvXQdataArtistsName1 = this.mvXQdata.artists[0].name;
      this.mvXQdataArtistsName2 = this.mvXQdata.artists[1].name;
    },
  },
};
</script>

<style lang="less" scoped>
.dujiaSendParent {
  width: 900px;
  margin: 0 auto;
  .mvxq {
    font-size: 20px;
    font-weight: 700;
  }
  .shipingView {
    background-color: rgb(22, 236, 219);
    width: 600px;
    height: 350px;
  }
  .mvInfoHeader {
    margin-top: 20px;
    position: relative;
    .mvXQimg {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .artistsName {
      margin-left: 20px;
      position: absolute;
      top: 14px;
      left: 70px;
      font-size: 12px;
    }
  }
 
}
</style>
