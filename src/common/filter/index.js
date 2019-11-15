import Vue from "vue"

Vue.filter("toString",(string)=>{
    return string[0];
})

Vue.filter("toMoney",(string)=>{
    return string[0].replace("元","");
   
})

Vue.filter("toDate",(string)=>{
    return string.match(/\d+/g)[0];
})