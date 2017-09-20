<template>
    <div>
        <el-table :data="tableData" stripe style="width: 100%" border :default-sort="{prop: 'date', order: 'descending'}">
            <el-table-column prop="date" label="日期" width="180" sortable>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
        <div class="block" style="margin-top:10px;">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1"
                :page-size="5" layout="total, prev, pager, next" :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>

export default {
    name: 'user-manager',
    props: {},
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
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

<style>

</style>