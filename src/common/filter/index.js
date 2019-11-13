import Vue from "vue"

Vue.filter("toString",(string)=>{
    return string[0];
})