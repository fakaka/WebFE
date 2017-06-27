import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BilibiliRank from '@/components/bilibili-rank'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/hello'
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello
        },
        {
            path: '/bilibili',
            name: 'bilibili-rank',
            component: BilibiliRank
        }
    ]
})
