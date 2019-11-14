import Vue from 'vue'
import VueRouter from 'vue-router'
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
          redirect:"/top250"
      },
      top250,
      nonfiction,
      highscore,
      film,
      {
        path:"/detail/:id/:nm",
        component:_=>import("@pages/detail"),
        name:"Detail",
        props:true
      }
  ]
})

export default router
