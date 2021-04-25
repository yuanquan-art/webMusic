<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-container>
          <el-aside width="200px">
            <img
              :src="mvXQ.picUrl"
              alt=""
              width="200"
              height="200"
              class="musicImg"
            />
          </el-aside>
          <!-- 标题部分 -->
          <el-main class="biaotiMessage">
            <p>
              <span class="gedanspan">歌单</span>
              <span class="musicname">{{ mvXQ.name }}</span>
            </p>
            <p>
              <img
                :src="XQCreatorAvatar"
                alt=""
                width="25"
                height="25"
                class="avatarUrl"
              />
              <span class="nickname">{{ XQCreatorNickName }}</span>
            </p>
            <p>
              <span class="quanbubofang">全部播放</span>
              <span class="quanbubofang"
                >订阅({{
                  parseInt(mvXQ.subCount/10000)
                }})万</span
              >
            </p>
           <p class="chuanzuofanchang">
               <span class="gedanspan">{{ mvXQCreatorCategory }}</span>
               <span class="desc">
                   {{mvXQCreatorDesc }}
               </span>
           </p>
           
          </el-main>
        </el-container>
      </el-header>
      <!-- 主体 -->
      <el-main>
           <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="节目" name="first">
        <!-- 节目列表 -->
       <div v-for="(item,index) in programs" :key="index" class="programItem"> 
          <img :src="item.blurCoverUrl">
          <span class="itemName">{{ item.mainSong.name}}</span>
          <span class="liserntCount">
              <i></i>
              <span>{{ parseInt(item.listenerCount/10000) }}万</span>
          </span>
          <span class="likedCount">
              <i></i>
              <span>{{ parseInt(item.likedCount) }}</span>
          </span>
          <span class="likedtime">
              <i></i>
              <span>{{ item.scheduledPublishTime}}</span>
          </span>
       </div>

    </el-tab-pane>
    <el-tab-pane label="订阅者" name="third">
        <div>
            <div v-for="(item,index) in subscribers" :key="index" class="subitem">
                <img :src="item.avatarUrl" alt="" width="100" height="100" class="avatar">
                <span class="subsName">{{ item.nickname }}</span>
            </div>
        </div>
    </el-tab-pane>
  </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
export default {
  data() {
    return {
      //tabs默认激活
      activeName: 'first',
      // 歌单详情信息
      mvXQ: {},
      XQCreator: {},
      XQCreatorAvatar: '',
      XQCreatorNickName: '',
      mvXQCreatorCategory:'',
      mvXQCreatorDesc: '',
      //电台节目列表
      programs: [],
      musicListXQTags: {},
      musicTracks: [],
      //传入vuex歌曲对象参数
      musicObjParams: {
        title: '',
        author: '',
        url: '',
        pic: '',
        lrc: ''
      },
      // 收藏者列表
      subscribers:[]
    };
  },
  created() {
    this.getMusicListXQ();
    this.getMusicListHidden();
    this.getProgramList();
  },
  computed: {
    tags: function() {
      return this.musicListXQTags.toString();
    },
    time: function() {
      return new Date(parseInt(this.musicListXQ.createTime))
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    }
  },
  methods: {
    // 获取歌单详情
    async getMusicListXQ() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/dj/detail?rid=" +
          this.$route.query.id
      );
      this.mvXQ = res.data;
      this.mvXQ.picUrl = this.$route.query.picUrl;
      this.mvXQCreator = res.data.dj;
      this.XQCreatorAvatar = this.mvXQCreator.avatarUrl;
      this.XQCreatorNickName = this.mvXQCreator.nickname;
      this.mvXQCreatorCategory = this.mvXQ.category;
      this.mvXQCreatorDesc = this.mvXQ.desc;
    },
    // 获取节目列表
    async getProgramList(){
       const {data:res} = await this.$axios.get('http://localhost:3000/dj/program?rid='+this.$route.query.id+'&limit=40');
       this.programs= res.programs;
       console.log(res)
       this.programs.forEach(element => {
           const time = new Date(element.scheduledPublishTime);
            element.scheduledPublishTime = `${time.getFullYear()}年${time.getMonth()+1}月${time.getDate()}日  ${time.getHours()}:${time.getMinutes()}`;
       });
       
    },

    // 双击播放音乐
    async dbBofang(id){
        const {data:res} = await this.$axios.get('http://localhost:3000/song/url?id='+row.id);
        console.log(res.data[0].url)
        console.log(row)
      this.musicObjParams.title = row.name;
      this.musicObjParams.author = row.ar[0].name;
      this.musicObjParams.pic = row.al.picUrl;
      this.musicObjParams.url = res.data[0].url;
      console.log(this.musicObjParams)
      this.$store.commit('addMusic',this.musicObjParams);
    },
    // 获取电台订阅者列表
    async getMusicListHidden(){
        const {data:res} = await this.$axios.get('http://localhost:3000/playlist/subscribers?id='+this.$route.query.id+'&limit=30');
        this.subscribers = res.subscribers;
    }
  },
};
</script>

<style lang="less" scoped>
.el-header {
  height: 200px !important;
  .musicImg {
    border-radius: 5px;
  }
  .gedanspan {
    border: red solid 1px;
    border-radius: 2px;
    color: red;
  }
  .avatarUrl {
    border-radius: 50%;
  }
  .nickname {
    font-size: 8px;
    margin-left: 5px;
  }
  .time {
    color: #ccc;
    margin-left: 5px;
    font-size: 8px;
  }
  .quanbubofang {
    display: inline-block;
    margin-right: 20px;
    background-color: #41E6EC;
    line-height: 30px;
    font-size: 15px;
    width: 100px;
    height: 30px;
    border-radius: 110px;
    text-align: center;
  }
  .biaotiMessage {
    margin: 0 !important;
    padding: 0 0 0 20px !important;
    p {
      margin: 20px;
      line-height: 16px;
    }
    .musicname {
      font-size: 20px;
      font-weight: 700;
      margin-left: 20px;
    }
    .jianjie {
      font-size: 8px;
      margin-left: 9px;
      display: block;
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.shijian{
        position: absolute;
    top: 20px;
    left: 75px;
    font-size: 10px;
}
.subitem{
    float: left;
    width: 400px;
    height: 100px;
    margin-bottom: 20px;
    position: relative;
    .avatar{
    border-radius: 50%;
    margin-right: 10px;
}
.subsName{
    position: absolute;
    top: 35px;
    left: 120px;
}
}
.chuanzuofanchang{
    .desc{
        margin-left: 20px;
    }
}
.programItem{
    height: 80px;
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    img{
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-left: 50px;
        margin-top: 17px;
    }
    .itemName{
        position: absolute;
        top: 29px;
        left: 113px;
    }
    .liserntCount{
        position: absolute;
        top: 29px;
        left: 500px;
    }
    .likedCount{
        position: absolute;
        top: 29px;
        left: 700px;
    }
    .likedtime{
        position: absolute;
        top: 29px;
        left: 900px;
    }
    
}
</style>
