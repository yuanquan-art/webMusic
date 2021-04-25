<template>
  <div>
    <div class="gedanParent">
      <div>
        <a href="#">
          <img src="../../../assets/images/jingpingedan.jpg" alt="" />
        </a>
        <!-- 热门歌单分类 -->
        <div id="remenMusicListGategory">
          <div class="gedanFenleiMing">{{ activeName }} &gt;</div>
          <div>
            <!-- Tabs标签切换 -->
            <el-tabs
              v-model="activeName"
              @tab-click="getNetFriengdsSpecilMusic"
            >
              <el-tab-pane
                :label="item.name"
                :name="item.name"
                v-for="item in hotMusicListGategroy"
                :key="item.id"
              >
                <!-- 网友精选碟展示 -->
                <div class="tjmusic">
                  <div
                    class="musicList"
                    v-for="item in netFriengdsSpecilMusic"
                    :key="item.id"
                    @click="toMusicXQ(item.id)"
                  >
                    <i class="iconfont iconbofang3"></i>
                    <img :src="item.coverImgUrl" alt="" />
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
            <span></span>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="fenye">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="netFriengdsSpecilMusicPages.total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Tabs激活默认
      activeName: "华语",
      // 热门歌单分类列表
      hotMusicListGategroy: [],
      // 获取网友精选碟
      netFriengdsSpecilMusic: [],
      // 网友精选碟分页对象
      netFriengdsSpecilMusicPages: {
        page: 10,
        pageSize: 100,
        total: 1000,
        offset: 1,
      },
    };
  },
  created() {
    this.getHotMusicListGategroy();
    this.getNetFriengdsSpecilMusic();
  },
  methods: {
    // 获取热门歌单分类
    async getHotMusicListGategroy() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/playlist/hot"
      );
      this.hotMusicListGategroy = res.tags;
    },
    // 获取网友精选碟
    async getNetFriengdsSpecilMusic() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/top/playlist?cat=" +
          this.activeName +
          "&limit=1000&offset=" +
          this.netFriengdsSpecilMusicPages.offset
      );
      this.netFriengdsSpecilMusic = res.playlists;
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.netFriengdsSpecilMusicPages.offset = `${val}`;
      this.getNetFriengdsSpecilMusic();
    },
    // 点击去歌单详情页
    toMusicXQ(id) {
      this.$router.push({ path: "/musicListXQ", query: { id: id } });
    },
  },
};
</script>

<style lang="less" scoped>
.gedanParent {
  margin: 0 auto 50px auto;
  width: 1100px;
  #remenMusicListGategory {
    .gedanFenleiMing {
      border: #ccc solid 1px;
      width: 79px;
      height: 27px;
      text-align: center;
      line-height: 27px;
      border-radius: 5px;
      color: rgb(26, 226, 233);
      margin-top: 10px;
    }
    .el-tab-pane {
      .tjmusic {
        display: flex;
        flex-wrap: wrap;
        // 音乐推荐
        .musicList {
          width: 200px;
          height: 200px;
          margin-top: 10px;
          margin-right: 20px;
          margin-bottom: 60px;
          position: relative;
          i {
            display: none;
            position: absolute;
            top: 78px;
            left: 74px;
            color: rgb(23, 230, 212);
            font-size: 50px;
          }
          img {
            width: 200px;
            height: 200px;
            margin-bottom: 5px;
            border-radius: 5px;
          }
        }
      }
    }
  }
  .fenye {
    margin-top: 100px;
    .el-pagination {
      margin-left: 175px;
    }
  }
}
</style>
