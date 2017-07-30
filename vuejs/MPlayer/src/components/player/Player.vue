<template>
    <div class="aplayer" id="aplayer">
        <div class="aplayer-pic">
            <div class="aplayer-button aplayer-play" @click="togglePlay" v-show="!isPlaying">
                <icon :type="'play'"></icon>
            </div>
            <div class="aplayer-button aplayer-pause" @click="togglePlay" v-show="isPlaying">
                <icon :type="'pause'"></icon>
            </div>
        </div>
        <div class="aplayer-info">
            <div class="aplayer-music">
                <span class="aplayer-title">{{ musics[0].title }} - </span>
                <span class="aplayer-author">{{ musics[0].author }}</span>
            </div>
            <div class="aplayer-lrc">
                <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"
                    ref="lrcContents">
                    <p v-for="line in lrc" :key="line">{{ line }}</p>
                </div>
            </div>
            <div class="aplayer-controller">
                <div class="aplayer-bar-wrap">
                    <div class="aplayer-bar">
                        <div class="aplayer-loaded" style="width: 0"></div>
                        <div class="aplayer-played" style="width: 14.1958%; background: rgb(230, 208, 178);">
                            <span class="aplayer-thumb" style="border: 1px solid rgb(230, 208, 178);" @click="play(50)"></span>
                        </div>
                    </div>
                </div>
                <div class="aplayer-time">
                    <span class="aplayer-time-inner"> -
                        <span class="aplayer-ptime">00:00</span> /
                        <span class="aplayer-dtime">00:00</span>
                    </span>
                    <div class="aplayer-volume-wrap">
                        <button type="button" class="aplayer-icon aplayer-icon-volume-down">
                            <icon :type="'volume-down'"></icon>
                        </button>
                        <div class="aplayer-volume-bar-wrap">
                            <div class="aplayer-volume-bar">
                                <div class="aplayer-volume" style="height: 80%; background: ${this.option.theme};"></div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="aplayer-icon aplayer-icon-mode">
                        <icon :type="'single'"></icon>
                    </button>
                    <button type="button" class="aplayer-icon aplayer-icon-menu">
                        <icon :type="'menu'"></icon>
                    </button>
                </div>
            </div>
        </div>
        <div class="aplayer-list">
            <ol>
                <li v-for="(music, index) in musics" :key="index" :class="{'aplayer-list-light': index == currIndex}" @click="playMusic(index)">
                    <span class="aplayer-list-cur" style="background: #b7daff"></span>
                    <span class="aplayer-list-index">{{ index + 1 }}</span>
                    <span class="aplayer-list-title">{{ music.title }}</span>
                    <span class="aplayer-list-author">{{ music.author}}</span>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import Icon from '../icon/icon'

export default {
    name: 'hello',
    props: {
        musics: {
            type: Array
        }
    },
    data() {
        return {
            theme: '#b7daff',
            isPlaying: false,
            currIndex: 0,
            lrc: [],
        }
    },
    methods: {
        togglePlay() {
            if (this.audio.paused) {
                this.audio.play()
            } else {
                this.audio.pause()
            }
            this.isPlaying = !this.isPlaying
        },
        play(time) {
            if (time) {
                this.audio.currentTime = time
            }
            if (this.audio.paused)
                this.audio.play()
            this.isPlaying = true
        },
        playMusic(idx) {
            this.currIndex = idx
            this.audio.pause()
            this.audio = new Audio(this.musics[this.currIndex].url)
            this.audio.play()
            this.isPlaying = true
        },
        getLrc() {
            this.$http.get('/api').then((res) => {
                this.lrc = lrc
            })
        }

    },
    mounted() {
        this.$nextTick(() => {
            console.log("\n %c MPlayer 0.0.1 %c http://www.baidu.com \n\n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");
            if (!this.audio) {
                this.audio = new Audio(this.musics[this.currIndex].url)
            }
            this.getLrc()
        })
    },
    components: {
        Icon
    },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./APlayer.scss"
</style>