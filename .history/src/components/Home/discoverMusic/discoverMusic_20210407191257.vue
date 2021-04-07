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
      <el-tab-pane label="歌手" name="five">歌手</el-tab-pane>
      <el-tab-pane label="最新音乐" name="six">最新音乐</el-tab-pane>
    </el-tabs>
 
    <!-- 空白div  底部占位 -->
    <div class="buttom"></div>
  </div>
</template>

<script>
import PersonalRecommand from './PersonalRecommand.vue'
import MusicList from './MusicList.vue'
import ZhuBoDIantai from './ZhuBoDIantai.vue'
import MusicLevelList from './MusicLevelList.vue'
export default {
  data() {
    return {
      // Tabs激活默认
      activeName: "first"
    };
  },
  components:{
    PersonalRecommand,
    MusicList,
    ZhuBoDIantai,
    MusicLevelList
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>

</style>
