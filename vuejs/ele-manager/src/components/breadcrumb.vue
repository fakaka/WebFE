<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in items" :key="index" :to="item.to">{{item.content}}</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
    </div>
</template>

<script>

export default {
    name: 'home',
    props: {
        items: {
            type: Array,
            default() {
                return [
                    {
                        content: '首页',
                        to: '/home'
                    },
                    {
                        content: '管理'
                    },
                    {
                        content: '人员管理'
                    }
                ]
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
    },
    created() { },
    computed: {},
    components: {

    }
}
</script>

<style scoped>
    .el-breadcrumb {
        margin-bottom: 8px;
    }
</style>