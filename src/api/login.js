import http from "@utils/request"


/*
查找用户

*/


// export const findUserApi=()=>http({
//     method:"get",
//     url:"/user/findUser"
// })

/*
注册
*/

export const registerApi=(name,pwd)=>http({
    method:"get",
    url:"/user/register",
    data:{
        username:name,
        password:pwd
    }
})


