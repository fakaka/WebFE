import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Hello
        }

    ]
})
