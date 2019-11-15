import LoadingView from "./index.vue"
import Vue from "vue"
<<<<<<< HEAD

class JSLoading{
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
        this.LoadingVm = new LoadingFn({
            el:document.createElement("div")
        })
    }
    loadingMount(){
        document.body.appendChild(this.LoadingVm.$mount().$el);
    }
    loadingDestroy(){
        //document.body.removeChild(this.loadingVm.$mount().$el);
        this.LoadingVm.$el.remove();
    }
}

export default new JSLoading()
=======
class JSLoading {
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
        this.loadingVm = new LoadingFn({
            el:document.createElement("div")
        })
        this.loadingMount();
    }
    loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    destroyLoading(){
        document.body.removeChild(this.loadingVm.$mount().$el)
    }
}

export default new JSLoading();
/**
 * vue.extend 实现继承
 * 
 */
>>>>>>> d928f49271589da664cd14dab17860c301509795
