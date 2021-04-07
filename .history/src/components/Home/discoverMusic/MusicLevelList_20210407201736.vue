<template>
    <div>
        <div class="musicLevelListParent">
           <div class="guangfang">
               <div class="guangfangBang">官方榜</div>
               <div class="guangfangBuju" v-for="(item,index) in guangfangbangList" :key="index"> 
                   <img class="GFbangdanItemPic" :src="item.coverImgUrl" alt="">
                   <div class="guangfanRight">11</div>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 所有榜单内容摘要
            ManyLevelContentList: [],
            // 官方榜list
            guangfangbangList: [],
            // 全球榜list
            gloabalList: []
        }
    },
    created(){
        this.getManyLevelContent();
    },
    methods: {
        // 获取所有榜单内容摘要
        async getManyLevelContent(){
            const {data:res} = await this.$axios.get('/toplist/detail');
            
            const resGedanList = res.list;
            for(let i =0;i<4;i++){
                this.guangfangbangList.push(resGedanList[i]);
            }
            for(let i =4;i<resGedanList.length-1;i++){
                this.gloabalList.push(resGedanList[i]);
            }
            console.log(this.guangfangbangList)
            console.log(this.gloabalList)
        }
    }
}
</script>

<style lang="less" scoped>
.musicLevelListParent{
    width: 1100px;
    margin: 0 auto;
    .guangfangBang{
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 20px;
    }
    .guangfangBuju{
        margin-bottom: 20px;
        .GFbangdanItemPic{
            width: 180px;
            height: 180px;
        }
        .guangfanRight{
        margin-left: 20px;
        display: inline-block;
      }
    }
}
</style>