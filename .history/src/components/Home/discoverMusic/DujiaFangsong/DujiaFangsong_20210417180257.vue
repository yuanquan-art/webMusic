<template>
    <div>
        <div class="dujiaSendParent">
            <el-container>
    <el-aside width="600px">
        <p class="mvxq">
         &lt; MV详情
        </p>
        <!-- 视频 -->
          <div class="video-player">
    <!-- 播放器界面; 兼容ios  controls-->
    <video
      ref="video"
      v-if="showVideo"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
      style="object-fit:fill"
      preload="auto"
      muted="true"
      poster="https://photo.mac69.com/180205/18020526/a9yPQozt0g.jpg"
      :src="src"
      @waiting="handleWaiting"
      @canplaythrough="state.isLoading = false"
      @playing="state.isLoading = false, state.controlBtnShow = false, state.playing=true"
      @stalled="state.isLoading = true"
      @error="handleError"
    >您的浏览器不支持HTML5</video>
    <!-- 兼容Android端层级问题, 弹出层被覆盖 -->
    <img
      v-show="!showVideo || state.isEnd"
      class="poster"
      src="https://photo.mac69.com/180205/18020526/a9yPQozt0g.jpg"
      alt
    >
    <!-- 控制窗口 -->
    <div
      class="control"
      v-show="!state.isError"
      ref="control"
      @touchstart="touchEnterVideo"
      @touchend="touchLeaveVideo"
    >
      <!-- 播放 || 暂停 || 加载中-->
      <div class="play" @touchstart.stop="clickPlayBtn" v-show="state.controlBtnShow">
        <img
          v-show="!state.playing && !state.isLoading"
          src="../../assets/video/content_btn_play.svg"
        >
        <img
          v-show="state.playing  && !state.isLoading"
          src="../../assets/video/content_btn_pause.svg"
        >
        <div class="loader" v-show="state.isLoading">
          <div class="loader-inner ball-clip-rotate">
            <div></div>
          </div>
        </div>
      </div>
      <!-- 控制条 -->
      <div class="control-bar" :style="{ visibility: state.controlBarShow ? 'visible' : 'hidden'}">
        <span class="time">{{video.displayTime}}</span>
        <span class="progress" ref="progress">
          <img
            class="progress-btn ignore"
            :style="{transform: `translate3d(${video.progress.current}px, 0, 0)`}"
            src="../../assets/video/content_ic_tutu.svg"
          >
          <span class="progress-loaded" :style="{ width: `${video.loaded}%`}"></span>
          <!-- 设置手动移动的进度条 -->
          <span
            class="progress-move"
            @touchmove.stop.prevent="moveIng($event)"
            @touchstart.stop="moveStart($event)"
            @touchend.stop="moveEnd($event)"
          ></span>
        </span>

        <span class="total-time">{{video.totalTime}}</span>
        <span class="full-screen" @click="fullScreen">
          <img src="../../assets/video/content_ic_increase.svg" alt>
        </span>
      </div>
    </div>
    <!-- 错误弹窗 -->
    <div class="error" v-show="state.isError">
      <p class="lose">视频加载失败</p>
      <p class="retry" @click="retry">点击重试</p>
    </div>
  </div>
    </el-aside>
    <el-main>相关推荐</el-main>
  </el-container>
        </div>
    </div>
</template>

<script>
import Video from '../../Videozujian/Video.vue'
export default {
     data() {
        return {
        
        }
      },
    created(){
        console.log(this.$route.query.id)
     this.getVideoXQ();
    },
    methods: {
      //获取相关视频
    async getVideoXQ(){
        console.log(this.$route.query.id)
          const {data:res} = await this.$axios.get('http://localhost:3000/mv/detail?mvid=5436712'+this.$route.query.id);
          console.log(res)
       }
    }
}
</script>

<style lang="less" scoped>
.dujiaSendParent{
    width: 900px;
    margin: 0 auto;
    .mvxq{
        font-size: 20px;
        font-weight: 700;
    }
    .video-js .vjs-big-play-button{}
}
</style>