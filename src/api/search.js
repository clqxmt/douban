import http from "@utils/request"

export const searchApi=(query)=>http({
    method:"get",
    url:"/search",
    data:{
      query:query
    }
})