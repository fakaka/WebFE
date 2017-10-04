import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Nav from '@/pages/nav'
import Bilibili from '@/pages/bilibili'
import Live from '@/pages/live'
import Music from '@/pages/music'
import News from '@/pages/news'
import Todo from '@/pages/todo'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/music',
            name: 'music',
            component: Music
        },
        {
            path: '/nav',
            name: 'nav',
            component: Nav
        },
        {
            path: '/bilibili',
            name: 'bilibili',
            component: Bilibili
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/live',
            name: 'live',
            component: Live
        },
        {
            path: '/todo',
            name: 'todo',
            component: Todo
        },
        
    ]
})
