<template>
    <div>
        <div class="dujiaSendParent">
            <el-container>
    <el-aside width="600px">
        <p class="mvxq">
         &lt; MV详情
        </p>
        <!-- 视频 -->
        <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions"
></video-player>
    </el-aside>
    <el-main>相关推荐</el-main>
  </el-container>
        </div>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
    data(){
        return {}
    },
    components: {
    videoPlayer
    },
    created(){
        console.log(this.$route.query.id)
     this.getVideoXQ();
    },
    methods: {
      //获取相关视频
    async getVideoXQ(){
        console.log(this.$route.query.id)
          const {data:res} = await this.$axios.get('http://localhost:3000/related/allvideo?id='+this.$route.query.id);
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
}
</style>