<template>
  <div>
       <el-tabs v-model="activeVideoName" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item, index) in videoGategroyList"
            :label="item.name"
            :name="item.id"
            :key="index"
          >
            <!-- VideoList组件 -->
            <MVlist :spanData="spanData" @getPage="getPage"></MVlist>
          </el-tab-pane>
        </el-tabs>
  </div>
</template>

<script>
import MVlist from "./MVlist.vue";
export default {
  data() {
    return {
      // 视频分类列表id
      activeVideoName: 58100,
      // 视频分类列表
      videoGategroyList: [],
     //获取视频标签/分类下的视频
      spanData: {},
      page: 0
    };
  },
  components: {
    MVlist,
  },
  watch: {
    page: function(val){
     this.handleClick();
    }
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
        "http://localhost:3000/video/group?id=" + this.activeVideoName+'&offset='+this.page
      );
      this.spanData = res;
    },
    getPage(val){
      this.page = val-1;
    }
  },
};
</script>

<style lang="less" scoped></style>
