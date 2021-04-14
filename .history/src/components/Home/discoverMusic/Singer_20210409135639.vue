<template>
    <div>
        <div class="singerParent">
            <p @click="yuzhong($event)"> 
                <span v-for="(item,index) in typeList" :key="index" :data-index='item.text'>{{ item.text }}</span>
            </p>
            <p>
                <span>全部</span>
                <span>华语</span>
                <span>欧美</span>
                <span>日本</span>
                <span>韩国</span>
                <span>其他</span>
            </p>
            <div>tupian</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           singeGategoryParams: {
               type: '-1',
               area: '-1'
           },
          typeList: [
              {'id':1,text: '全部'},
              {'id':2,text: '男歌手'},
              {'id':3,text: '女歌手'},
              {'id':4,text: '乐队'}
          ]
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
         console.log(res)
      },
      yuzhong(e){
          const dom = e.target;
          const text = dom.getAttribute('data-index');
          console.log(text)
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
}
</style>