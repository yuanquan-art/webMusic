<template>
  <div class="discoverMusic">
    <!-- Tabs标签切换 -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="first">
        <PersonalRecommand></PersonalRecommand>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">
        <MusicList></MusicList>
      </el-tab-pane>
      <el-tab-pane label="主播电台" name="third">
        <ZhuBoDIantai></ZhuBoDIantai>
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth">
        <MusicLevelList></MusicLevelList>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="five">
        <Singer></Singer>
      </el-tab-pane>
      <el-tab-pane label="最新音乐" name="six">
        <el-tabs v-model="activeNewMusic" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>

    <!-- 空白div  底部占位 -->
    <div class="buttom"></div>
  </div>
</template>

<script>
import PersonalRecommand from "./PersonalRecommand.vue";
import MusicList from "./MusicList.vue";
import ZhuBoDIantai from "./ZhuBoDIantai.vue";
import MusicLevelList from "./MusicLevelList.vue";
import Singer from "./Singer.vue";
export default {
  data() {
    return {
      // Tabs激活默认
      activeName: "first",
      // 新歌速递和新碟上架激活
      activeNewMusic: 'one'
    };
  },
  components: {
    PersonalRecommand,
    MusicList,
    ZhuBoDIantai,
    MusicLevelList,
    Singer,
  },
  methods: {},
};
</script>

<style lang="less">
.discoverMusic{
  .el-tabs__nav{
    transform: translateX(550px) !important;
  }
}
</style>
