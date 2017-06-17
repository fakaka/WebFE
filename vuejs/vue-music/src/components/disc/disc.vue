<template>
    <transition name="slide">
        <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
</template>

<script>
// import MusicList from 
export default {
    name: '',
    props: {},
    data() {
        return {

        }
    },
    methods: {
    },
    computed: {
    },
    mount() {
    },
    components:{
        MusicList
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>