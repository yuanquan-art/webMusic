<template>
    <div>
        <div class="dujiaSendParent">
            <el-container>
    <el-aside width="600px">
        mv
    </el-aside>
    <el-main>相关推荐</el-main>
  </el-container>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
     console.log(this.$route.query.id)
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.dujiaSendParent{
    width: 900px;
    margin: 0 auto;
}
</style>