<template>
  <div>
    <div class="gedanParent">
      <div>
        <!-- 热门歌单分类 -->
        <div id="remenMusicListGategory">
          <div>
            <!-- Tabs标签切换 -->
            <!-- 网友精选碟展示 -->
             <div class="tjmusic"> 
              <div
                class="musicList"
                v-for="(item, index) in spanData.datas"
                :key="index"
              >
                <img :src="item.data.coverUrl" alt="" />
                <span>{{ item.data.title }}</span>
              </div>
            </div> 
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

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    spanData: {
      type: Object,
      default: () => {},
    },
  },
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
      //获取视频标签/分类下的视频
    };
  },
  created() {
    this.getHotMusicListGategroy();
    this.getNetFriengdsSpecilMusic();
    console.log(this.spanData)
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
  },
};
</script>

<style lang="less" scoped>
.gedanParent {
  margin: 0 auto 50px auto;
  width: 1100px;
  #remenMusicListGategory {
    .tjmusic {
      display: flex;
      flex-wrap: wrap;
      // 音乐推荐
      .musicList {
        width: 247px;
        height: 200px;
        margin-top: 10px;
        margin-right: 20px;
        margin-bottom: 60px;
        img {
          width: 240px;
          height: 200px;
          margin-bottom: 5px;
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
