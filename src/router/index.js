import Vue from 'vue'
import VueRouter from 'vue-router'
import bookstore from './bookstore'

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
