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
        background-color: #fff;
        color: #000;
        border-radius: 24px;
        max-width: 568px;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
    }
</style>
