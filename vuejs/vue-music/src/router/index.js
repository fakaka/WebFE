import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend'
// import Rank from '@/components/rank/rank'
import Singer from '@/components/singer/singer'
import SingerDetail from '@/components/singer-detail/singer-detail'
import Search from '@/components/search/search'
import Disc from '@/components/disc/disc'
import TopList from '@/components/top-list/top-list'
import UserCenter from '@/components/user-center/user-center'

Vue.use(Router)

// const Rank = (resolve) => {
//   import('@/components/rank/rank').then((module) => { resolve(module) })
// }

// AMD 风格
const Rank = resolve => require(['@/components/rank/rank.vue'], resolve)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend,
            children: [
                {
                    path: ':id',
                    component: Disc
                }
            ]
        },
        {
            path: '/singer',
            name: 'singer',
            component: Singer,
            children: [
                {
                    path: ':id',
                    component: SingerDetail
                }
            ]
        },
        {
            path: '/rank',
            name: 'rank',
            component: Rank,
            children: [
                {
                    path: ':id',
                    component: TopList
                }
            ]
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
            children: [
                {
                    path: ':id',
                    component: SingerDetail
                }
            ]
        },
        {
            path: '/user',
            name: 'user',
            component: UserCenter
        },

    ]
})
