<template>
  <div class="home">
  <el-container>
    <!-- 顶部栏 -->
    <el-header>
        <el-row>
          <el-col :span="4">
            <img src="../assets/images/Music-logo.png" alt="" width="100" height="60" />
          </el-col>
          <el-col :span="8">
            <span class="el-icon-arrow-left zuojiantou"></span>
            <span class="el-icon-arrow-right youjiantou"></span>
            <!-- 搜索框 -->
            <el-input placeholder="搜索" prefix-icon="el-icon-search">
            </el-input>
            <span class="maike">
              <span class="iconfont iconziyuan"></span>
            </span>
          </el-col>
          <!-- 顶栏右部 -->
          <el-col :span="9" class="top-right">
            <el-row class="top-zujian">
              <el-col :span="1">
                <i class="iconfont iconiconset01100"></i>
              </el-col>
              <el-col class="user-unlogin" :span="2">
                <span class="unlogin">
                  <i>未登录</i>
                  <i class="iconfont iconxiajiantou"></i>
                </span>
              </el-col>
              <i class="kaivip">开通VIP</i>
              <el-col :span="5" class="tubiao">
                <i class="iconfont iconicon-"></i>
                <i class="iconfont iconzhuti"></i>
                <i class="iconfont iconyouxiang"></i>
                <i class="iconfont iconzuixiaohua"></i>
                <i class="iconfont iconjianhao"></i>
                <i class="iconfont iconfangkuang"></i>
                <i class="iconfont iconcancel-1-copy"></i>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
    </el-header>
    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside width="200px">
         <!-- 侧边栏 -->
          <div class="navMenu">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              active-text-color="#000"
              router
            >
              <el-menu-item index="/discoverMusic" class="active">
                <span slot="title">发现音乐</span>
              </el-menu-item>
              <el-menu-item index="/video">
                <span slot="title">视频</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">朋友</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">直播</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">私人FM</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">我的音乐</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconyinyue"></i>
                <span slot="title">本地音乐</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconxiazai"></i>
                <span slot="title">下载管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconB"></i>
                <span slot="title">我的音乐云盘</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconshoucang1"></i>
                <span slot="title">我的收藏</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">创建的歌单</span>
                <span>+</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconwodeshoucang"></i>
                <span slot="title">我喜欢的音乐</span>
                <i class="iconfont iconhuaban"></i>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont iconyinleliebiao-"></i>
                <span slot="title">袁君</span>
              </el-menu-item>
            </el-menu>
          </div>
      </el-aside>
      <!-- 主体部分 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  </div>  
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   // name: 'Home',
//   // components: {
//   //   HelloWorld
//   // }
// }


</script>

<style lang="less" scoped>
.el-header{
  background-color: #41E6EC;
}
</style>