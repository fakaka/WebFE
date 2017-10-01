<template>
    <div style="height:100%; width:100%">
        <m-header></m-header>
        <div class="main" style="height: 100%;">
            <el-row style="height: 100%;">
                <el-col :span="4" style="min-height: 100%; background-color: #eff2f7;">
                    <nav-menu></nav-menu>
                </el-col>
                <el-col :span="20" style="height: 100%;overflow: auto;" class="right">
                    <breadcrumb style=""></breadcrumb>
                    <div class="content">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import MHeader from '@/components/m-header'
import NavMenu from '@/components/navmenu'
import Breadcrumb from '@/components/breadcrumb'

export default {
    name: 'layout',
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
        MHeader, NavMenu, Breadcrumb
    }
}
</script>

<style scoped>
    .right {
        padding: 10px;
    }

    .content {
        /* padding: 10px; */
    }
</style>