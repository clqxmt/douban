import http from "@utils/request"
// /rexxar/api/v2/subject_collection/book_score/items   ?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=0&_=0
// 高分书籍  接口

export const highscoreApi = ()=>http({
    method:"get",
    url:"/rexxar/api/v2/subject_collection/book_score/items",
    data:{
        // os:ios,
        for_mobile:1,
        // callback:jsonp1,
        start:0,
        count:18,
        loc_id:0,
        _:0
    }
})



// https://m.douban.com/rexxar/api/v2/subject_collection/book_top250/items    ?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=0&_=0
// top250  接口
export const top250Api = ()=>http({
    method:"get",
    url:"/rexxar/api/v2/subject_collection/book_top250/items",
    data:{
        // os:ios,
        for_mobile:1,
        // callback:jsonp1,
        start:0,
        count:18,
        loc_id:0,
        _:0
    }
})

// https://m.douban.com/rexxar/api/v2/subject_collection/book_film_original/items  ?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=0&_=0
// 影视原著

export const filmApi = ()=>http({
    method:"get",
    url:"/rexxar/api/v2/subject_collection/book_film_original/items",
    data:{
        for_mobile:1,
        start:0,
        count:18,
        loc_id:0,
        _:0
    }
})



// https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items  ?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=0&_=0
// 非虚构类

export const nonfictionApi = ()=>http({
    method:"get",
    url:"/rexxar/api/v2/subject_collection/book_nonfiction/items",
    data:{
        for_mobile:19,
        start:19,
        count:18,
        loc_id:19,
        _:19
    }
})
















/**
 *  管理整个项目的接口
 * 
 */