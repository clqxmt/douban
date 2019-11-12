import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/book"
        },
        {
            path:"/book",
            component:_=>import("@pages/index")
        },
        {
            path:"/detail",
            component:_=>import("@pages/detail")
        }
    ]
})

export default router
