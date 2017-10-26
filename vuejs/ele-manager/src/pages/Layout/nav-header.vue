<template>
    <div>
        <screen-full class='screenfull'></screen-full>
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
    </div>
</template>

<script>
import ScreenFull from '@/components/screenfull'

export default {
    name: 'navHeader',
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
        ScreenFull
    }
}
</script>

<style>
    .el-header {
      background-color: #b3c0d1;
      color: #333;
      line-height: 60px;
    }
    .screenfull {
      position: absolute;
      right: 95px;
      top: 14px;
      color: red;
    }
</style>