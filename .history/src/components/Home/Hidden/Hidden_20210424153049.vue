<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="专辑" name="first">
         <div>
           <p class="zhuanjiName">收藏的专辑({{ hiddenedInfo.count }})</p>
           <div v-for="(item,index) in hiddenedInfo.data" :key="index" class="hiddened">
              <img :src="item.picUrl" alt="">
              <span class="hiddenName">{{ item.name }}</span>
              <span class="artistsName">{{item.artists[0].name }}</span>
              <span class="size">
                {{item.size}}首
              </span>
           </div>
         </div>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="second">
         <div>
           <p class="zhuanjiName">收藏的歌手({{ hiddenSingerInfo.count }})</p>
           <div v-for="(item,index) in hiddenSingerInfo.data" :key="index" class="hiddened">
              <img :src="item.picUrl" alt="">
              <span class="hiddenName">{{ item.name }}</span>
              <span class="artistsName">专辑：{{item.albumSize }}</span>
              <span class="size">
               mv： {{item.mvSize}}首
              </span>
           </div>
         </div>
      </el-tab-pane>
      <el-tab-pane label="视频" name="third">
          <div>
           <p class="zhuanjiName">收藏的视频({{ hiddenVideoInfo.count }})</p>
         <div class="video">
             <div v-for="(item,index) in hiddenVideoInfo.data" :key="index" class="hiddenedVideo">
              <img :src="item.coverUrl" alt="">
              <span class="mvIcon">MV</span>
              <span class="hiddenName">{{ item.title }}</span>
              <p class="videoUserName">{{ item.creator[0].userName }}</p>
           </div>
         </div>
         </div>
      </el-tab-pane>
      <el-tab-pane label="专栏" name="fourth">
        <div class="zhunlan">暂无收藏专栏</div>
      </el-tab-pane>
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
      // 已收藏专辑信息
      hiddenedInfo: {},
      // 已收藏歌手信息
      hiddenSingerInfo: {},
      // 已收藏的视频信息
      hiddenVideoInfo: {}
    }
  },
  created(){
      this.getHiddenInfo();
      this.getHiddenSingerInfo();
      this.getHiddenVideoInfo();
  },
  methods: {
      // 获取收藏专辑
      async getHiddenInfo(){
          const {data:res} = await this.$axios.get('http://localhost:3000/album/sublist');
          this.hiddenedInfo = res;
      },
      //获取收藏的歌手
      async getHiddenSingerInfo(){
          const {data:res} = await this.$axios.get('http://localhost:3000/artist/sublist');
          this.hiddenSingerInfo = res;
      },
      //获取收藏的视频
      async getHiddenVideoInfo(){
          const {data:res} = await this.$axios.get('http://localhost:3000/mv/sublist');
          console.log(res)
          this.hiddenVideoInfo = res;
      }
  }
};
</script>

<style lang="less" scoped>
.zhuanjiName{
  font-weight: 700;
}
.hiddened{
  height: 80px;
  margin: 20px 0 20px 0;
  border-radius: 5px;
  position: relative;
  img{
    height: 60px;
    width: 60px;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 50px;
  }
  .hiddenName{
    position: absolute;
    top: 32px;
    left: 130px;
  }
  .artistsName{
    position: absolute;
    top: 32px;
    left: 800px;
  }
  .size{
    position: absolute;
    top: 32px;
    left: 1000px;
  }
}
.hiddened:hover{
 background-color: rgb(214, 209, 209);
}
.video{
  display: flex;
  flex-wrap: wrap;
}
.hiddenedVideo{
  width: 319px;
  height: 215px;
  margin: 10px;
  img{
    width: 319px;
    height: 158px;
    border-radius: 5px;
  }
  .mvIcon{
    margin: 10px 10px 0 10px;
    border-radius: 5px;
    border: red solid 1px;
    color: red;
  }
  .hiddenVideoName{
    position: absolute;
    top: 32px;
    left: 130px;
  }
  .videoUserName{
   margin-left: 10px;
   margin-top: 2px;
   color: #ccc;
  }
}
.zhunlan{
  margin: 300px 300px 0 600px;
  font-size: 30px;
}
</style>
