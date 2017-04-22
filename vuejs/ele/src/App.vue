<template>
    <div>
        <v-header></v-header>
        <div class="tab">
            <div class="tab-item">
                <router-link :to="{path:'/goods'}" tag="a">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{path:'/ratings'}" tag="a">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{path:'/seller'}">商家</router-link>
            </div>
        </div>
        <div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import VHeader from './components/header/header'

export default {
    name: 'app',
    components: {
        VHeader
    },
    data() {
        return {
            path: '/goods'
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>