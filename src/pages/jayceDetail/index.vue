<template>
  <div class="page">
    <Header />
    <div>
      <div class="detail" :style="{background:'#'+detail.header_bg_color}"> 
        <div class="book_info">
          <div class="book_logo">
            <img :src="(detail.pic?detail.pic.normal:'')" alt />
          </div>
          <div class="introduce">
            <h2>{{detail.title}}</h2>
            <div class="rank"  v-if="detail.honor_infos!=undefined && detail.honor_infos.length>0">
              <span>No.{{detail.honor_infos[0].rank}}</span>
              <span>{{detail.honor_infos[0].title}}</span>
            </div>
            <p>{{detail.card_subtitle}}</p>
            <div class="choose">
              <span>
                <i></i>
                想读
              </span>
              <span>  
                <i></i>
                在读
              </span>
              <span>
                <i></i>
                读过
              </span>
            </div>
          </div>
        </div>
        <div class="score">
          <div class="score_title">
            <span>
              豆瓣评分
              <em>TM</em>
            </span>
            <a>打开App评分</a>
          </div>
          <div class="score_main">
            <h1>{{detail.rating?detail.rating.value:''}}</h1>
            <div class="stars">
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star_none"></span>
              <p>{{detail.rating?detail.rating.count:''}}人评分</p>
            </div>
          </div>
        </div>
        <div class="select">
          <div class="select1">
            <p>试读 / 购买</p>
            <span>30.40元起&gt;</span>
          </div>
          <div class="select1">
            <p>其他电商购买</p>
            <span>30.00元起&gt;</span>
          </div>
        </div>
      </div>
      <div class="introduction">
        <p>简介</p>
        <i>
          {{detail.intro}}
        </i>
        <div></div>
      </div>
      <div class="efefef">&nbsp;</div>
      <div class="comment">
        <div class="comment_title">
          <p>短评</p>
          <span>
            <img src="https://img3.doubanio.com/f/talion/91f6dc7f952282d95b905d0cde0b71b579cc81b8/pics/card/ic_compose_s.png" />打开App写短评
          </span>
        </div>
        <ul>
          <li v-for="(item,index) in commentList" :key="index">
            <div class="user_logo">
              <img :src="item.user.avatar" alt />
              <div class="username">{{item.user.name}}</div>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="star"></span>
              <span class="user_time">{{item.create_time}}</span>
            </div>
            <div class="user_comment">
              <p>{{item.comment}}</p>
              <div class="user_info">
                <img src="https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg" alt />
                <span>{{item.vote_count}}</span>
                <img src="https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg" alt />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {JdetailApi,JdetailCommentApi} from "@api/books"
export default {
  name: "jayceDetail",
  props: ["id", "nm"],
  data(){
      return{
          detail:"",
          commentList:[]
      }
  },
  async created(){
      let data = await JdetailApi(this.id);
      // console.log(data);
      this.detail = data;
      let CommentList = await JdetailCommentApi(this.id);
      this.commentList = CommentList.interests;
  }
};
</script>

<style>
.page>div:nth-of-type(2){
  padding-top: .417rem;
}
.detail {
  width: 100%;
  height: 3.317rem;
  background: rgb(106, 124, 127);
  padding: 0.167rem 0.125rem 0.125rem;
  box-sizing: border-box;
}
.detail .book_info .book_logo {
  width: 0.85rem;
  height: 1.183rem;
  float: left;
}
.detail .book_info .book_logo img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.detail .book_info .introduce {
  width: 1.917rem;
  height: 1.167rem;
  float: left;
  padding-left: 0.125rem;
  box-sizing: border-box;
}
.detail .book_info .introduce h2 {
  font-size: 0.2rem;
  font-weight: normal;
  color: #fff;
}
.detail .book_info .introduce .rank {
  margin-top: 0.083rem;
}
.detail .book_info .introduce .rank span:nth-of-type(1) {
  width: 0.4rem;
  height: 0.2rem;
  display: inline-block;
  background-color: #fef0b3;
  background: linear-gradient(#fff3e6, #fef0b3);
  box-sizing: border-box;
  padding-left: 9px;
  padding-right: 0.092rem;
  font-size: 0.108rem;
  line-height: 0.2rem;
  color: #9d5f00;
  border-radius: 3px 0 0 3px;
}
.detail .book_info .introduce .rank span:nth-of-type(2) {
  width: 1.25rem;
  height: 0.2rem;
  box-sizing: border-box;
  background: linear-gradient(45deg, #ffd395, #fec36e);
  display: inline-block;
  font-size: 0.108rem;
  line-height: 0.2rem;
  color: #9d5f00;
  padding: 0 0.083rem;
  border-radius: 0 3px 3px 0;
}
.detail .book_info .introduce p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.092rem;
  margin: 0.083rem 0 5px;
}
.detail .book_info .introduce .choose {
  width: 1.917rem;
  height: 0.25rem;
  margin-top: 0.083rem;
  display: flex;
  align-items: center;
}
.detail .book_info .introduce .choose span {
  width: 0.583rem;
  height: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  margin-right: 0.083rem;
  color: #191919;
  font-size: 13px;
}
.detail .book_info .introduce .choose span i {
  width: 0.117rem;
  height: 0.117rem;
  margin-right: 5px;
}
.detail .book_info .introduce .choose span:nth-of-type(1) i {
  background: url(https://img3.doubanio.com/f/talion/cf2ab22e9cbc28a2c43de53e39fce7fbc93131d1/pics/card/ic_mark_todo_s.png) no-repeat center;
  background-size: 0.117rem 0.117rem;
}
.detail .book_info .introduce .choose span:nth-of-type(2) i {
  background: url(https://img3.doubanio.com/f/talion/3157e2ea17ccc9d21ad3a0b9bd97a49116275219/pics/card/ic_mark_doing_s.png) no-repeat center;
  background-size: 0.117rem 0.117rem;
}
.detail .book_info .introduce .choose span:nth-of-type(3) i {
  background: url(https://img3.doubanio.com/f/talion/78fc5f5f93ba22451fd7ab36836006cb9cc476ea/pics/card/ic_mark_done_s.png) no-repeat center;
  background-size: 0.117rem 0.117rem;
}
.detail .book_info .introduce .choose span:nth-of-type(3) {
  margin-right: 0;
}

.score {
  width: 2.875rem;
  height: 0.842rem;
  background-color: rgba(0, 0, 0, 0.1);
  float: left;
  margin-top: 0.125rem;
  border-radius: 6px;
  padding: 0.083rem 0.125rem 0.108rem;
  box-sizing: border-box;
}
.score .score_title {
  width: 100%;
  height: 0.208rem;
}
.score .score_title span {
  font-size: 0.092rem;
  line-height: 0.183rem;
  color: #fff;
  position: relative;
}
.score .score_title span em {
  display: inline-block;
  font-size: 0.083rem;
  color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: -5px;
  font-style: normal;
  transform: scale(0.7);
}
.score .score_title a {
  width: 0.633rem;
  height: 0.208rem;
  border: 1px solid #f9f9f9;
  font-size: 0.083rem;
  color: #fff;
  border-radius: 4px;
  line-height: 1;
  padding: 6px 5px;
  box-sizing: border-box;
  float: right;
}
.score .score_main {
  width: 1.317rem;
  height: 0.417rem;
  float: left;
}
.score .score_main h1 {
  font-size: 0.3rem;
  color: #fff;
  font-weight: normal;
  line-height: 0.417rem;
  margin-right: 5px;
  float: left;
}
.score .score_main .stars {
  float: left;
  margin-top: 6px;
}
.star {
  width: 0.108rem;
  height: 0.108rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==) no-repeat center;
  background-size: contain;
  display: inline-block;
}
.star_none {
  width: 0.108rem;
  height: 0.108rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=) no-repeat center;
  background-size: contain;
  display: inline-block;
}
.score .score_main .stars p {
  font-size: 0.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1;
  margin-top: 5px;
}

.score .starandline {
  float: left;
  width: 1.292rem;
  height: 0.342rem;
}
.score .starandline .starline_5 {
  width: 100%;
  height: 0.068rem;
  text-align: right;
  float: left;
}
.score .starandline .starline_5 .star_5 {
  /* display: inline-block; */
  height: 7px;
  float: left;
}
.score .starandline .starline_5 .starline {
  width: 0.833rem;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  position: relative;
  z-index: 1;
  float: left;
}

.detail .select {
  width: 100%;
  height: 0.767rem;
  float: left;
  margin-top: 0.125rem;
}
.detail .select .select1 {
  width: 100%;
  height: 50%;
  color: #191919;
  font-size: 0.1rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0.108rem 0.125rem;
  box-sizing: border-box;
}
.detail .select .select1 p {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.125rem;
  color: #fff;
  margin-left: 5px;
}
.detail .select .select1 span {
  /* display: inline-block; */
  color: rgba(255, 255, 255, 0.7);
  vertical-align: middle;
  float: right;
  line-height: 0.183rem;
}

.introduction {
  width: 100%;
  /* height: 1.258rem; */
  padding: 0.125rem;
  font-size: 0.125rem;
  margin-bottom: 0.083rem;
  box-sizing: border-box;
}
.introduction p {
  color: #818181;
  margin-bottom: 0.125rem;
}
.introduction i {
  font-size: 0.125rem;
  color: #191919;
  font-style: normal;
  line-height: 0.183rem;
}
.introduction > div {
  width: 100%;
  height: 0.167rem;
}

.efefef {
  width: 100%;
  height: 0.083rem;
  background: #efefef;
  float: left;
}

.comment {
  width: 100%;
  min-height: 1.667rem;
  padding: 0.125rem 0.125rem 0;
  box-sizing: border-box;
}
.comment .comment_title {
  width: 100%;
  height: 0.167rem;
  font-size: 0.125rem;
  color: #818181;
  margin-bottom: 0.125rem;
}
.comment .comment_title p {
  float: left;
}
.comment .comment_title span {
  float: right;
  color: #c0c0c0;
  font-size: 0.108rem;
  line-height: 0.175rem;
  display: flex;
  align-items: center;
}
.comment .comment_title span img {
  width: 0.083rem;
  height: 0.1rem;
}
.comment ul {
  width: 100%;
}
.comment ul li {
  width: 100%;
  /* height: 1.133rem; */
  padding-top: 0.125rem;
}
.comment ul li .user_logo {
  width: 100%;
  height: 0.167rem;
}
.comment ul li .user_logo img {
  width: 0.167rem;
  height: 0.167rem;
  border-radius: 50%;
  margin-right: 0.083rem;
}
.comment ul li .user_logo .username {
  font-size: 0.125rem;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
.comment ul li .user_logo .user_time {
  font-size: 0.092rem;
  color: #c0c0c0;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: 2px;
  margin-left: 5px;
}
.comment ul li .user_comment {
  /* height: 0.917rem; */
  width: 2.75rem;
  margin-left: 0.25rem;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 5px;
}
.comment ul li .user_comment p {
  line-height: 0.175rem;
  color: #494949;
  white-space: pre-wrap;
  padding-right: 0.125rem;
  padding-top: 5px;
}
.comment ul li .user_comment .user_info {
  height: 0.183rem;
  margin-top: 0.083rem;
}
.comment ul li .user_comment .user_info img:nth-of-type(1) {
  width: 0.167rem;
  height: 0.167rem;
}
.comment ul li .user_comment .user_info span {
  color: #ccc;
}
.comment ul li .user_comment .user_info img:nth-of-type(2) {
  float: right;
  width: 0.167rem;
  height: 0.167rem;
  margin-right: 0.167rem;
}
</style>