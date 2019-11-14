import http from "@utils/request";


//虚拟页面
export const fakeApi = (count=18)=>http({
    method:"get",
    url:"/rexxar/api/v2/subject_collection/book_fiction/items",
    data:{
        count:count,
    }
});

//经典名著页面
export const famouseApi = (count=18)=>http({
    methos:"get",
    url:"/rexxar/api/v2/subject_collection/book_classic/items",
    data:{
        count:count,
    }
});

//新书速递页面
export const newApi = (count=18)=>http({
    methos:"get",
    url:"/rexxar/api/v2/subject_collection/book_latest/items",
    data:{
        count:count,
    }
});

//热门图书页面
export const hotApi = (count=18)=>http({
    methos:"get",
    url:"/rexxar/api/v2/subject_collection/book_hot/items",
    data:{
        count:count,
    }
});

//豆瓣短评板块
export const commentApi = ()=>http({
    methos:"get",
    url:"/api/freyr/short_comments/6166/",
    data:{
        start:0,
        limit:5
    }
});

//fake详情页
export const introduceApi = (detailId)=>http({
    methos:"get",
    url:"/rexxar/api/v2/book/"+detailId,
    data:{
        for_mobile:1
    }
});

export const shortApi = (ID,count=5)=>http({
    methos:"get",
    url:"/rexxar/api/v2/book/"+ID+"/forum_topics",
    data:{
        count:count,
    }
});