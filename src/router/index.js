import Vue from 'vue';
import VueRouter from 'vue-router';
import fake from "./fake"
import famouse from "./famouse";

Vue.use(VueRouter)


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/fake" 
        },
        fake,
        famouse,
        {
            path:"/new",
            name:"new",
            component:_=>import("@pages/new")
        },
        {
            path:"/hot",
            name:"hot",
            component:_=>import("@pages/hot")
        },
        {
            path:"/shot",
            name:"shot",
            component:_=>import("@pages/shot")
        }
    ]
})

export default router
