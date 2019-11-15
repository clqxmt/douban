import LoadingView from "./index.vue"
import Vue from "vue"
class JSLoading {
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
        this.loadingVm = new LoadingFn({
            el:document.createElement("div")
        })
    }
    loadingMount(){
        document.appendChild(loadingVm.$mount().$el)
    }
    destroyLoading(){

    }
}

/**
 * vue.extend 实现继承
 * 
 */