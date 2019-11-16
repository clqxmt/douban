const MockJS =require("mockjs")
// const url = require("url")
const data=MockJS.mock({
  "data":[
    {
      "id":1,
      "title":"7本色彩之书，给你点颜色看看",
      "describe":"色彩背后的故事",
      "bookpic":[
        "https://img1.doubanio.com/view/subject/l/public/s29358967.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s29743652.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s32278344.jpg"
      ],
      "status":"新",
    },
    {
      "id":2,
      "title":"给平淡的生活加点刺激，这些悬疑推理小说值得一读",
      "describe":"读到停不下来的小说",
      "bookpic":[
        "https://img3.doubanio.com/view/subject/l/public/s29179365.jpg",
        "https://img9.doubanio.com/view/subject/l/public/s33442256.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s29802973.jpg"
      ],
      "status":"新",
    },
    {
      "id":3,
      "title":"这7本书想和你聊聊，那只叫抑郁症的黑狗",
      "describe":"正确理解和渡过抑郁症，为了身边的人，也为了自己。",
      "bookpic":[
        "https://img3.doubanio.com/view/subject/l/public/s29636724.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s33465011.jpg",
        "https://img1.doubanio.com/view/subject/l/public/s27327209.jpg"
      ],
      "status":"热",
    },
    {
      "id":4,
      "title":"2019诺贝尔文学奖双黄蛋揭晓前，回顾历届获奖作家的时代佳作",
      "describe":"下一年是哪一位?",
      "bookpic":[
        "https://img3.doubanio.com/view/subject/l/public/s29738720.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s27913134.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s28397415.jpg"
      ],
      "status":"热",
    },
    {
      "id":5,
      "title":"身体管理进阶指南，这里有7本健身经典书籍",
      "describe":"坚持下去才是最好的方法",
      "bookpic":[
        "https://img1.doubanio.com/view/subject/l/public/s28779027.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s29024852.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s27248971.jpg"
      ],
      "status":"",
    },
  ]
})


MockJS.mock(/\/boostore\/topic/,"get",(options)=>{
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