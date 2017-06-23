<template>
    <transition name="slide">
        <music-list :rank="rank" :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
</template>

<script>
import MusicList from '../music-list/music-list'
import { getMusicList } from '../../api/rank'
import { mapGetters } from 'vuex'
import { createSong } from 'common/js/song'

export default {
    name: 'top-list',
    props: {},
    data() {
        return {
            songs: [],
            rank: true
        }
    },
    methods: {
        _getMusicList() {
            if (!this.topList.id) {
                this.$router.push('/rank')
                return
            }
            getMusicList(this.topList.id).then(res => {
                if (res.code == 0) {
                    this.songs = this._normalizeSongs(res.songlist)
                }
            })
        },
        _normalizeSongs(list) {
            let ret = []
            list.forEach((item) => {
                const musicData = item.data
                if (musicData.songid && musicData.albummid) {
                    ret.push(createSong(musicData))
                }
            })
            return ret
        }
    },
    computed: {
        title() {
            return this.topList.topTitle
        },
        bgImage() {
            return this.songs.length ? this.songs[0].image : ''
        },
        ...mapGetters([
            'topList'
        ])
    },
    created() {
        this._getMusicList()
    },
    components: {
        MusicList
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>