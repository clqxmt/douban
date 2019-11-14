import Vue from 'vue';
import VueRouter from 'vue-router';
import fake from "./fake"
import famouse from "./famouse";
import shot from "./shot";

Vue.use(VueRouter)


const router = new VueRouter({
    mode:"hash",
    routes:[
        fake,
        famouse,
        shot,

        {
            path:"/",
            redirect:"/fake" 
        },
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
            path:"/detail/:id/:title",
            component:_=>import("@pages/detail"),
            name:"detail",
            props:true
        },
        {
            path:"/famouseDetail/:id/:title",
            component:_=>import("@pages/famouseDetail"),
            name:"famouseDetail",
            props:true,
        },
        // {
        //     path:"/buy/:id/:title",
        //     component:_=>import("@pages/buy"),
        //     name:"buy",
        //     props
        // }
    ]
})

export default router
