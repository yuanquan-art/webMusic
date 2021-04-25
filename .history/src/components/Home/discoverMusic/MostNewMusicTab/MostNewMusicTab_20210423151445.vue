<template>
  <div>
    <div id="box">
      <div class="tab">
        <ul>
          <!--
				1、绑定key的作用 提高Vue的性能
				2、 key 需要是唯一的标识 所以需要使用id， 也可以使用index ，
				index 也是唯一的
				3、 item 是 数组中对应的每一项
				4、 index 是 每一项的 索引
			-->
          <!-- v-on:click 缩写为 @click -->
          <button
            :key="item.id"
            v-for="(item, index) in info"
            @click="handle(index)"
            :class="currentIndex == index ? 'currentli' : ''"
          >
            {{ item.name }}
          </button>
        </ul>

        <!-- 绑定属性时，前面一定要加: -->
        <div class="xinMusic" :class="currentIndex == 0 ? 'currentdiv' : ''">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
              :label="item.label"
              :name="item.name"
              v-for="(item, index) in areaList"
              :key="index"
            >
              <ul>
                <li
                  class="areaLiNSD"
                  v-for="(item, index) in newMusicFast"
                  :key="index"
                >
                 <i class="iconfont iconbofang3"></i>
                  <img
                    :src="item.album.picUrl"
                    alt=""
                    class="xingesudi"
                  />
                  <span class="Iname">{{ item.name }}</span>
                  <span class="singerN">{{ item.artists[0].name }}</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="xinMusic" :class="currentIndex == 1 ? 'currentdiv' : ''">
          <el-tabs v-model="activeName" @tab-click="handleClick1">
            <el-tab-pane
              :label="item.label"
              :name="item.name"
              v-for="(item, index) in areaDieUp"
              :key="index"
            >
              <div class="xinDieUp">
                <div
                  class="areaLi"
                  v-for="(item, index) in newMusicDieupList"
                  :key="index"
                  @click="toZhuanjiPage(item.id)"
                >
                 <i class="iconfont iconbofang3"></i>
                  <img :src="item.picUrl" alt="" width="200" height="200" />
                  <span>{{ item.name }}</span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, //当前的索引
      info: [
        {
          id: 1,
          name: "新歌速递",
        },
        {
          id: 2,
          name: "新碟上架",
        },
      ],
      activeName: "0",
      activeName1: "0",
      // 新歌速递地区分类
      areaList: [
        { label: "全部", name: "0" },
        { label: "华语", name: "7" },
        { label: "欧美", name: "96" },
        { label: "韩国", name: "16" },
        { label: "日本", name: "8" },
      ],
      // 新碟上架地区分类
      areaDieUp: [
        { label: "全部", name: "0" },
        { label: "华语", name: "7" },
        { label: "欧美", name: "96" },
        { label: "韩国", name: "16" },
        { label: "日本", name: "8" },
      ],
      // 新歌速递列表
      newMusicFast: [],
      // 新碟上架列表
      newMusicDieupList: [],
    };
  },
  created() {
    this.getNewMusicFast();
    this.getNewDieUp();
  },
  methods: {
    //点击li时将li的index传递过来
    handle: function(index) {
      console.log(index);
      this.currentIndex = index;
    },
    // 获取新歌速递tab地区切换
    handleClick(tab, event) {
      console.log(this.activeName);
      this.getNewMusicFast();
    },
    // 获取新歌速递列表
    async getNewMusicFast() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/top/song?type=" + this.activeName
      );
      this.newMusicFast = res.data;
      console.log(res)
    },
    // 获取新碟上架列表
    async getNewDieUp() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/album/new?&limit=10"
      );
      this.newMusicDieupList = res.albums;
    },
    // 去专辑页
    toZhuanjiPage(id){
      console.log(id)
      this.$router.push({
        path: '/zhuanji',
        query: {
          id: id
        }
      });
    }
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

#box {
  width: 500px;
  /* 使box在页面上水平居中 */
  margin: 100px auto;
  box-sizing: border-box;
}

// .tab ul {
//   display: flex;
//   flex-wrap: wrap;
// }

.tab ul button {
  list-style: none;
  text-align: center;
  border: 1px solid #ccc;
  width: 150px;
  height: 30px;
  border-radius: 22px;
  overflow: hidden;
  border: none;
  outline: none;
}

.tab .xinMusic {
  display: none;
}

.currentli {
  cursor: pointer;
  background-color: rgb(47, 232, 245);
  border: none;
}

.tab div.currentdiv {
  display: block;
}
.xinMusic {
  width: 1000px;
  transform: translateX(-400px);
}

// 新歌速递
.areaLiNSD{
  margin: 20px;
  list-style: none;
  position: relative;
  border-radius: 5px;
         i {
            // display: none;
            position: absolute;
            top: 27px;
            left: 26px;
            color: rgb(23, 230, 212);
            font-size: 30px;
          } 
  .xingesudi{
   border-radius: 5px;
   width: 80px;
   height: 80px;
  }
  .Iname{
    position: absolute;
    top: 32px;
    left: 200px;
  }
  .singerN{
    position: absolute;
    top: 32px;
    left: 600px;
  }
}
.areaLiNSD:hover{
  background-color: rgb(230, 222, 222);
  
}
// 新碟上架
.xinDieUp{

  display: flex;
  flex-wrap: wrap;
   .areaLi {
    margin: 28px;
    width: 200px;
    position: relative;
         i {
            display: none;
            position: absolute;
            top: 78px;
            left: 74px;
            color: rgb(23, 230, 212);
            font-size: 50px;
          } 
  }
  .areaLi{
    i{
      display: block;
    }
  }
  img{
    border-radius: 5px;
  }
}
/deep/ .el-tabs--top{
    width: 1300px;
}
/deep/ .el-tabs__nav-wrap::after{
  background-color: #fff;
}
</style>
