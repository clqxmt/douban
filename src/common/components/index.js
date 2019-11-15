
import Vue from "vue"
import Header from "./header";
import LinkApp from "./linkApp"
import Top from "./top"
import BScroll from "./bscroll"

let componentMap=[
    Header,
    LinkApp,
    Top,
    BScroll
]

componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})