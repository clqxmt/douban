import Vue from 'vue';
import VueRouter from 'vue-router';
import fake from "./fake"
import famouse from "./famouse";
import bookstore from './bookstore'
import top250 from './top250'
import nonfiction from './nonfiction'
import highscore from './highscore'
import film from './film'

import tokenUtils from "@utils/token"

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
                flag:false,
                checkToken:true
            }
        },
        {
            path:"/detail/:id",
            name:"detail",
            props:true,
            component:_=>import("@pages/detail"),
            meta:{
                flag:false,
                checkToken:true
            }
        },
        bookstore,
        {
            path:"/buy",
            props:true,
            name:"buy",
            component:_=>import("@pages/buy"),
            meta:{
                flag:true,
                checkToken:true
            }
        },
        {
            path:"/orderInfo",
            name:"orderInfo",
            component:_=>import("@pages/orderInfo"),
            meta:{
                flag:true,
                checkToken:true
            }
        },
        {
            path:"/login",
            name:"login",
            component:_=>import("@pages/login"),
            meta:{
                flag:false,
                checkToken:true
            },
            
        }
    ]

})


router.beforeEach((to,from,next)=>{
    let token=localStorage.getItem("token");
    if(to.path!="/login" && to.meta.flag && !token){
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
