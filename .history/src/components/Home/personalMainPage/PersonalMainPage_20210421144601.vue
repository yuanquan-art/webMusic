<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-container>
          <el-aside width="200px">
            <img
              :src="picUrl"
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
              <span class="musicname">{{ singerName }}</span>
            </p>
            <p class="nickname">
              <span >{{ alias }}</span>
            </p>
            <p>
              <span class="quanbubofang">收藏</span>
              <span class="quanbubofang"
                >个人主页</span
              >
            </p>
            <p class="nickname">
                单曲数： {{singerGloabalInfo.total }}
            </p>
          </el-main>
        </el-container>
      </el-header>
      <!-- 主体 -->
      <el-main>
          <!-- 音乐列表 -->
    <el-table
    :data="singerGloabalInfo.songs"
    @cell-click="love"
    @row-dblclick="dbBofang"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="like"
      width="80">
       <i class="iconfont iconwodeshoucang"></i>
    </el-table-column>
    <el-table-column
      prop="name"
      label="音乐标题"
      sortable
      width="500"
      >
    </el-table-column>
    <el-table-column
      prop="ar[0].name"
      label="歌手"
      sortable
      width="500"
>
    </el-table-column>
     
  </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
export default {
  data() {
    return {
        picUrl: '',
        singerName: '',
        alias: '',
        singerGloabalInfo: '',
      //tabs默认激活
      activeName: 'first',
      // 歌单详情信息
      musicListXQ: {},
      musicListXQCreator: {},
      musicListXQTags: {},
      musicTracks: [],
      // 评论内容
      content: '',
      // 热评
      hotComments: [],
      //传入vuex歌曲对象参数
      musicObjParams: {
        title: '',
        author: '',
        url: '',
        pic: '',
        lrc: ''
      },
    };
  },
  created() {
    this.getSingerGlobalMusic();
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
      // 获取歌手全部歌曲
      async getSingerGlobalMusic(){
         const {data:res} = await this.$axios.get('http://localhost:3000/artist/songs?id='+this.$route.query.id);
         console.log(res)
       this.picUrl = this.$route.query.picUrl;
       this.singerName = this.$route.query.name;
       this.alias = this.$route.query.alias;
       this.singerGloabalInfo = res;
      },
    // 是否喜欢
    async love(row, column, cell, event){
        if(row.like==false){
            row.like = true;
             cell.childNodes[0].childNodes[2].style.color = '#41E6EC';
            //  const {data:res} = await this.$axios.get('http://localhost:3000/like?id='+row.id+'&like'+row.like+'&timestamp='+new Date());
            //  console.log(res)
        }else{
            row.like = false;
             cell.childNodes[0].childNodes[2].style.color = '';
            //   const {data:res} = await this.$axios.get('http://localhost:3000/like?id='+row.id+'&like'+row.like+'&timestamp='+new Date());
            //  console.log(res)
        }
       
        //console.log(cell.childNodes[0].childNodes[2])
    },
    // 双击播放音乐
    async dbBofang(row){
        console.log(row)
        const {data:res} = await this.$axios.get('http://localhost:3000/song/url?id='+row.id);
         const {data:lrc} = await this.$axios.get('http://localhost:3000/lyric?id='+row.id);
      this.musicObjParams.lrc = lrc.lrc.lyric;
      this.musicObjParams.title = row.name;
      this.musicObjParams.author = row.ar[0].name;
      this.musicObjParams.pic = row.al.picUrl;
      this.musicObjParams.url = res.data[0].url;
      console.log(this.musicObjParams)
      this.$store.commit('addMusic',this.musicObjParams);
    },    
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
//   .nickname {
//     font-size: 8px;
//     margin: 20px 0;
//   }
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
.pinlunbtn{
    display: inline-block;
    border: #ccc solid 1px;
    height: 20px;
    width: 40px;
    border-radius: 10px;
    line-height: 20px;
    text-align: center;
    margin-top: 20px;
    margin-left: 1300px;
    cursor: pointer;
}
.pinlunbtn:hover{
    background-color: #ccc;
}
.hotcomment{
    font-weight: 600;
    font-size: 14px;
}
.punlunLi{
    height: 80px;
    list-style: none;
    margin-bottom: 5px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    position: relative;
    border-radius: 5px;
    img{
        border-radius: 50%;
        position: absolute;
        left: 28px;
        top: 21px;
    }
}
.punlunLi:hover{
  background-color: rgb(189, 185, 185);
}
.toJingchai{
    text-align: center;
    height: 30px;
    line-height: 30px;
    .toJingchaiPinglun{
     border:#ccc solid 1px;
         display: inline-block;
    border-radius: 10px;
    width: 140px;
    height: 30px;
    margin-top: 16px;
  }
}
.zan{
    padding-right: 50px;
   #huifu{
     margin-left: 10px;
   }
}
 .biaoti{
     color: rgb(40, 236, 243) !important;
   }
.userNickname{
    color: #50A5D9;
    margin: 78px;
}
.content{
    margin-left: -61px;
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

</style>
