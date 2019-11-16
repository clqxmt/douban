const MockJS =require("mockjs")
// const url = require("url")
const data=MockJS.mock({
  "data":[
    {
      "id":1,
      "bgpic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4973.jpg",
      "bookpic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/4969.jpg",
      "bookName":"《你一生的故事》《呼吸》",
      "describe":"《降临》原著小说作者特德·姜作品集",
      "price":64
    },
    {
      "id":2,
      "bgpic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/5004.jpg",
      "bookpic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4993.jpg",
      "bookName":"萨拉戈萨手稿",
      "describe":"比肩《一千零一夜》《十日谈》的史诗巨著",
      "price":89
    },
    {
      "id":3,
      "bgpic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/4938.jpg",
      "bookpic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/4939.jpg",
      "bookName":"宫本武藏全传",
      "describe":" “剑圣” 宫本武藏完整版的不朽传奇",
      "price":279
    },
    {
      "id":4,
      "bgpic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4870.jpg",
      "bookpic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4871.jpg",
      "bookName":"雅卡尔科学思维三部曲",
      "describe":"大数据推送喂养的时代，听点儿不顺耳的",
      "price":69
    },
    {
      "id":5,
      "bgpic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/4908.jpg",
      "bookpic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4912.jpg",
      "bookName":"中村佑介的插画世界Ⅰ：蓝",
      "describe":"徜徉在中村佑介的画册中，仿佛沉浸在恋爱的魔法中",
      "price":138
    },
    
  ]
})
MockJS.mock(/\/boostore\/newbook/,"get",(options)=>{
  var obj={
    code:200,
    errMeg:"",
    data:{
      list:[]
    }
  }
  for(var i=0;i<data.data.length;i++){
    
    obj.data.list.push(data.data[i]);
    
  }
  return obj;
})