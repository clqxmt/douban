<template>
  <div class="centre">
      <Header/>
    <div class="container">
        <Top/>
      <div class="subject" :style="{background:'#'+detail.header_bg_color}">
        <div class="first">
          <img :src="detail.pic.normal"/>
          <div class="introduce">
            <h2>{{detail.title}}</h2>
            <p>{{detail.press[0]}} / {{detail.pubdate[0]}}出版</p>
            <ul>
              <li>
                <i class="iconfont icon-icon-test"></i>
                <span>想读</span>
              </li>
              <li>
                <i class="iconfont icon-yuandian"></i>
                <span>在读</span>
              </li>
              <li>
                <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
                <span>读过</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="second">
          <p>豆瓣评分™</p>
          <span>{{detail.rating.value}}</span>
          <div>
            <span>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
              <i class="iconfont icon-star"></i>
            </span>
            <p>{{detail.rating.count}}人评分</p>
          </div>
        </div>
        <div class="three">
          <div class="try">
            <span>试读/购买</span>
            <span>38.40元起&gt;</span>
          </div>
          <div class="other">
            <span>其他电商购买</span>
            <span>24.90元起&gt;</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 评论部分  -->
    <div class="discuss">
      <div class="discuss-root">
        <p>讨论</p>
        <ul>
          <li v-for="(item,index) in comment" :key="index">
            <h3>{{comment[index].title}}</h3>
            <span>{{comment[index].create_time}}</span>
             <span>{{comment[index].create_time}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { introduceApi } from "@api/fake";
import { shortApi } from "@api/fake";
export default {
    name:"Detail",
    props:["id","title"],
    data(){
        return {
            detail:[],
            comment:[]
        }
    },
    async created(){
        let data = await introduceApi(this.id);
        this.detail = data;

        let comment = await shortApi(this.id);
        this.comment = comment.forum_topics;
    },
};
</script>
<style>
.centre {
  width: 100%;
  height: 100%;
}
/* 书籍介绍部分 */
.container {
  width: 100%;
  height: 3.833rem;
  padding-top: .417rem;
}
.subject {
  box-sizing: border-box;
  width: 100%;
  height: 3.333rem;
  color: #191919;
  font-size: 12px;
  padding: 0.167rem 0.117rem 0.117rem 0.133rem;
  background-color: rgb(242, 238, 234);
}
.first {
  width: 2.875rem;
  height: 1.317rem;
}
.first > img {
  width: 0.85rem;
  height: 1.183rem;
}
.introduce {
  width: 1.917rem;
  height: 1.167rem;
  float: right;
}
.introduce h2 {
  font-size: 0.192rem;
  color: #fff;
  font-weight: normal;
  margin-bottom: 0.1rem;
}
.introduce a {
  width: 1.917rem;
  height: 0.2rem;
  display: block;
}
.introduce a span:nth-of-type(1) {
  box-sizing: border-box;
  width: 0.4rem;
  height: 0.2rem;
  display: inline-block;
  background: linear-gradient(#fff3e6, #fef0b3);
  padding-left: 0.07rem;
  padding-right: 0.11rem;
  border-top-left-radius: 0.03rem;
  border-bottom-left-radius: 0.03rem;
  line-height: 0.2rem;
  float: left;
  color: #9d5f00;
  font-size: 0.108rem;
}
.introduce a span:nth-of-type(2) {
  width: 1.142rem;
  display: inline-block;
  height: 0.2rem;
  background: linear-gradient(45deg, #ffd395, #fec36e);
  line-height: 0.2rem;
  padding: 0 0.083rem;
  box-sizing: border-box;
  float: left;
  line-height: 0.2rem;
  color: #9d5f00;
  font-size: 0.108rem;
}
.introduce > p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0.067rem 0;
}
.introduce ul li {
  float: left;
  width: 0.583rem;
  height: 0.25rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 0.033rem;
  margin-right: 0.083rem;
  color: #191919;
  font-size: 0.108rem;
  text-align: center;
  justify-content: center;
  margin-top: 0.033rem;
}
.introduce ul li:nth-of-type(3) {
  margin-right: 0;
}
.introduce ul li i {
  color: #fec36e;
  margin-right: 4px;
}
.second {
  background-color: rgba(0, 0, 0, 0.1);
  width: 2.875rem;
  height: 0.858rem;
  padding: 0.133rem;
  box-sizing: border-box;
  margin-bottom: 0.133rem;
}
.second > p {
  color: #fff;
  font-size: 0.1rem;
  margin-bottom: 0.083rem;
}
.second > span {
  font-size: 0.283rem;
  color: #fff;
  float: left;
  margin-right: 0.05rem;
}
.second > div > span i {
  color: goldenrod;
}
.second > div {
  display: inline-block;
  margin-top: 0.067rem;
}
.second > div > span i:nth-of-type(5) {
  color: #999;
}
.second > div > p {
  color: #ccc;
  padding-left: 0.042rem;
}
.try,
.other {
  width: 2.875rem;
  height: 0.383rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.04rem;
  display: flex;
  box-sizing: border-box;
  padding: 0.15rem 0.167rem;
  justify-content: space-between;
  color: #fff;
  font-size: 0.125rem;
}
.try span:nth-of-type(2),
.other span:nth-of-type(2) {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.1rem;
}

/* 评论部分 */
.discuss {
  width: 100%;
  box-sizing: border-box;
  padding-top: 0.133rem;
  padding-left: 0.133rem;
}
.discuss-root {
  width: 100%;
  height: 100%;
}
.discuss-root p {
  width: 100%;
  height: 0.167rem;
  color: #818181;
  margin-bottom: 0.133rem;
}
.discuss-root ul li {
  width: 100%;
  min-height: 0.5rem;
  box-sizing: border-box;
  border-bottom: 0.008rem solid #efefef;
  box-sizing: border-box;
  padding-top: 0.15rem;
  padding-bottom: 0.117rem;
}
.discuss-root ul li:nth-of-type(1) {
  padding-top: 0;
}
.discuss-root ul li h3 {
  font-size: 0.125rem;
  color: #494949;
  font-weight: normal;
}
.discuss-root ul li span {
  font-size: 0.117rem;
  color: #818181;
  margin-top: 0.067rem;
}
.discuss-root ul li span:nth-of-type(2){
    float: right;
    margin-right: .167rem;
}
</style>