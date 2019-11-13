import http from "@utils/request"

export const detailApi = (bookId)=>http({
    method:"get",
    url:"/rexxar/api/v2/book/"+bookId,
    data:{
        ck:"W_B4",
        for_mobile:1,
    }
})

/*


*/
export const bookComment=(bookId)=>http({
    method:"get",
    url:"/rexxar/api/v2/book/"+bookId+"/interests",
    data:{
        count:4,
        order_by:"hot",
        start:0,
        ck:"W_B4",
        for_mobile:1
    }
})