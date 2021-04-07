<template>
    <div>
        <div class="musicLevelListParent">
            111111
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 所有榜单内容摘要
            ManyLevelContentList: []
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
            console.log(resGedanList)
            
        }
    }
}
</script>

<style lang="less" scoped>
.musicLevelListParent{
    width: 1100px;
    margin: 0 auto;
}
</style>