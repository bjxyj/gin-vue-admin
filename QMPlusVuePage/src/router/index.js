import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const baseRouters = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/view/login/login.vue')
    },
    {
        path: '/regist',
        name: 'regist',
        component: () =>
            import ('@/view/login/regist.vue')
    },
    {
        path: "/404",
        name: "404",
        component: () =>
            import ('@/view/error/index.vue')
    }
]

// 需要通过后台数据来生成的组件

const createRouter = () => new Router({
    routes: baseRouters
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}
export default router