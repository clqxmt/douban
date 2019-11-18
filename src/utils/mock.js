import Mock from "mockjs"
const url=require("url")

/**注册 */
// const user=Mock.mock({
//   "data":[
//     {
//       "id":1,
//       "username":"张三",
//       "password":"12345"
//     }
//   ]
// })





/**活动 */
const activityData=Mock.mock({
  "data":[
    {
      "id":1,
      "pic":"https://img9.doubanio.com/view/freyr_page_photo/raw/public/2286.jpg",
      "title":"#阅无止境，一鹿相伴第二季#",
      "subTitle":"传统艺术里的中国味道",
      "content":"来一起漫游艺术世界",
      "status":"已结束",
      "people":"@natural(50,5000)",

    },
    {
      "id":2,
      "pic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/2279.jpg",
      "title":"#阅无止境，一鹿相伴#",
      "subTitle":"遇见传统文化的美好",
      "content":"一起来感受传统文化的亲切和温度",
      "status":"已结束",
      "people":"@natural(50,5000)",
    },
    {
      "id":3,
      "pic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/2262.jpg",
      "title":"#这些书在购物车躺很久了#",
      "subTitle":"这些书在购物车躺很久了",
      "content":"晒出你的想买，豆瓣书店送你劵！",
      "status":"已结束",
      "people":"@natural(50,5000)",
    },
    {
      "id":4,
      "pic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/2178.jpg",
      "title":"#因为电影想去的地方#",
      "subTitle":"我的电影地图",
      "content":"你有没有因为电影而想去一些地方呢？",
      "status":"已结束",
      "people":"@natural(50,5000)",
    },
    {
      "id":5,
      "pic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/2002.jpg",
      "title":"#和云也退聊以色列#",
      "subTitle":"出发去寻找爱与自由",
      "content":"来向他提问，聊聊你想知道的的以色列吧",
      "status":"已结束",
      "people":"@natural(50,5000)",
    }
  ]
})


/**新书 */

const newbookData=Mock.mock({
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

/**书单 */
const topicData=Mock.mock({
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
      "borderColor":"#009f3d"
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
      "borderColor":"#009f3d"
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
      "borderColor":"#E76648"
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
      "borderColor":"#E76648"
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
      "borderColor":"#fff"
    },
  ]
})

/** 新书详细信息*/
const detail=Mock.mock({
  "data":[
    {
      "id":3,
      "bookName":"《你一生的故事》《呼吸》",
      "headerbgImg":"https://img9.doubanio.com/view/freyr_page_photo/raw/public/4976.jpg",
      "bookpic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/4969.jpg",
      "describe":[
        "特德·姜，当代最优秀的科幻作家之一。出道30年，仅17个短篇，却四获星云奖，四获雨果奖，三获轨迹奖，三获日本科幻大奖，此外还获得过英国科幻协会奖、斯特金奖、坎贝尔奖……",
        "融科幻的诗意和哲学的浪漫于一体，每一篇小说都是一个全新的世界。代表作《你一生的故事》（电影《降临》原著）从学习外星人的语言开始，基于费尔马时间最少定律，架构了一个别样的世界运行法则，轻声发出问询：如果注定失去，你会害怕拥有吗？",
        "《呼吸》《你一生的故事》，囊括特德·姜全部17篇作品，豆瓣书店独家首发，附送2枚定制版不锈钢迷你书签，限量500套，送完即止。现在下单，即可发货。",
      ],
      "beforePrice":84,
      "nowPrice":64,
      "color":"黑",
      "size":32,
      "isSale":true
    },
    {
      "id":1,
      "bookName":"萨拉戈萨手稿",
      "headerbgImg":"https://img9.doubanio.com/view/freyr_page_photo/raw/public/5006.jpg",
      "bookpic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4993.jpg",
      "describe":[
        "亲爱的阿方索，",
        "我们来到这里并非因为偶然……",
        "我们在等你。",
        "这是一部关于伪装、魔法、幻想，关于荣誉与怯懦、着魔与诱惑的书；这是一部故事中套着故事，堪比《十日谈》与《一千零一夜》的“奇书”；这也是一部被《纽约时报》《华盛顿邮报》一致称誉的“欧洲文学的杰作”。这部小说书写于两个多世纪前，却在三十年前才有了第一个完整定本，又在今年首次与中国读者见面。",
        "豆瓣书店现货发售中文版《萨拉戈萨手稿》，独家赠送定制版双面杯垫，限量1000个，送完即止。"
      ],
      "beforePrice":118,
      "nowPrice":89,
      "color":"黑白",
      "size":32,
      "isSale":false,
      "time":"11月18号"
    },
    {
      "id":2,
      "bookName":"宫本武藏全传",
      "headerbgImg":"https://img9.doubanio.com/view/freyr_page_photo/raw/public/4936.jpg",
      "bookpic":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/4939.jpg",
      "describe":[
        "宫本武藏，日本家喻户晓的传奇人物。日本战国时代末期至江户时代初期的剑术家、兵法家、艺术家。在日本人心中，宫本武藏是强者，是智者，是哲人，是武术家，是永远的胜者。",
        "结合吉川英治和小山胜清分别所著的《宫本武藏》，才能读懂真正的宫本武藏。",
        "豆瓣书店独家首发《宫本武藏全传》（全五册），描述一代“剑圣”宫本武藏的生命传奇，揭秘日本民族的心灵密码与文化精神，唤醒敏感、浮躁、柔弱的我们，找回人类所拥有的坚韧精神与真挚情感。",
        "独家附送精美纸质版屏风书签，限量600份，赠完即止。"
      ],
      "beforePrice":398,
      "nowPrice":279,
      "color":"黑",
      "size":32,
      "isSale":true
    },
    {
      "id":5,
      "bookName":"雅卡尔科学思维三部曲",
      "headerbgImg":"https://img1.doubanio.com/view/freyr_page_photo/raw/public/4877.jpg",
      "bookpic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4871.jpg",
      "describe":[
        "在分工越来越细化、认知越来越割裂的当下，科普书层出不穷，却很少有人告诉我们：如何融合这些知识，并建构一种具有根基性的思维方式？如何整体地理解人类生活的方方面面？ ",
        "法国著名遗传学家、社会活动家阿尔贝·雅卡尔提供了一种启发性的思路。本套书包含他七十岁之后写的三部著作《欺负人的经济》《睡莲的方程式》《给未出世的你》，呼唤人类用科学视角，重新审视当代社会。",
        "豆瓣书店现货发售“雅卡尔科学思维三部曲”，限量附送口袋书《各种主义》，带你了解科学概念的多个面向。独家赠品限量500份，赠完即止。"
      ],
      "beforePrice":84,
      "nowPrice":69,
      "color":"蓝 紫 绿",
      "size":32,
      "isSale":true
    },
    {
      "id":4,
      "bookName":"中村佑介的插画世界Ⅰ：蓝",
      "bookpic":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4912.jpg",
      "headerbgImg":"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4910.jpg",
      "describe":[
        "大热动画《春宵苦短，少女前进吧》《四叠半神话大系》角色原案、日本国民人气画师中村佑介，十年创作精选，第一本纪念画集中文版首度引进！",
        "《蓝》精选中村佑介大学时代以来截至2009年的各类插画，包括早期手绘稿、音乐专辑封面、畅销书封面、明信片及海报在内的多个品类作品，以流淌在记忆深处的蓝为主线，全方位展示了中村佑介的创作功力。",
        "豆瓣书店现货发售《中村佑介的插画世界Ⅰ：蓝》，在近二百幅作品中，感受中村佑介浪漫幻想与真实场景交叠的异想世界。现在下单，即可发货。"
      ],
      "beforePrice":199.8,
      "nowPrice":138,
      "color":"白",
      "size":10,
      "isSale":true
    }
  ]
})

/**处理请求 */


/**请求存储用户 */
Mock.mock(/\/user\/register/,"get",(options)=>{
  let {username,password}=JSON.parse(options.body);
  
  let obj={
    code:200,
    errMeg:"",
    data:{
      status:1,
      info:"注册成功"
    }
  }
  let userList=JSON.parse(localStorage.getItem("user"));
  if(!userList){
    userList=[]
  }
  userList.push({
    // "id":Mock.Random()
    "username":username,
    "password":password
  })
  // user.data.push({
  //   username:username,
  //   password:password
  // })
  console.log(userList,111);
  localStorage.setItem("user",JSON.stringify(userList));
  return obj;
})
/**查找用户表 */
// Mock.mock(/\/user\/findUser/,"get",()=>{
//   // let {username,password}=JSON.parse(options.body);
//   let obj={
//     code:200,
//     errMeg:"",
//     data:{
//       list:[],
//     }
//   }
//   for(var i=0;i<user.data.length;i++){
//     obj.data.list.push(user.data[i]);
//   }
//   return obj;
// })


/**活动 */
Mock.mock(/\/bookstore\/activity/,"get",()=>{
  var obj={
    code:200,
    errMeg:"",
    data:{
      list:[]
    }
  }
  for(var i=0;i<activityData.data.length;i++){
    
    obj.data.list.push(activityData.data[i]);
    
    
  }
  return obj;
})

/**新书 */
Mock.mock(/\/bookstore\/newbook/,"get",()=>{
  var obj={
    code:200,
    errMeg:"",
    data:{
      list:[]
    }
  }
  for(var i=0;i<newbookData.data.length;i++){
    
    obj.data.list.push(newbookData.data[i]);
    
  }
  return obj;
})

/**书单 */
Mock.mock(/\/bookstore\/topic/,"get",()=>{
  var obj={
    code:200,
    errMeg:"",
    data:{
      list:[]
    }
  }
  for(var i=0;i<topicData.data.length;i++){
    
    obj.data.list.push(topicData.data[i]);
    
  }
  return obj;
})

/**新书的详细信息 */
Mock.mock(/\/bookstore\/detail/, "get", (options)=>{
  // let {id}=url.parse(options.url,true).query;
  let {id}=JSON.parse(options.body);
  var obj={
    code:200,
    errMeg:"",
    data:{
      list:[]
    }
  }
  
  for(var i=0;i<detail.data.length;i++){
   
    if(detail.data[i].id===Number(id)){
        obj.data.list.push(detail.data[i]);
    }
    
  }
  return obj;
})