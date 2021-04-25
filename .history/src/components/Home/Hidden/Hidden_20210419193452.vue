<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="专辑" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="歌手" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="视频" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="专栏" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { createApp } from 'vue';
export default {
  data() {
    return {
      // 默认激活按钮
      activeName: "first",
    }
  },
  created(){
      this.getHiddenInfo();
  },
  methods: {
      // 获取用户的收藏信息
      async getHiddenInfo(){
          const {data:res} = await this.$axios.get('/user/subcount');
          console.log(res)
      }
  }
};
</script>

<style lang="less" scoped></style>
