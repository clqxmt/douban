import http from "@utils/request"


/*
查找用户

*/
export const findApi=()=>http({
    method:"get",
    url:"/user",
    
})

/*
注册
*/

export const registerApi=(name,pwd)=>http({
    method:"post",
    url:"/user",
    data:{
        username:name,
        password:pwd
    }
})

export const removeApi=()=>http({
    method:"delete",
    url:"/user/4",
    
})

