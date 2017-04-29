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
        <m-player :class="'aplayer-withlist aplayer-withlrc'"></m-player>
        <br> narrow
        <!--<m-player :class="'aplayer-narrow'"></m-player>-->
        <br>
    </div>
</template>

<script>
import MPlayer from './components/player'

export default {
    name: 'app',
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
