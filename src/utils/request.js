import axios from "axios"

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
=======

>>>>>>> 43315f135e2740ba6028db3c4fcfafaf34d718b7
    return config;
    //config.headers["content-type"]="application/json"
},(err)=>{
    return Promise.reject(err);
})

//响应的拦截
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
},(err)=>{
<<<<<<< HEAD
    return Promise.reject(err)
=======
    return Promise.reject(err);
>>>>>>> 43315f135e2740ba6028db3c4fcfafaf34d718b7
})

export default server