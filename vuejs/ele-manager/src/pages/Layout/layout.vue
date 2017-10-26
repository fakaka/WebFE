<template>
    <el-container style="height: 100%;">
        <el-header style="height: 50px;">
            <nav-header></nav-header>
        </el-header>
        <el-container>
            <nav-side></nav-side>
            <el-main>
                <breadcrumb></breadcrumb>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavHeader from "./nav-header"
import NavSide from "./nav-side"
import Breadcrumb from "./breadcrumb"

export default {
    name: "layout",
    props: {},
    data() {
        return {
        }
    },
    methods: {

    },
    created() { },
    computed: {},
    components: {
        NavHeader, NavSide, Breadcrumb
    }
}
</script>

<style scoped>
    .el-header {
      line-height: 50px;
      text-align: right;
      font-size: 12px;
    }
</style>