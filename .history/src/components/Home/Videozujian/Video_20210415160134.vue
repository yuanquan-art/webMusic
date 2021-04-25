<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="视频" name="first">
        <el-tabs v-model="activeVideoName" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item, index) in videoGategroyList"
            :label="item.name"
            :name="item.id"
            :key="index"
          >
            <!-- VideoList组件 -->
            <VideoList></VideoList>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="MV" name="second">MV</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VideoList from "./VideoList.vue";
export default {
  data() {
    return {
      // 视频 MV tabs 默认激活
      activeName: "first",
      // 视频分类列表id
      activeVideoName: 58100,
      // 视频分类列表
      videoGategroyList: [],
     
    };
  },
  components: {
    VideoList,
  },
  created() {
    this.getVideoGategroyList();
  },
  methods: {
    // 获取视频分类列表
    async getVideoGategroyList() {
      const { data: res } = await this.$axios.get("/api/video/category/list");
      this.videoGategroyList = res;
      console.log(res);
    },

    async handleClick() {
      //获取视频标签/分类下的视频
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/video/group?id=" + this.activeVideoName
      );
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped></style>
