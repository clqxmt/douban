import Vue from 'vue';
import VueRouter from 'vue-router';
import fake from "./fake"
import famouse from "./famouse";




import bookstore from './bookstore'


import top250 from './top250'
import nonfiction from './nonfiction'
import highscore from './highscore'
import film from './film'

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
            name:"book",
            component:_=>import("@pages/index"),
            meta:{
                flag:false
            }
        },
        {
            path:"/detail/:id",
            name:"detail",
            props:true,
            component:_=>import("@pages/detail"),
            meta:{
                flag:false
            }
        },
        bookstore,
        {
            path:"/buy",
            name:"buy",
            component:_=>import("@pages/buy"),
            meta:{
                flag:true
            }
        },
        {
            path:"/orderInfo",
            name:"orderInfo",
            component:_=>import("@pages/orderInfo"),
            meta:{
                flag:false
            }
        },
        {
            path:"/login",
            name:"login",
            component:_=>import("@pages/login"),
            meta:{
                flag:false
            },
            
        },
        top250,
        nonfiction,
        highscore,
        film,
        {
            path:"/jayceDetail/:id/:nm",
            name:"jayceDetail",
            component:_=>import("@pages/jayceDetail"),
            props:true
        },
        {
            path:"/HBDetail",
            name:"HBDetail",
            component:_=>import("@pages/HBDetail"),
            meta:{
                flag:false
            }
        },
        {
            path:"/DostoevskyDetail",
            name:"DostoevskyDetail",
            component:_=>import("@pages/DostoevskyDetail"),
            meta:{
                flag:false
            }
        }
    ]

})


router.beforeEach((to,from,next)=>{
    if(to.path!="/login" && to.meta.flag){
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}})
        }
    }else{
        next();
    }
})


export default router
