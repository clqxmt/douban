const MockJS =require("mockjs")
// const url = require("url")
const data=MockJS.mock({
  "data":[
    {
      "id":1,
      "pic":"https://img9.doubanio.com/view/freyr_page_photo/raw/public/2286.jpg",
      "title":"#阅无止境，一鹿相伴第二季#",
      "subTitle":"传统艺术里的中国味道",
      "content":"来一起漫游艺术世界",
      "statue":"已结束",
      "people":"@natural(50,5000)",

    },
    {
      "id":2,
      "pic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/2279.jpg",
      "title":"#阅无止境，一鹿相伴#",
      "subTitle":"遇见传统文化的美好",
      "content":"一起来感受传统文化的亲切和温度",
      "statue":"已结束",
      "people":"@natural(50,5000)",
    },
    {
      "id":3,
      "pic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/2178.jpg",
      "title":"#因为电影想去的地方#",
      "subTitle":"我的电影地图",
      "content":"你有没有因为电影而想去一些地方呢？",
      "statue":"已结束",
      "people":"@natural(50,5000)",
    },
    {
      "id":4,
      "pic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/2178.jpg",
      "title":"#因为电影想去的地方#",
      "subTitle":"我的电影地图",
      "content":"你有没有因为电影而想去一些地方呢？",
      "statue":"已结束",
      "people":"@natural(50,5000)",
    },
    {
      "id":5,
      "pic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/2002.jpg",
      "title":"#和云也退聊以色列#",
      "subTitle":"出发去寻找爱与自由",
      "content":"来向他提问，聊聊你想知道的的以色列吧",
      "statue":"已结束",
      "people":"@natural(50,5000)",
    }
  ]
})
MockJS.mock(/\/boostore\/activity/,"get",(options)=>{
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