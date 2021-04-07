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
        return {}
    },
    created(){},
    methods: {
        // 获取所有榜单内容摘要
        async getManyLevelContent(){
            const {data:res} = await this.$axios.get('');
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