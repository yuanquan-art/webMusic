<template>
    <div>
        <div class="singerParent">
            <p @click="yuzhong($event)"> 
                <span v-for="(item,index) in typeList" :key="index" :data-index='item.text'>{{ item.text }}</span>
            </p>
            <p @click="fenlei($event)">
                <span v-for="(item,index) in areaList" :key="index" :data-index='item.text'>{{ item.text }}</span>
            </p>
             <p @click="shuaixuan($event)">
                <span v-for="(item,index) in shuaixuanList" :key="index" :data-index='item.text'>{{ item.text }}</span>
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

        <!-- 分页 -->
        <div class="fenye">
             <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="netFriengdsSpecilMusicPages.total">
    </el-pagination>
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
               initial: 'a',
               offset: 1
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
              {'id':5,text: '韩国'},
              {'id':6,text: '其他'}
          ],
          shuaixuanList: [
              {text: 'a'},
              {text: 'b'},
              {text: 'c'},
              {text: 'd'},
              {text: 'e'},
              {text: 'f'},
              {text: 'g'},
              {text: 'h'},
              {text: 'i'},
              {text: 'g'},
              {text: 'k'},
              {text: 'l'},
              {text: 'm'},
              {text: 'n'},
              {text: 'o'},
              {text: 'p'},
              {text: 'q'},
              {text: 'r'},
              {text: 's'},
              {text: 't'},
              {text: 'u'},
              {text: 'v'},
              {text: 'w'},
              {text: 'x'},
              {text: 'y'},
              {text: 'z'}
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
         const {data:res} = await this.$axios.get('/artist/list?limit=100&offset='+this.singeGategoryParams.offset);
         this.singeList = res.artists;
      },
      async yuzhong(e){
          const dom = e.target;
          const text = dom.getAttribute('data-index');
          console.log(text)
          if(text == '全部'){
              const {data:res} = await this.$axios.get('/artist/list?limit=100&type='+this.singeGategoryParams.type+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '男歌手'){
              this.singeGategoryParams.type = '1';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&type='+this.singeGategoryParams.type+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '女歌手'){
              this.singeGategoryParams.type = '2';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&type='+this.singeGategoryParams.type+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '乐队'){
              this.singeGategoryParams.type = '3';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&type='+this.singeGategoryParams.type+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
      },
      async fenlei(e){
          const dom = e.target;
          const text = dom.getAttribute('data-index');
          console.log(text)
           if(text == '全部'){
              const {data:res} = await this.$axios.get('/artist/list?limit=100&area='+this.singeGategoryParams.area+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '华语'){
              this.singeGategoryParams.area = '7';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&area='+this.singeGategoryParams.area+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '欧美'){
              this.singeGategoryParams.area = '96';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&area='+this.singeGategoryParams.area+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '日本'){
              this.singeGategoryParams.area = '8';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&area='+this.singeGategoryParams.area+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '韩国'){
              this.singeGategoryParams.area = '16';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&area='+this.singeGategoryParams.area+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
          else if(text == '其他'){
              this.singeGategoryParams.area = '0';
              const {data:res} = await this.$axios.get('/artist/list?limit=100&area='+this.singeGategoryParams.area+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
            return;
          }
      },
      async shuaixuan(e){
          const dom = e.target;
          const text = dom.getAttribute('data-index');
          console.log(text)
          this.singeGategoryParams.initial = text;
              const {data:res} = await this.$axios.get('/artist/list?limit=100&initial='+this.singeGategoryParams.initial+'&offset='+this.singeGategoryParams.offset);
            console.log(res)
            this.singeList = res.artists;
    
        
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