<template>
    <div>
         <!-- 轮播图 -->
        <el-carousel :interval="4000" type="card" height="220px">
          <el-carousel-item v-for="item in bannerlist" :key="item.encodeId">
            <img :src="item.imageUrl + '?param=540y190'" />
          </el-carousel-item>
        </el-carousel>
        <!-- 推荐歌单 -->
         <span class="tuijianMusic">推荐歌单</span>
          <span class="el-icon-arrow-right"></span>
        <div class="tjmusic">
         
          <div
            class="musicList"
            v-for="item in tuijianMusicList"
            :key="item.id"
          >
            <img :src="item.picUrl" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
        <!-- 独家放送 -->
       <div class="dujiaMokuai">
           <span class="dujiaFangsong">独家放送</span>
          <span class="el-icon-arrow-right"></span>
        <div class="tjmusic">
          <div
            class="dujiaRukouList"
            v-for="item in dujiafansongRukouList"
            :key="item.id"
          >
            <img :src="item.picUrl" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
       </div>
       <!-- 最新音乐 -->
        <div class="nearNewMusic">
           <span class="newMusic">最新音乐</span>
          <span class="el-icon-arrow-right"></span>
        <div class="tjmusic">
          <div
            class="nearNewMusicList"
            v-for="item in tuijianNewMusicList"
            :key="item.id"
          >
            <img class="newMusicPic" :src="item.picUrl" alt="" />
            <div class="newMusicShuxing">
            <span>{{ item.name }}</span>
            <span class="artistsName">{{ item.song.album.artists[0].name }}</span>
            </div>
          </div>
        </div>
        </div>
       <!-- 推荐MV -->
       <div class="dujiaMokuai">
           <span class="dujiaFangsong">推荐MV</span>
          <span class="el-icon-arrow-right"></span>
        <div class="tjMV">
          <div
            class="tuijianMVList"
            v-for="item in tuijianMVList"
            :key="item.id"
          >
            <img :src="item.picUrl" alt="" />
           <div class="MVShuxing">
            <span>{{ item.name }}</span>
            <span class="artistsName">{{ item. artistName }}</span>
            </div>
          </div>
        </div>
       </div>
      <!-- 电台个性推荐 -->
        <div class="personDiantaiTi">
           <span class="tuijianMusic">主播电台</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="tjRecommand">
          <div
            class="tjRecommandList"
            v-for="item in persongRecommandList"
            :key="item.id"
          >
            <img :src="item.picUrl" alt="" />
           <div class="tjRecommandShuxing">
            <span>{{ item.name }}</span>
            <span class="artistsName">{{ item. artistName }}</span>
            </div>
          </div>
        </div>
    <!-- 听听 -->
         <span class="tuijianMusic">推荐歌单</span>
          <span class="el-icon-arrow-right"></span>
        <div class="tjmusic">
         
          <div
            class="musicList"
            v-for="item in tuijianMusicList"
            :key="item.id"
          >
            <img :src="item.picUrl" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>

    </div>
</template>


<script>
export default {
    
}
</script>