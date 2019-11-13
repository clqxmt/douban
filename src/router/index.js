<<<<<<< HEAD
import Vue from 'vue';
import VueRouter from 'vue-router';
import fake from "./fake"
import famouse from "./famouse";

=======
import Vue from 'vue'
import VueRouter from 'vue-router'
import top250 from './top250'
import nonfiction from './nonfiction'
import highscore from './highscore'
import film from './film'
>>>>>>> 43315f135e2740ba6028db3c4fcfafaf34d718b7
Vue.use(VueRouter)


const router = new VueRouter({
<<<<<<< HEAD
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
=======
  mode:"hash",
  routes:[
      {
          path:"/",
          redirect:"/top250"
      },
      top250,
      nonfiction,
      highscore,
      film
  ]
>>>>>>> 43315f135e2740ba6028db3c4fcfafaf34d718b7
})

export default router
