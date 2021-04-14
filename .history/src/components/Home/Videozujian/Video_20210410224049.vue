<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="视频" name="first">视频</el-tab-pane>
      <el-tab-pane label="MV" name="second">MV</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 视频 MV tab 默认激活
      activeName: "first",
      // 视频分类列表
      videoGategroyList: [],
    };
  },
  created() {},
  methods: {
      // 获取视频分类列表
      async getVideoGategroyList() {
          const {data: res} = await this.$axios.get('/video/category/list');
          console.log(res)
      }
  },
};
</script>

<style lang="less" scoped></style>
