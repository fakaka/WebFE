import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import NotFound from './components/notfound/notfound'

import './common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

let router = new VueRouter({
    mode: 'history',
    linkActiveClass:'active',
    routes: [
        {
            path: '/',
            redirect: '/goods'
        }, {
            path: '/goods',
            component: goods
        }, {
            path: '/ratings',
            component: ratings
        }, {
            path: '/seller',
            component: seller
        },
        {
            path:'*',
            component: NotFound
        }
    ]
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
