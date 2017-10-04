<template>
    <div class="zone-module">
        <section class="sec-rank zone-rank">
            <header class="rank-head">
                <h3>动画</h3>
            </header>
            <div class="rank-list-wrap">
                <ul class="rank-list hot-list">
                    <li v-for="(item, index) in rankData.data" :key="item" class="rank-item show-detail" :class="isHighlight(index)">
                        <i class="ri-num">{{ index + 1 }}</i>
                        <a :href="perfix + item.aid" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                            <div class="lazy-img ri-preview">
                                <img alt="" :src="item.pic" :title="item.description">
                            </div>
                            <div class="ri-detail">
                                <p class="ri-title">{{ item.title }}</p>
                                <p class="ri-point">播放: {{ item.play|playCountFilter }} | 收藏: {{ item.favorites|favoritesCountFilter
                                    }}
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>

const BILIBILI_URL_AV = 'https://www.bilibili.com/video/av'

export default {
    name: 'bilibili',// -rank
    props: {},
    data() {
        return {
            perfix: BILIBILI_URL_AV,
            rankData: {
                "code": 0,
                "data": [{
                    "aid": "11631680",
                    "typename": "电视剧相关",
                    "title": "【长工】5分钟看《小镇滋味》默默的吃掉你的邻居（下）",
                    "subtitle": "",
                    "play": 92190,
                    "review": 284,
                    "video_review": 490,
                    "favorites": 420,
                    "mid": 17171565,
                    "author": "蔡老板家的长工",
                    "description": "在这里和大家说下，不好意思啊，最近有事情有点多，拖更的有点严重，读留言也没来得及弄\r\n这几天忙完了，恢复正常的更新速度啊。\r\n日常宣群：648359601",
                    "create": "2017-06-26 04:39",
                    "pic": "http://i2.hdslb.com/bfs/archive/40e9679773238810e2f87505e75d3f484c646d8b.png",
                    "coins": 509,
                    "duration": "9: 5",
                    "badgepay": false,
                    "pts": 91778
                }, {
                    "aid": "11597020",
                    "typename": "电视剧相关",
                    "title": "女奥特曼与其他特摄中的巨大娘合集，不做封面党",
                    "subtitle": "",
                    "play": 851,
                    "review": 348,
                    "video_review": 2845,
                    "favorites": 1919,
                    "mid": 1604778,
                    "author": "オロカメン",
                    "description": "并没有黄暴内容，请放心",
                    "create": "2017-06-25 14:20",
                    "pic": "http://i0.hdslb.com/bfs/archive/d65f51d23526e26f51698ebc09d4e040e6b69730.jpg",
                    "coins": 802,
                    "duration": "47: 6",
                    "badgepay": false,
                    "pts": 88537
                }, {
                    "aid": "11606395",
                    "typename": "电视剧相关",
                    "title": "【SKAM】小天使ins发糖了！",
                    "subtitle": "",
                    "play": 68744,
                    "review": 131,
                    "video_review": 86,
                    "favorites": 1687,
                    "mid": 33080370,
                    "author": "大嘴梦游",
                    "description": "继续秀吧，不要停！bgm：Alone(Matt Palmer)",
                    "create": "2017-06-25 10:18",
                    "pic": "http://i2.hdslb.com/bfs/archive/50fbc6fab78ade0e4339d804a82b09f98c286cfa.jpg",
                    "coins": 356,
                    "duration": "0:30",
                    "badgepay": false,
                    "pts": 68375
                }, {
                    "aid": "11590392",
                    "typename": "电视剧相关",
                    "title": "【哇萨比抓马】解读恐怖美剧《迷雾》第一集 史蒂芬金经典恐怖小说再次搬上电视荧幕",
                    "subtitle": "",
                    "play": 58554,
                    "review": 373,
                    "video_review": 369,
                    "favorites": 171,
                    "mid": 68412710,
                    "author": "哇萨比抓马",
                    "description": "目前看来节奏挺快，也挺精彩的，为什么评分会那么低呢~~我已经敏锐的发现里面有几个作死的角色了",
                    "create": "2017-06-24 19:38",
                    "pic": "http://i1.hdslb.com/bfs/archive/1dae4d5f68fae4a693a3bca1b95fc1e2b11967f1.jpg",
                    "coins": 590,
                    "duration": "6:28",
                    "badgepay": false,
                    "pts": 58245
                }, {
                    "aid": "11604412",
                    "typename": "连载剧集",
                    "title": "【挪威】SKAM 第四季 第十集 Part8 Dear Sana【欣慰的是至少有Evak】【英字】",
                    "subtitle": "",
                    "play": 58345,
                    "review": 212,
                    "video_review": 1596,
                    "favorites": 1202,
                    "mid": 28196582,
                    "author": "_YiDra",
                    "description": "Part1：https://www.youtube.com/watch?v=zDn9jY1oaAQ\nPart2：https://www.youtube.com/watch?v=zyRE0IpuILA\n均来自油管主Feudly\n第四季无字及英字合辑：av9870349\n结束了这就？虚无的感觉。",
                    "create": "2017-06-25 08:05",
                    "pic": "http://i1.hdslb.com/bfs/archive/7aaf03ed4219b4e9705d41ddcb355ef829c57f87.jpg",
                    "coins": 119,
                    "duration": "18:17",
                    "badgepay": false,
                    "pts": 57937
                }, {
                    "aid": "11636287",
                    "typename": "电视剧相关",
                    "title": "【迪丽热巴】丽姬传3分钟长片花首发",
                    "subtitle": "",
                    "play": 46046,
                    "review": 460,
                    "video_review": 678,
                    "favorites": 557,
                    "mid": 15639667,
                    "author": "我戳戳我",
                    "description": "网络\n电视剧丽姬传首款片花来袭！ 绝美丽姬迪丽热巴 为爱独赴深宫，与霸气秦王张彬彬 “红枣定情”。“你从来就不是我的王”，看着超虐心[泪]李泰 刘畅 乱世之中为爱守候。偷偷告诉泥萌，胖迪的眼神超有戏，还有小秀香肩哦~",
                    "create": "2017-06-26 11:21",
                    "pic": "http://i0.hdslb.com/bfs/archive/505dbe94c86257e10a1975b17ae3482382ce27df.jpg",
                    "coins": 75,
                    "duration": "2:42",
                    "badgepay": false,
                    "pts": 45558
                }, {
                    "aid": "11622869",
                    "typename": "电视剧相关",
                    "title": "【哎呀猫片】豆瓣高分排名第一的韩剧，只因为拍了这个",
                    "subtitle": "",
                    "play": 49280,
                    "review": 236,
                    "video_review": 727,
                    "favorites": 443,
                    "mid": 97335574,
                    "author": "哎呀大联盟",
                    "description": "豆瓣 请回答1988 韩剧 神剧 青春 热门 韩国 高分 回忆 搞笑 电视剧",
                    "create": "2017-06-25 22:17",
                    "pic": "http://i1.hdslb.com/bfs/archive/de2ae1bb58b58014691be07959ab0cf8835297f8.jpg",
                    "coins": 48,
                    "duration": "5:45",
                    "badgepay": false,
                    "pts": 42307
                }, {
                    "aid": "11656824",
                    "typename": "电视剧相关",
                    "title": "【作为一个人类】迪迦奥特曼VS伽鲁拉",
                    "subtitle": "",
                    "play": 40566,
                    "review": 198,
                    "video_review": 785,
                    "favorites": 244,
                    "mid": 28573582,
                    "author": "德比西魔虫",
                    "description": "来自网络资源\n《迪迦奥特曼》第39集片段",
                    "create": "2017-06-27 02:13",
                    "pic": "http://i0.hdslb.com/bfs/archive/49348efd301c56e3ecc4516d80cf930671324d4e.jpg",
                    "coins": 21,
                    "duration": "11: 2",
                    "badgepay": false,
                    "pts": 38671
                }, {
                    "aid": "11636170",
                    "typename": "电视剧相关",
                    "title": "《丽姬传》首曝超长高清片花&amp;迪丽热巴&amp;张彬彬&amp;爱原来在这里",
                    "subtitle": "",
                    "play": 37656,
                    "review": 242,
                    "video_review": 348,
                    "favorites": 395,
                    "mid": 51024171,
                    "author": "大溪囧自频道",
                    "description": "优酷视频\n电视剧《丽姬传》",
                    "create": "2017-06-26 11:11",
                    "pic": "http://i2.hdslb.com/bfs/archive/02d3f5f8297c1d02a35f25f0803854435e2a487b.jpg",
                    "coins": 30,
                    "duration": "2:47",
                    "badgepay": false,
                    "pts": 37330
                }, {
                    "aid": "11613353",
                    "typename": "电视剧相关",
                    "title": "星玥-楚乔传-十六年-星玥分开太久了，公子等了星儿太久",
                    "subtitle": "",
                    "play": 37381,
                    "review": 81,
                    "video_review": 231,
                    "favorites": 432,
                    "mid": 71963887,
                    "author": "碧洛无痕",
                    "description": "星玥分开太久，公子等了星儿太久，这中间的苦真的道不尽也说不完，栽在星玥的坑里已经出不来了",
                    "create": "2017-06-25 15:53",
                    "pic": "http://i1.hdslb.com/bfs/archive/271dffdeddbaa0d54db3404fde3e69f902d06a1e.jpg",
                    "coins": 95,
                    "duration": "4:55",
                    "badgepay": false,
                    "pts": 37086
                }],
                "message": "",
                "ttl": 1
            }
        }
    },
    methods: {
        isHighlight(index) {
            return index > 2 ? '' : 'highlight'
        }
    },
    computed: {
    },
    mounted() {
    },
    filters: {
        playCountFilter(count) {
            if (count > 10000) {
                return Math.round(count / 1000) / 10 + 'W'
            } else {
                return count
            }
        },
        favoritesCountFilter(count) {
            if (count > 1000) {
                return Math.round(count / 100) / 10 + 'K'
            } else {
                return count
            }
        }
    }
}
</script>

<style scoped>
    .lazy-img {
        background: url(//s1.hdslb.com/bfs/static/phoenix/home/static/img/img_loading.a351656.png) 50% no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block
    }

    .lazy-img img {
        display: block;
        width: 100%;
        height: 100%
    }

    .zone-module .zone-rank {
        float: left;
        width: 300px;
        min-height: 360px
    }

    .sec-rank .rank-head .rank-tab {
        margin-left: 20px;
        float: left
    }

    .sec-rank .rank-list-wrap {
        width: 200%;
        overflow: hidden;
        zoom: 1;
        transition: all .2s linear
    }

    .sec-rank .rank-list-wrap .rank-list {
        width: 50%;
        float: left
    }

    .sec-rank .rank-list-wrap .rank-list .state {
        line-height: 100px
    }

    .sec-rank .rank-list-wrap.show-origin {
        margin-left: -100%
    }

    .rank-list .rank-item {
        position: relative;
        padding-left: 25px;
        margin-top: 20px;
        overflow: hidden
    }

    .rank-list .rank-item.first {
        margin-top: 0
    }

    .rank-list .rank-item .ri-num {
        position: absolute;
        color: #fff;
        height: 18px;
        line-height: 18px;
        top: 0;
        left: 0;
        font-size: 12px;
        min-width: 12px;
        text-align: center;
        background-color: #b8c0cc;
        border-radius: 4px;
        padding: 0 3px;
        font-weight: bolder;
        font-style: normal
    }

    .rank-list .rank-item.highlight .ri-num {
        background: #f25d8e
    }

    .rank-list .rank-item .ri-info-wrap {
        position: relative;
        display: block;
        cursor: pointer
    }

    .rank-list .rank-item .ri-info-wrap .w-later {
        right: 160px
    }

    .rank-list .rank-item .ri-info-wrap:hover .w-later {
        display: block
    }

    .rank-list .rank-item .ri-preview {
        margin-right: 5px;
        width: 80px;
        height: 50px;
        float: left;
        display: none;
        border-radius: 4px;
        overflow: hidden
    }

    .rank-list .rank-item.show-detail .ri-preview {
        display: block
    }

    .rank-list .rank-item .ri-detail {
        float: left
    }

    .rank-list .rank-item .ri-detail .ri-title {
        line-height: 18px;
        height: 18px;
        overflow: hidden;
        color: #222
    }

    .rank-list .rank-item .ri-detail .ri-point {
        line-height: 12px;
        color: #99a2aa;
        height: 12px;
        margin-top: 5px;
        display: none;
        overflow: hidden
    }

    .rank-list .rank-item.show-detail .ri-detail .ri-title {
        height: 36px;
        line-height: 18px;
        margin-top: -3px;
        width: 160px;
        padding: 0
    }

    .rank-list .rank-item.show-detail .ri-point {
        display: block
    }

    .rank-list .rank-item:hover .ri-title {
        color: #00a1d6
    }

    .sec-rank .more-link {
        display: block;
        height: 24px;
        line-height: 24px;
        background-color: #e5e9ef;
        text-align: center;
        border: 1px solid #e0e6ed;
        color: #222;
        border-radius: 4px;
        transition: .2s;
    }

    .sec-rank .rank-head h3 {
        float: left;
        font-size: 18px;
        font-weight: 400;
    }
</style>