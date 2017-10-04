<template>
    <div id="app">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="home"> 主页</el-menu-item>
            <el-menu-item index="nav">页面导航</el-menu-item>
            <el-menu-item index="bilibili">哔哩哔哩</el-menu-item>
            <el-menu-item index="music">音乐</el-menu-item>
            <el-menu-item index="news">新闻</el-menu-item>
            <el-menu-item index="live">直播</el-menu-item>
            <el-menu-item index="todo">TODO</el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            activeIndex: 'home'
        }
    }
}
</script>

<style lang="less">
    @import './style/common';
</style>
