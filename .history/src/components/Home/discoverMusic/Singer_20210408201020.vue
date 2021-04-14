<template>
    <div>
        <div class="singerParent">
            <p>1</p>
            <p>2</p>
            <div>tupian</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           singeGategoryParams: {
               type: {
                   "全部":'-1',
                   "男歌手":'1',
                   "女歌手":'2',
                   "乐队":'3',
               },
               area: {
                   "全部":'-1',
                   "华语":'7',
                   "欧美":'96',
                   "日本":'8',
                   "韩国":'16',
                   "其他":'0',
               }
           }
        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.singerParent{
  width: 1100px;
  margin: 0 auto;
}
</style>