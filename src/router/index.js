import Vue from 'vue';
import VueRouter from 'vue-router';
import fake from "./fake"
import famouse from "./famouse";
import bookstore from './bookstore'
import top250 from './top250'
import nonfiction from './nonfiction'
import highscore from './highscore'
import film from './film'
import newbookDetail from "./newbookDetail"
import search from "./search"
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
        newbookDetail,
        
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
            
        },
        top250,
        nonfiction,
        highscore,
        film,
        search,
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
        },
        {
            path:"/cart",
            name:"cart",
            component:_=>import("@pages/cart"),
            meta:{
                flag:false
            }
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
