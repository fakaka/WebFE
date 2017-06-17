import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend'
import Rank from '@/components/rank/rank'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/rank',
            name: 'rank',
            component: Rank
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend
        },
        
    ]
})