import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend'
import Rank from '@/components/rank/rank'
import Singer from '@/components/singer/singer'
import SingerDateil from '@/components/singer-detail/singer-detail'
import Search from '@/components/search/search'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        },
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
        {
            path: '/singer',
            name: 'singer',
            component: Singer,
            children: [
                {
                    path: ':id',
                    component: SingerDateil
                }
            ]
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },

    ]
})
