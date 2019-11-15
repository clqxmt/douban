import axios from "axios"
<<<<<<< HEAD
import loading from "@lib/loading/index.js"

=======
import loading from "../lib/loading/index.js"
>>>>>>> d928f49271589da664cd14dab17860c301509795
const server=axios.create({
    timeout:5000,
    //baseUrl:"",
    withCredentials:true
})


//请求拦截
server.interceptors.request.use((config)=>{
    if(config.method=="get"){
        config.params={...config.data};
    }
<<<<<<< HEAD
    loading.loadingMount();
=======
    loading.loadingMount()
>>>>>>> d928f49271589da664cd14dab17860c301509795

    return config;
    //config.headers["content-type"]="application/json"
},(err)=>{
    return Promise.reject(err);
})

//响应拦截
server.interceptors.response.use((res)=>{
    if(res.status==200){
<<<<<<< HEAD
        loading.loadingDestroy();
=======
        loading.destroyLoading()
>>>>>>> d928f49271589da664cd14dab17860c301509795
        return res.data;
        
    }
},(err)=>{

    return Promise.reject(err);

})

export default server