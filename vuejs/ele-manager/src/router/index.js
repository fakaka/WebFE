import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login'
import Layout from '@/pages/Layout/layout'


// 管理模块
import Home from '@/pages/Home'
import User from '@/pages/user'
import Song from '@/pages/song'
import Blog from '@/pages/blog'
import Weibo from '@/pages/weibo'
import Todo from '@/pages/todo'
import Download from '@/pages/download'

// 开发
import Interface from '@/pages/interface'

// 设置
import Setting from '@/pages/setting'
import System from '@/pages/system'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/admin',
            component: Layout,
            children: [{
                path: '',
                component: Home
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/user',
                component: User
            },
            {
                path: '/song',
                component: Song
            },
            {
                path: '/blog',
                component: Blog
            },
            {
                path: '/weibo',
                component: Weibo
            },
            {
                path: '/todo',
                component: Todo
            },
            {
                path: '/download',
                component: Download
            },
            {
                path: '/interface',
                component: Interface
            },
            {
                path: '/setting',
                component: Setting
            },
            {
                path: '/system',
                component: System
            }
            ]
        }

    ]
})
