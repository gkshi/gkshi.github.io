import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Category from '@/components/Category'
import EntryPost from '@/components/EntryPost'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/:category',
            name: 'Category',
            component: Category
        },
        {
            path: '/post/:id',
            component: EntryPost
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0, y: 0
        }
        //if (to.hash) {
        //    return {
        //        selector: to.hash,
        //        offset: { x: 0, y: 0 }
        //    }
        //}
    }
})
