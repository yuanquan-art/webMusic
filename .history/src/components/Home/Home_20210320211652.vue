<template>
  <div class="home">
  <el-container>
    <!-- 顶部栏 -->
    <el-header>
        <el-row>
          <el-col :span="4">
            <img class="logo" src="../../assets/images/Music-logo.png" alt="" width="100" height="75" />
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
                <span class="unlogin" @click="showLoginDialogVisible">
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
      <el-aside width="245px">
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
      <el-main>
        <!-- 路由占位 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>




  <!-- 点击未登录弹出登录对话框 -->
  <el-dialog
  title="提示"
  v-model="loginDialogVisible"
  width="30%"
  :before-close="loginDialogClosed">
  <span>这是一段信息</span>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="loginDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="loginDialogVisible = false">确 定</el-button>
    </span>
  </template>
</el-dialog>

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
import {  ref } from 'vue';
export default {
  setup(props,context){
     const loginDialogVisible = ref(false);
     const showLoginDialogVisible = () => {
       console.log(loginDialogVisible)
     }
     return {
       loginDialogVisible,
       showLoginDialogVisible
     }
  }
}


</script>

<style lang="less" scoped>
.el-header {
  width: 100%;
  height: 75px !important;
   background-color: #41E6EC;
  position: relative;
  .logo{
    padding-left: 100px;
  }
}
.zuojiantou {
  margin-top: 25px;
  margin-left: 35px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #84acf5;
  color: #ed6565;
  line-height: 30px;
  text-align: center;
}
.youjiantou {
  margin-top: 25px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #84acf5;
  color: #ed6565;
  line-height: 30px;
  text-align: center;
}
.el-input {
  width: 200px;
  height: 40px;
  margin-left: 30px;
  border-radius: 5px;
}
.search {
  width: 17px;
  height: 20px;
  color: #f9d8d8;
  margin-left: 10px;
  line-height: 20px;
}
.iconfont.iconziyuan {
  margin-top: 27px;
  margin-left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #84acf5;
  color: #f2b9b9;
  line-height: 40px;
  text-align: center;
}
.top-right {
  position: absolute;
  top: 0;
  right: 0;
}
.top-zujian {
  line-height: 75px;
}
.iconfont.iconiconset01100 {
  font-size: 35px;
  border-radius: 50%;
  background-color: #e0e0e0;
  color: #f2f1f1;
}
.unlogin {
  display: inline-block;
  font-size: 15px;
  width: 100px;
  height: 35px;
  color: #fbd9d9;
  margin-left: 40px;
}
.iconfont.iconxiajiantou {
  margin-left: 10px;
}
.user-unlogin {
  margin-left: 10px;
}
.tubiao {
  margin-left: 0px;
  i {
  background-color: #41E6EC;
  color: #f7b3b3;
  margin-left: 12px;
  }  
}
.kaivip {
  margin-left: 91px;
  color: #f7b3b3;
}
.navMenu{
    margin: 0;
    padding: 0;
    width: 245px;
    li{
      margin: -10px;
    }
}
.iconfont.iconyinyue
{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconxiazai{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconB{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconshoucang1{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconwodeshoucang{
  font-size: 15px;
  margin-right: 20px;
}
.iconfont.iconyinleliebiao-{
  font-size: 18px;
  margin-right: 20px;
}
.active{
    font-weight: 700;
    background-color: #f6f6f7;
}
// 主体部分
.el-main{
  width: 1270px;
  height: 800px;
  overflow: scroll;
}
</style>