<template>
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
        <div class="slide-img">
            <a :href="slides[curIndex].href">
                <transition name="slide-trans">
                    <img v-if="isShow" :src="slides[curIndex].src">
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="slides[curIndex].src">
                </transition>
            </a>
        </div>
        <h2>{{ slides[curIndex].title }}</h2>
        <ul class="slide-pages">
            <li @click="goto(prevIndex)">&lt;</li>
            <li v-for="(item, index) in slides" @click="goto(index)">
                {{index + 1}}
            </li>
            <li @click="goto(nextIndex)">&gt;</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        slides: {
            type: Array,
        },
        inv: {
            type: Number,
            default: 1500
        }
    },
    data() {
        return {
            name: 'mj',
            curIndex: 0,
            isShow: true
        }
    },
    methods: {
        goto(idx) {
            this.isShow = false
            setTimeout(() => {
                this.isShow = true
                this.curIndex = idx;
            }, 10)
        },
        runInv() {
            this.invId = setInterval(() => {
                this.goto(this.nextIndex)
            }, this.inv)
        },
        clearInv() {
            clearInterval(this.invId)
        }
    },
    computed: {
        prevIndex() {
            if (this.curIndex == 0)
                return this.slides.length - 1
            else
                return this.curIndex - 1
        },
        nextIndex() {
            return (this.curIndex + 1) % this.slides.length
        }
    },
    mounted() {
        this.runInv()
    }
}
</script>

<style scoped>
.slide-trans-enter-active {
    transition: all .5s;
}

.slide-trans-enter {
    transform: translateX(900px);
}

.slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
}

.slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
}

.slide-show h2 {
    position: absolute;
    width: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    text-align: left;
    padding-left: 15px;
}

.slide-img {
    width: 100%;
}

.slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
}

.slide-pages {
    position: absolute;
    bottom: 8px;
    right: 15px;
}

.slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
}

.slide-pages li .on {
    text-decoration: underline;
}
</style>