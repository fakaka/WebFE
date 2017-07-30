<template>
    <div class="container">
        <!--<icon></icon>-->
        Normal
        <!--<m-player></m-player>-->
        <br> withlist
        <!--<m-player :class="'aplayer-withlist'"></m-player>-->
        <br> withlrc
        <!--<m-player :class="'aplayer-withlrc'"></m-player>-->
        <br> withlist and withlrc
        <m-player :class="'aplayer-withlist aplayer-withlrc'" :musics="songs"></m-player>
        <br> narrow
        <!--<m-player :class="'aplayer-narrow'"></m-player>-->
        <br>
    </div>
</template>

<script>
import MPlayer from './components/player/player'

export default {
    name: 'app',
    data() {
        return {
            songs: [{
                title: '借我',
                author: '谢春花',
                url: 'http://ooyhwygfv.bkt.clouddn.com/music/%E8%B0%A2%E6%98%A5%E8%8A%B1%20-%20%E5%80%9F%E6%88%91.mp3'
            }]
        }
    },
    components: {
        MPlayer
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
    .container {
        width: 600px;
        margin: 0 auto;
    }
</style>
