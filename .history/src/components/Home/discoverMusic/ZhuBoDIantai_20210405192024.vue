<template>
  <div>
    <div class="diantaiParent">
       <!-- 轮播图 -->
        <!-- <el-carousel :interval="4000" type="card" height="220px">
          <el-carousel-item v-for="item in diantaBannerList" :key="item.encodeId">
            <img :src="item.pic + '?param=540y190'" />
          </el-carousel-item>
        </el-carousel> -->
        <div class="back_add">
            <div class="threeImg">
                <div class="Containt">
                    <div class="iconleft"  @click="zuohua">
                        <i class="el-icon-arrow-left"></i>
                    </div>
                    <ul :style="{'left':calleft + 'px'}"  v-on:mouseover="stopmove()" v-on:mouseout="move()">
                        <li v-for="(item,index) in superurl" :key="index">
                            <img :src="item.img"/>
                        </li>
                    </ul>
                    <div class="iconright" @click="youhua">
                        <i class="el-icon-arrow-right" ></i>
                    </div>
                    
                </div>
            </div>
           
        </div>


    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 电台轮播图列表
      diantaBannerList: []
    }
  },
  created(){
    this.getDiantaiLunbotuList();
  },
  methods: {
    // 获取电台轮播图列表
    async getDiantaiLunbotuList(){
        const {data:res} = await this.$axios.get('/dj/banner');
        this.diantaBannerList = res.data;
        console.log(this.diantaBannerList[0])
    },
     //移动
        move() {
            this.timer = setInterval(this.starmove, 2500)
        },
        //开始移动
        starmove() {
            this.calleft -= 340;
            if (this.calleft < -1200) {
                this.calleft = 0
            }
        },
        //鼠标悬停时停止移动
        stopmove() {
            clearInterval(this.timer)
        },
        //点击按钮左移
        zuohua() {
            this.calleft -= 340;
            if (this.calleft < -1200) {
                this.calleft = 0
            }
        },
        //点击按钮右移
        youhua() {
            this.calleft += 340;
            if (this.calleft > 0) {
                this.calleft = -1020
            }
        }

  }
}
</script>

<style lang="less" scoped>
.diantaiParent {

}
</style>
