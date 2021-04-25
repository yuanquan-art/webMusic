<template>
    <div>
        <div class="dujiaSendParent">
            <el-container>
    <el-aside width="600px">Aside</el-aside>
    <el-main>Main</el-main>
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