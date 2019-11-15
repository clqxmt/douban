import http from "@utils/request"

export const cityApi=()=>http({
    /*method:"get",
    url:"/api/zoning",
    data:{
        oid:4793428488,
        act_type:"list",
        utm_campaign:"douban_book_subject_buy_btn",
        sku_id:271469,
        utm_mediu:"mobile_web",
        utm_source:"douban",
        mainland_only:false
    }*/
    method:"get",
    url:"/data",
    data:{
        id:104,
        key:"Ub2TIRgGYSDSD",
        ske:1
    }
   

    
})