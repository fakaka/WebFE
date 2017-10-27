<template>
    <div>
        <el-menu default-active="dashboard" class="el-menu-vertical-demo" style="min-height: 100%;" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
            <hamburger :toggleClick="toggleSideBar" :isCollapse="isCollapse"></hamburger>
            <el-menu-item index="home">
                <i class="el-icon-menu"></i>
                <span slot="title">主页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span slot="title">信息管理</span>
                </template>
                <el-menu-item index="user">用户管理</el-menu-item>
                <el-menu-item index="song">歌曲管理</el-menu-item>
                <el-menu-item index="blog">博客管理</el-menu-item>
                <el-menu-item index="weibo">微博管理</el-menu-item>
                <el-menu-item index="todo">清单管理</el-menu-item>
                <el-menu-item index="download">下载管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span slot="title">开发</span>
                </template>
                <el-menu-item index="clawer">数据抓取</el-menu-item>
                <el-menu-item index="interface">接口管理</el-menu-item>
                <el-menu-item index="image">图床</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">设置</span>
                </template>
                <el-menu-item index="setting">基本设置</el-menu-item>
                <el-menu-item index="system">系统设置</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import Hamburger from "./hamburger";

export default {
    name: 'navSide',
    props: {},
    data() {
        return {
            isCollapse: false
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        toggleSideBar() {
            this.isCollapse = !this.isCollapse
        },
    },
    created() { },
    computed: {},
    components: {
        Hamburger
    }
}
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
</style>