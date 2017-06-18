<template>
    <div class="singer" ref="singer">
        <list-view :listData="singers" @select="selectSinger" ref="list"></list-view>
        <router-view></router-view>
    </div>
</template>

<script>
import { getSingerList } from '../../api/singer'
import Singer from '../../common/js/singer'
import ListView from '../../base/listview/listview'

export default {
    name: 'singer',
    props: {},
    data() {
        return {
            singers: []
        }
    },
    methods: {
        _getSingerList() {
            getSingerList().then(res => {
                if (res.code == 0)
                    this.singers = this.formatData(res.data.list)
            })
        },
        formatData(list) {
            let map = {
                hot: {
                    title: '热门',
                    items: []
                }
            }
            list.forEach(function (item, index) {
                if (index < 10) {
                    map.hot.items.push(new Singer({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
                    }))
                }

                let key = item.Findex
                if (map[key]) {
                    map[key].items.push(new Singer({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
                    }))
                } else {
                    map[key] = {
                        title: key,
                        items: []
                    }
                }
            }, this)
            // 排序
            let ret = []
            let hot = []
            for (let key in map) {
                let val = map[key]
                if (val.title.match(/[a-zA-Z]/)) {
                    ret.push(val)
                } else if (val.title === '热门') {
                    hot.push(val)
                }
            }
            ret.sort((a, b) => {
                return a.title.charCodeAt(0) - b.title.charCodeAt(0)
            })
            return hot.concat(ret)
        },
        selectSinger(singer) {
            console.log('selectSinger')
            this.$router.push({
                path: `/singer/${singer.id}`
            })
        }
    },
    computed: {
    },
    mount() {
    },
    created() {
        this._getSingerList()
    },
    components: {
        ListView
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>