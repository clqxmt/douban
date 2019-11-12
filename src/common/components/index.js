import Vue from "vue"
import Header from "./header";
import LinkApp from "./linkApp"

let componentMap=[
    Header,
    LinkApp
]
    



componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})