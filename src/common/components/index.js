
import Vue from "vue"
import Header from "./header";
import LinkApp from "./linkApp"
import Top from "./top"

let componentMap=[
    Header,
    LinkApp,
    Top
]

componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})