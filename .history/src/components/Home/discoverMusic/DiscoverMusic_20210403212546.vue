<template>
  <div class="discoverMusic">
    <!-- Tabs标签切换 -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="first">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">
         <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="主播电台" name="third">主播电台</el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth">排行榜</el-tab-pane>
      <el-tab-pane label="歌手" name="five">歌手</el-tab-pane>
      <el-tab-pane label="最新音乐" name="six">最新音乐</el-tab-pane>
    </el-tabs>
 
    <!-- 空白div  底部占位 -->
    <div class="buttom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Tabs激活默认
      activeName: "first"
    };
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>

</style>
