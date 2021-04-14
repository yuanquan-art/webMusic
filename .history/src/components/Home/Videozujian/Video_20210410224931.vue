<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="视频" name="first">
         <span>{{activeName}}</span>
               <el-tabs v-model="activeVideoName">
    <el-tab-pane label="item.name" name="first" v-for="(item,index) in videoGategroyList" :key="index">{{ item.name }}</el-tab-pane>
    
  </el-tabs>
          </el-tab-pane>
      <el-tab-pane label="MV" name="second">MV</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 视频 MV tabs 默认激活
      activeName: "first",
      // 视频分类tabs激活
      activeVideoName: 'first',
      // 视频分类列表
      videoGategroyList: [],
    };
  },
  created() {
      this.getVideoGategroyList();
  },
  methods: {
      // 获取视频分类列表
      async getVideoGategroyList() {
          const {data: res} = await this.$axios.get('/video/category/list'+ new Date());
          console.log(res)
      }
  },
};
</script>

<style lang="less" scoped></style>
