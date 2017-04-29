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
                <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);" ref="lrcContents">
                    <p v-for="line in lrc">{{ line }}</p>
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
                    <span class="aplayer-time-inner"> - <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>
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
                <li v-for="(music, index) in musics" :class="{'aplayer-list-light': index == currIndex}" @click="playMusic(index)">
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
import Icon from './icon'

export default {
    name: 'hello',
    components: {
        Icon
    },
    data() {
        return {
            theme: '#b7daff',
            isPlaying: false,
            currIndex: 0,
            lrc: [],
            musics: [{
                title: '借我',
                author: '谢春花',
                url: 'http://ooyhwygfv.bkt.clouddn.com/%E8%B0%A2%E6%98%A5%E8%8A%B1%20-%20%E5%80%9F%E6%88%91.mp3'
            }, {
                title: '暧昧',
                author: '薛之谦',
                url: 'http://ooyhwygfv.bkt.clouddn.com/%E8%96%9B%E4%B9%8B%E8%B0%A6%20-%20%E6%9A%A7%E6%98%A7.mp3'
            }
            ]
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
            console.log('data')
            this.$http.get('/api').then(res => {
                console.log(res)
                const lyric = res.body.split('\n');
                let lrc = [];
                const lyricLen = lyric.length;
                for (let i = 0; i < lyricLen; i++) {
                    // match lrc time
                    const lrcTimes = lyric[i].match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g);
                    // match lrc text
                    const lrcText = lyric[i].replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g, '').replace(/^\s+|\s+$/g, '');

                    if (lrcTimes != null) {
                        // handle multiple time tag
                        const timeLen = lrcTimes.length;
                        for (let j = 0; j < timeLen; j++) {
                            const oneTime = /\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(lrcTimes[j]);
                            const lrcTime = (oneTime[1]) * 60 + parseInt(oneTime[2]) + parseInt(oneTime[3]) / ((oneTime[3] + '').length === 2 ? 100 : 1000);
                            lrc.push([lrcTime, lrcText]);
                        }
                    }
                }
                // sort by time
                // lrc.sort((a, b) => a[0] - b[0]);
                this.lrc = lrc
            })
        }

    },
    mounted() {
        this.$nextTick(() => {
            if (!this.audio) {
                this.audio = new Audio(this.musics[this.currIndex].url)
            }
            this.getLrc()
            var lrcContents = this.$refs.lrcContents
            let lrcIndex = 0
            setInterval(() => {
                lrcIndex++
                lrcContents.style.transform = `translateY(${-lrcIndex * 16}px)`
                // lrcContents.style.webkitTransform = `translateY(${-lrcIndex * 16}px)`
            }, 1000)
        })
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$aplayer-height: 66px;
$lrc-height: 30px;
$aplayer-height-lrc: $aplayer-height+$lrc-height - 6;

.aplayer-narrow {
    width: $aplayer-height;
    .aplayer-info {
        display: none;
    }
}

.aplayer-withlrc {
    &.aplayer-narrow {
        width: $aplayer-height-lrc;
    }
    &.aplayer {
        .aplayer-pic {
            height: 90px;
            width: 90px;
        }

        .aplayer-info {
            margin-left: $aplayer-height-lrc;
            height: $aplayer-height-lrc;
        }

        .aplayer-lrc {
            display: block;
        }

        .aplayer-info {
            padding: 10px 7px 0 7px;
        }
    }
}

.aplayer-withlist {
    &.aplayer {
        .aplayer-info {
            border-bottom: 1px solid #e9e9e9;
        }

        .aplayer-list {
            display: block;
        }

        .aplayer-icon-menu {
            display: inline !important;
        }
    }
}

.aplayer {
    font-family: Arial, Helvetica, sans-serif;
    margin: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    border-radius: 2px;
    overflow: hidden;
    user-select: none;
    line-height: initial;

    * {
        box-sizing: content-box;
    }

    .aplayer-icon {
        width: 15px;
        height: 15px;
        border: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        opacity: .8;
        vertical-align: middle;
        padding: 0;
        font-size: 12px;
        margin: 0;
        display: inline;

        .aplayer-fill {
            transition: all .2s ease-in-out;
        }
    }

    .aplayer-lrc-content {
        display: none;
    }

    .aplayer-pic {
        position: relative;
        float: left;
        height: $aplayer-height;
        width: $aplayer-height;
        background-image: url(./default.jpg);
        background-size: 100%;
        transition: all 0.3s ease;

        .aplayer-button {
            position: absolute;
            border-radius: 50%;
            opacity: 0.8;
            cursor: pointer;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
            background: rgba(0, 0, 0, 0.2);
            transition: all 0.1s ease;
            &:hover {
                opacity: 1;
            }

            .aplayer-fill {
                fill: #fff;
            }
        }

        .aplayer-hide {
            display: none;
        }

        .aplayer-play {
            width: 26px;
            height: 26px;
            border: 2px solid #fff;
            bottom: 50%;
            right: 50%;
            margin: 0 -15px -15px 0;
            .aplayer-icon-play {
                position: absolute;
                top: 3px;
                left: 4px;
                height: 20px;
                width: 20px;
            }
        }

        .aplayer-pause {
            width: 16px;
            height: 16px;
            border: 2px solid #fff;
            bottom: 4px;
            right: 4px;
            .aplayer-icon-pause {
                position: absolute;
                top: 2px;
                left: 2px;
                height: 12px;
                width: 12px;
            }
        }
    }

    .aplayer-info {
        margin-left: $aplayer-height;
        padding: 14px 7px 0 10px;
        height: $aplayer-height;
        box-sizing: border-box;

        .aplayer-music {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin: 0 0 13px 5px;
            user-select: text;
            cursor: default;
            padding-bottom: 2px;

            .aplayer-title {
                font-size: 14px;
            }

            .aplayer-author {
                font-size: 12px;
                color: #666;
            }
        }

        .aplayer-controller {
            position: relative;
            display: flex;

            .aplayer-bar-wrap {
                margin: 0 0 0 5px;
                padding: 4px 0;
                cursor: pointer !important;
                flex: 1;

                .aplayer-bar {
                    position: relative;
                    height: 2px;
                    width: 100%;
                    background: #cdcdcd;

                    .aplayer-loaded {
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        background: #aaa;
                        height: 2px;
                        transition: all 0.5s ease;
                    }

                    .aplayer-played {
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        height: 2px;

                        .aplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 8px;
                            width: 8px;
                            border-radius: 50%;
                            background: #fff;
                            cursor: pointer !important;
                        }
                    }
                }
            }

            .aplayer-time {
                position: relative;
                right: 0;
                bottom: 3px;
                height: 17px;
                color: #999;
                font-size: 11px;
                padding-left: 7px;

                .aplayer-time-inner {
                    vertical-align: middle;
                }

                .aplayer-icon {
                    cursor: pointer;
                    transition: all 0.2s ease;

                    .aplayer-fill {
                        fill: #666;
                    }

                    &.aplayer-icon-mode {
                        margin-right: 4px;
                    }

                    &:hover {
                        .aplayer-fill {
                            fill: #000;
                        }
                    }

                    &.aplayer-icon-menu {
                        display: none;
                    }
                }

                &.aplayer-time-narrow {
                    .aplayer-icon-mode {
                        display: none;
                    }

                    .aplayer-icon-menu {
                        display: none;
                    }
                }
            }

            .aplayer-volume-wrap {
                position: relative;
                display: inline-block;
                margin-left: 3px;
                cursor: pointer !important;

                &:hover .aplayer-volume-bar-wrap {
                    display: block;
                }

                .aplayer-volume-bar-wrap {
                    display: none;
                    position: absolute;
                    bottom: 15px;
                    right: -3px;
                    width: 25px;
                    height: 40px;
                    z-index: 99;

                    .aplayer-volume-bar {
                        position: absolute;
                        bottom: 0;
                        right: 10px;
                        width: 5px;
                        height: 35px;
                        background: #aaa;

                        .aplayer-volume {
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            width: 5px;
                            transition: all 0.1s ease;
                        }
                    }
                }
            }
        }
    }

    .aplayer-lrc {
        display: none;
        position: relative;
        height: $lrc-height;
        text-align: center;
        overflow: hidden;
        margin: -10px 0 7px;

        &:before {
            position: absolute;
            top: 0;
            z-index: 1;
            display: block;
            overflow: hidden;
            width: 100%;
            height: 10%;
            content: ' ';
            background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
            background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
            background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff', GradientType=0);
        }

        &:after {
            position: absolute;
            bottom: 0;
            z-index: 1;
            display: block;
            overflow: hidden;
            width: 100%;
            height: 33%;
            content: ' ';
            background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%);
            background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%);
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ccffffff', GradientType=0);
        }

        p {
            font-size: 12px;
            color: #666;
            line-height: 16px !important;
            height: 16px !important;
            padding: 0 !important;
            margin: 0 !important;
            transition: all 0.5s ease-out;
            opacity: 0.4;
            overflow: hidden;

            &.aplayer-lrc-current {
                opacity: 1;
                overflow: visible;
                height: initial !important;
            }
        }

        .aplayer-lrc-contents {
            width: 100%;
            transition: all 0.5s ease-out;
            user-select: text;
            cursor: default;
        }
    }

    .aplayer-list {
        overflow: auto;
        transition: all 0.5s ease;
        will-change: height;
        display: none;

        &.aplayer-list-hide {
            height: 0 !important;
        }

        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            background-color: #f9f9f9;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 3px;
            background-color: #eee;
        }
        &::-webkit-scrollbar-thumb:hover {
            background-color: #ccc;
        }

        ol {
            list-style-type: none;
            margin: 0;
            padding: 0;

            li {
                position: relative;
                height: 32px;
                line-height: 32px;
                padding: 0 15px;
                font-size: 12px;
                border-top: 1px solid #e9e9e9;
                cursor: pointer;
                transition: all 0.2s ease;
                overflow: hidden;

                &:first-child {
                    border-top: none;
                }

                &:hover {
                    background: #efefef;
                }

                &.aplayer-list-light {
                    background: #e9e9e9;

                    .aplayer-list-cur {
                        display: inline-block;
                    }
                }

                .aplayer-list-cur {
                    display: none;
                    width: 3px;
                    height: 22px;
                    position: absolute;
                    left: 0;
                    top: 5px;
                    cursor: pointer;
                }
                .aplayer-list-index {
                    color: #666;
                    margin-right: 12px;
                    cursor: pointer;
                }
                .aplayer-list-author {
                    color: #666;
                    float: right;
                    cursor: pointer;
                }
            }
        }
    }
}

@keyframes aplayer-roll {
    0% {
        left: 0
    }
    100% {
        left: -100%
    }
}
</style>