<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="所有歌曲" name="first">
                <el-table :data="tableData" stripe style="width: 100%" border :default-sort="{prop: 'date', order: 'descending'}">
                    <el-table-column prop="title" label="歌曲名" width="180"></el-table-column>
                    <el-table-column prop="singer" label="歌手" width="180"></el-table-column>
                    <el-table-column prop="album" label="专辑"></el-table-column>
                </el-table>
                <div class="block" style="margin-top:10px;">
                    <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1"
                                                                                :page-size="5" layout="total, prev, pager, next" :total="100">
                                                                            </el-pagination> -->
                </div>
            </el-tab-pane>
            <el-tab-pane label="歌手管理" name="second">歌手管理</el-tab-pane>

            <el-tab-pane label="歌单管理" name="third">
                <el-row>
                    <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 1">
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="../assets/hamburger.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button type="text" class="button">操作按钮</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 1">
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="../assets/hamburger.png" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button type="text" class="button">操作按钮</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>

            <el-tab-pane label="文件夹" name="fourth">
                <el-row>
                    <el-col :span="6" >
                        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                    </el-col>
                    <el-col :span="16"  :offset="2">
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

export default {
    name: 'song',
    props: {},
    data() {
        return {
            activeName: 'first',
            currentDate: new Date().toLocaleTimeString(),
            tableData: [{
                title: '无与伦比的美丽',
                singer: '苏打绿',
                album: '无与伦比的美丽'
            }, {
                title: '无与伦比的美丽',
                singer: '苏打绿',
                album: '无与伦比的美丽'
            }, {
                title: '无与伦比的美丽',
                singer: '苏打绿',
                album: '无与伦比的美丽'
            }, {
                title: '无与伦比的美丽',
                singer: '苏打绿',
                album: '无与伦比的美丽'
            },],
            treeData: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
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

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>