<template>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
    </el-tree>
</template>

<script>

export default {
    name: 'location',
    props: {},
    data() {
        return {
            data: [{
                label: '江苏',
                children: [{
                    label: '南京',
                    children: [{
                        label: '鼓楼区'
                    }, {
                        label: '玄武区'
                    }, {
                        label: '秦淮区'
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
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
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