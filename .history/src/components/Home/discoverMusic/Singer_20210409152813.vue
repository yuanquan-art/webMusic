<template>
    <div>
        <div class="singerParent">
            <p @click="yuzhong($event)"> 
                <span v-for="(item,index) in typeList" :key="index" :data-index='item.text'>{{ item.text }}</span>
            </p>
            <p @click="fenlei($event)">
                <span v-for="(item,index) in areaList" :key="index" :data-index='item.text'>{{ item.text }}</span>
            </p>
            <div>
                <!-- 全球榜 -->
      <div class="global">
        <div class="guangfangBang">全球榜</div>
        <div class="quanqiuBuju">
          <div
            class="quanqiuBujuItem"
            v-for="(item, index) in singeList"
            :key="index"
          >
            <img class="GFbangdanItemPic" :src="item.picUrl" alt="" />
             <div>{{ item.name }}</div>
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
          singeGategoryParams: {
               type: '-1',
               area: '-1',
               initial: 'a'
           },
          typeList: [
              {'id':1,text: '全部'},
              {'id':2,text: '男歌手'},
              {'id':3,text: '女歌手'},
              {'id':4,text: '乐队'}
          ],
          areaList: [
              {'id':1,text: '全部'},
              {'id':2,text: '华语'},
              {'id':3,text: '欧美'},
              {'id':4,text: '日本'},
              {'id':4,text: '韩国'},
              {'id':4,text: '其他'}
          ],
          // 歌手列表
          singeList: []
        //    type:[  
        //            {"全部":'-1'},
        //            {"男歌手":'1'},
        //            {"女歌手":'2'},
        //            {"乐队":'3'}  
        //        ],
        //        area: {
        //            "全部":'-1',
        //            "华语":'7',
        //            "欧美":'96',
        //            "日本":'8',
        //            "韩国":'16',
        //            "其他":'0',
        //        }
        }
    },
    created(){
        this.getSingeList();
    },
    methods: {
        // 获取歌手列表
      async getSingeList(){
         const {data:res} = await this.$axios.get('/artist/list?limit=100');
         this.singeList = res.artists;
      },
      async yuzhong(e){
          const dom = e.target;
          const text = dom.getAttribute('data-index');
          console.log(text)
          if(text == '全部'){
              const {data:res} = await this.$axios.get('/artist/list?limit=100&type='+this.singeGategoryParams.type);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '男歌手'){
              this.singeGategoryParams.type = '1';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&type='+this.singeGategoryParams.type);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '女歌手'){
              this.singeGategoryParams.type = '2';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&type='+this.singeGategoryParams.type);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '乐队'){
              this.singeGategoryParams.type = '3';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&type='+this.singeGategoryParams.type);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
      }
    }
}
</script>

<style lang="less" scoped>
.singerParent{
  width: 1100px;
  margin: 0 auto;
  p{
     span{
         margin-right: 20px;
     } 
  }
  .quanqiuBuju {
    display: flex;
    flex-wrap: wrap;
    .quanqiuBujuItem {
        margin-right: 20px;
        margin-bottom: 10px;
      .GFbangdanItemPic {
        width: 180px;
        height: 180px;
      }
    }
  }
}
</style>