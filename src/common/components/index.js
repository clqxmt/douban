import Vue from "vue";
import Header from "./header";
import Top from "./top";

let componentMap = [
    Header,
    Top
]

componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})