import Vue from "vue";
import Header from "./header";
<<<<<<< HEAD
import Top from "./top";

let componentMap = [
    Header,
    Top
]

=======

let componentMap = [
    Header
]



>>>>>>> 43315f135e2740ba6028db3c4fcfafaf34d718b7
componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})