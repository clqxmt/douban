import http from "@utils/request"


export const indexApi=()=>http({
    method:"get",
    
    url:"/rexxar/api/v2/book/modules",
    data:{
        for_mobile:1,
        
    }
})



