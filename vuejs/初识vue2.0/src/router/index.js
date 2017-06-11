import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Detail from '../pages/detail'
import OrderList from '../pages/orderList'

import DetailAnaPage from '../pages/detail/analysis'
import DetailCouPage from '../pages/detail/count'
import DetailForPage from '../pages/detail/forecast'
import DetailPubPage from '../pages/detail/publish'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    }, {
        path: '/detail',
        name: 'detail',
        component: Detail,
        redirect: '/detail/analysis',
        children: [{
            path: 'analysis',
            component: DetailAnaPage
        },
        {
            path: 'count',
            component: DetailCouPage
        },
        {
            path: 'forecast',
            component: DetailForPage
        },
        {
            path: 'publish',
            component: DetailPubPage
        }
        ]
    }, {
        name: 'orderList',
        path: '/orderList',
        component: OrderList
    }]
})
