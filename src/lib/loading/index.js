import LoadingView from "./index.vue";
import Vue from "vue"

class JSLoading{
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
        this.loadingVm = new LoadingFn({
            el:document.createElement("div")
        });
        this.loadingMount();
    };
    loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    };
    destroyedLoading() {
        document.body.removeChild(this.loadingVm.$mount().$el)
    };
}

export default new JSLoading();