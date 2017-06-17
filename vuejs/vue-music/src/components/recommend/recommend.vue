<template>
    <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
            <slider>
                <div v-for="item in recommends">
                    <a :href="item.linkUrl">
                        <img class="needsclick" :src="item.picUrl">
                    </a>
                </div>
            </slider>
        </div>
    </div>
</template>

<script>
import { getRecommend } from '../../api/recommend'
import Slider from '../../base/slider/slider'

export default {
    name: 'recommend',
    props: '',
    data() {
        return {
            recommends: []
        }
    },
    methods: {
        _getRecommend() {
            getRecommend().then(res => {
                if (res.code == 0) {
                    this.recommends = res.data.slider
                }
            })
        }
    },
    computed: {
    },
    mount() {

    },
    created() {
        this._getRecommend()
    },
    components: {
        Slider
    }
}
</script>

<style>

</style>