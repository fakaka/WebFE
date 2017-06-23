<template>
    <div class="rank" ref="rank">
        <scroll :data="topList" class="toplist" ref="toplist">
            <ul>
                <li v-for="item in topList" :key="item" @click="selectItem(item)" class="item">
                    <div class="icon">
                        <img width="100" height="100" v-lazy="item.picUrl" />
                    </div>
                    <ul class="songlist">
                        <li v-for="(song,index) in item.songList" :key="song.id" class="song">
                            <span>{{index + 1}}. </span>
                            <span>{{song.songname}} - {{song.singername}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="loading-container" v-show="!topList.length">
                <loading></loading>
            </div>
        </scroll>
        <router-view></router-view>
    </div>
</template>

<script>
import Scroll from '../../base/scroll/scroll'
import Loading from '../../base/loading/loading'
import { getTopList } from '../../api/rank'
import { playlistMixin } from 'common/js/mixin'
import { mapMutations } from 'vuex'

export default {
    name: 'rank',
    mixins: [playlistMixin],
    props: {},
    data() {
        return {
            topList: []
        }
    },
    methods: {
        selectItem(item) {
            this.$router.push({
                path: `/rank/${item.id}`
            })
            this.setTopList(item)
        },
        handlePlaylist(playList) {
            const bottom = playList.length > 0 ? '60px' : 0
            this.$refs.rank.style.bottom = bottom
            this.$refs.toplist.refresh()
        },
        _getTopList() {
            getTopList().then(res => {
                if (res.code == 0) {
                    this.topList = res.data.topList
                }
            })
        },
        ...mapMutations({
            setTopList:'SET_TOP_LIST'
        })
    },
    computed: {
    },
    created() {
        this._getTopList()
    },
    components: {
        Scroll, Loading
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .rank
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .toplist
      height: 100%
      overflow: hidden
      .item
        display: flex
        margin: 0 20px
        padding-top: 20px
        height: 100px
        &:last-child
          padding-bottom: 20px
        .icon
          flex: 0 0 100px
          width: 100px
          height: 100px
        .songlist
          flex: 1
          display: flex
          flex-direction: column
          justify-content: center
          padding: 0 20px
          height: 100px
          overflow: hidden
          background: $color-highlight-background
          color: $color-text-d
          font-size: $font-size-small
          .song
            no-wrap()
            line-height: 26px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>