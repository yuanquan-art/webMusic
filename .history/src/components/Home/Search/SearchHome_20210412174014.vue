<template>
    <div>
        搜索歌单
        {{ music }}
    </div>
</template>

,<script>
export default {
    data(){
        return {
            music: this.$route.params;
        }
    },
    created(){

    },
    methods: {

    }
}
</script>


<style lang="less" scoped>

</style>