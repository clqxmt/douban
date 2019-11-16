import Vue from "vue";
import Header from "./header";
import Top from "./top";
import BScroll from "./bscroll"

let componentMap = [
    Header,
    Top,
    BScroll
]

componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})