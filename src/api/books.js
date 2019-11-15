import http from "@utils/request"
// /rexxar/api/v2/subject_collection/book_score/items   ?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=0&_=0
// 高分书籍  接口

export const highscoreApi = (start = 0)=>http({
    method:"get",
    url:"/rexxar/api/v2/subject_collection/book_score/items",
    data:{
        for_mobile:1,
        start:start,
        count:9,
        loc_id:0,
        _:0
    }
})



// https://m.douban.com/rexxar/api/v2/subject_collection/book_top250/items    ?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=0&_=0
// top250  接口
export const top250Api = (start = 0)=>http({
    method:"get",
    url:"/rexxar/api/v2/subject_collection/book_top250/items",
    data:{
        for_mobile:1,
        start:start,
        count:5,
        loc_id:0,
        _:0
    }
})

// https://m.douban.com/rexxar/api/v2/subject_collection/book_film_original/items  ?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=0&_=0
// 影视原著

export const filmApi = (start = 0)=>http({
    method:"get",
    url:"/rexxar/api/v2/subject_collection/book_film_original/items",
    data:{
        for_mobile:1,
        start:start,
        count:5,
        loc_id:0,
        _:0
    }
})



// https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items  ?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=0&_=0
// 非虚构类

export const nonfictionApi = (start = 0)=>http({
    method:"get",
    url:"/rexxar/api/v2/subject_collection/book_nonfiction/items",
    data:{
        for_mobile:19,
        start:start,
        count:5,
        loc_id:0,
        _:0
    }
})


// 详情页的接口
// https://m.douban.com/rexxar/api/v2/book/ 34430051?ck=&for_mobile=1
// https://m.douban.com/rexxar/api/v2/book/'书籍ID'
export const JdetailApi = (id)=>http({
    method:"get",
    url:"/rexxar/api/v2/book/"+id,
    data:{
        for_mobile:1,
    }
})

// 详情页的评论接口
// https://m.douban.com/rexxar/api/v2/book/25862578/interests?count=4&order_by=hot&start=0&ck=&for_mobile=1
export const JdetailCommentApi = (id)=>http({
    method:"get",
    url:"/rexxar/api/v2/book/"+id+"/interests",
    data:{
        count:4,
        start:0,
        for_mobile:1
    }
})








// https://market.douban.com/api/freyr/short_comments/6051/?start=0&limit=5&sku_id=271856
// 哈利波特接口
export const HBApi = ()=>http({
    method:"get",
    url:"/api/freyr/short_comments/6051/",
    data:{
        start:0,
        limit:5,
        sku_id:271856
    }
})

// https://market.douban.com/api/freyr/short_comments/5953/?start=0&limit=5&sku_id=271825
// DostoevskyDetail陀思妥耶夫斯基
export const DostoevskyApi = ()=>http({
    method:"get",
    url:"/api/freyr/short_comments/5953/",
    data:{
        start:0,
        limit:5,
        sku_id:271825
    }
})
