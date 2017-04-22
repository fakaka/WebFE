<template>
    <transition name="move">
        <div v-show="showFlag" class="food" ref="food">
            <div class="food-content">
                <div class="image-header">
                    <img :src="food.image" alt="">
                    <div class="back" @click="hide">
                        <i class="icon-arrow_lift"></i>
                    </div>
                </div>
                <div class="content">
                    <h1 class="title">{{ food.name }}</h1>
                    <div class="detail">
                        <span class="sell-count">月售{{ food.sellCount }} 份</span>
                        <span class="rating">好评率{{ food.rating }}%</span>
                    </div>
                    <div class="price">
                        <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                        <cart-control :food="food"></cart-control>
                    </div>
                    <transition name="fade">
                        <div class="buy" v-show="!food.count||food.count==0" @click="addFirst">加入购物车</div>
                    </transition>
                </div>
                <split v-show="food.info"></split>
                <div class="info" v-show="food.info">
                    <h1 class="title">商品信息</h1>
                    <p class="text">{{food.info}}</p>
                </div>
                <split v-show="food.info"></split>
                <div class="rating">
                    <h1 class="title">商品评价</h1>
                    <rating-select :selectType="selectType" 
                                   :onlyContent="onlyContent" 
                                   :desc="desc"
                                   :ratings="food.ratings"
                                   @select="selectRating"
                                   @toggle="toggleContent">
                    </rating-select>
                    <div class="rating-wrapper">
                        <ul v-show="food.ratings && food.ratings.length">
                            <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in food.ratings" class="rating-item border-1px">
                                <div class="user">
                                    <span class="name">{{rating.username}}</span>
                                    <img class="avatar" width="12" height="12" :src="rating.avatar">
                                </div>
                                <div class="time">{{rating.rateTime | formatDate}}</div>
                                <p class="text">
                                    <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
                                </p>
                            </li>
                        </ul>
                        <div v-show="!food.ratings || food.ratings.length === 0" class="no-rating">暂无评价</div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Vue from 'vue';
import BScroll from 'better-scroll'
import CartControl from '../cartcontrol/cartcontrol'
import Split from '../split/split'
import RatingSelect from '../ratingselect/ratingselect'
import {formatDate} from '../../common/js/date';

export default {
    name:'food',
    components:{
        CartControl,Split,RatingSelect
    },
    props:{
        food:{
            type: Object,
            default: {
                "name": "皮蛋瘦肉粥",
                "price": 10,
                "oldPrice": "12",
                "description": "咸粥",
                "sellCount": 229,
                "rating": 100,
                "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                "ratings": [
                    {
                        "username": "3******c",
                        "rateTime": 1469281964000,
                        "rateType": 0,
                        "text": "很喜欢的粥",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        "username": "2******3",
                        "rateTime": 1469271264000,
                        "rateType": 0,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    },
                    {
                        "username": "3******b",
                        "rateTime": 1469261964000,
                        "rateType": 1,
                        "text": "",
                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                    }
                ],
                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }
        }
    },
    data(){
        return {
            showFlag: false ,
            selectType: 2,//AlL
            onlyContent: true,
            desc: {
                all: '全部',
                positive: '推荐',
                negative: '吐槽'
            }
        }
    },
    methods:{
        show(){
            this.showFlag = true
            this.$nextTick(()=> {
                if(!this.scroll){
                    this.scroll = new BScroll(this.$refs.food,{
                        click:true
                    })
                }else{
                    this.scroll.refresh()
                }
            })
        },
        hide(){ 
            this.showFlag = false
        },
        addFirst(){
            console.log('add')
            if (!event._constructed) 
                return
            this.$emit('add', event.target)
            Vue.set(this.food, 'count', 1)
        },
        selectRating(type){
            this.selectType = type
            this.$nextTick(() => {
                this.scroll.refresh()
            })
        },
        toggleContent() {
            this.onlyContent = !this.onlyContent
            this.$nextTick(() => {
                this.scroll.refresh()
            })
        },
        needShow(type,text){
            if (this.onlyContent && !text) {
                return false
            }
            if (this.selectType === 2) {//ALL
                return true
            } else {
                return type === this.selectType
            }
        }
    },
    filters:{
        formatDate(time) {
            return formatDate(new Date(time),'yyyy-MM-dd hh:mm')
        }
    }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff

    .content
      position: relative
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        line-height: 10px
        height: 10px
        font-size: 0
        .sell-count, .rating
          font-size: 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
      .cartcontrol-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10
        height: 24px
        line-height: 24px
        padding: 0 12px
        box-sizing: border-box
        border-radius: 12px
        font-size: 10px
        color: #fff
        background: rgb(0, 160, 220)
        opacity: 1
        &.fade-enter-active, &.fade-leave-active
          transition: all 0.2s
        &.fade-enter, &.fade-leave-active
          opacity: 0
          z-index: -1
    .info
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 6px
        font-size: 14px
        color: rgb(7, 17, 27)
      .text
        line-height: 24px
        padding: 0 8px
        font-size: 12px
        color: rgb(77, 85, 93)
    .rating
      padding-top: 18px
      .title
        line-height: 14px
        margin-left: 18px
        font-size: 14px
        color: rgb(7, 17, 27)
      .rating-wrapper
        padding: 0 18px
        .rating-item
          position: relative
          padding: 16px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .user
            position: absolute
            right: 0
            top: 16px
            line-height: 12px
            font-size: 0
            .name
              display: inline-block
              margin-right: 6px
              vertical-align: top
              font-size: 10px
              color: rgb(147, 153, 159)
            .avatar
              border-radius: 50%
          .time
            margin-bottom: 6px
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
          .text
            line-height: 16px
            font-size: 12px
            color: rgb(7, 17, 27)
            .icon-thumb_up, .icon-thumb_down
              margin-right: 4px
              line-height: 16px
              font-size: 12px
            .icon-thumb_up
              color: rgb(0, 160, 220)
            .icon-thumb_down
              color: rgb(147, 153, 159)

        .no-rating
          padding: 16px 0
          font-size: 12px
          color: rgb(147, 153, 159)
</style>