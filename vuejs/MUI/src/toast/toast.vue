<template>
    <div class="mu-toast">
        {{message}}
    </div>
</template>

<script>
export default {
    name: 'mu-toast',
    props: {
        message: {
            type: String
        }
    },
    methods: {
        clickOutSide() {
            this.$emit('close', 'clickOutSide')
        }
    },
    data() {
        return {
            zIndex: 100
        }
    }
}
</script>

<style lang="less">
    .mu-toast {
        height: 48px;
        line-height: 48px;
        padding: 0 24px;
        background-color: #000;
        color: #fff;
        border-radius: 24px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        text-overflow: ellipsis;
        box-sizing: border-box;
    }
</style>
