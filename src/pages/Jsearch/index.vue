<template>
  <div class="page">
    <div class="search_input">
      <img src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt />
      <input type="text" placeholder="搜索" v-model="value"/>
    </div>
    <div class="books_list">
      <div class="result">
        <img
          src="https://p0.meituan.net/128.180/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg"
          alt
        />
        <div class="info">
          <div class="book_name">
            <p class="name">少年的你</p>
            <span class="scroe">9.4分</span>
          </div>
          <div class="book_detail">
            <p class="writer">易烊千玺</p>
            <p class="data">2019.10.10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {SearchApi} from "@api/books"
export default {
    name:"Search",
    data(){
        return{
            value:""
        }
    },
    watch:{
        async value(newVal){
            let data = await SearchApi(newVal);
            console.log(data);
        }
    }
};
</script>

<style>
.search_input {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #f5f5f5;
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.search_input img {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  float: left;
  position: relative;
  top: 6px;
}
.search_input input {
  -webkit-box-flex: 1;
  flex: 1;
  border: none;
  font-size: 13px;
  color: #333;
  line-height: 20px;
  padding: 4px 0;
  width: calc(100% - 40px);
  background-color: #f5f5f5;
}
.books_list {
  margin-bottom: 0.083rem;
  width: 100%;
}
.books_list .result {
  padding: 12px 0;
  min-height: 90px;
  border-top: 1px solid #e6e6e6;
}
.books_list .result img {
  background-color: #eee;
  width: 64px;
  height: 90px;
  float: left;
  margin-right: 10px;
}
.books_list .result .info {
  margin-right: 15px;
  margin-top: 1px;
}
.books_list .result .info .book_name {
  font-size: 16px;
  color: #222;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 2px;
}
.books_list .result .info .book_name .name {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.books_list .result .info .book_name .scroe {
  color: #fa0;
  font-size: 10px;
  flex-shrink: 0;
  padding-left: 5px;
}
.books_list .result .info .book_detail {
  position: relative;
}
.books_list .result .info .book_detail .writer {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}
.books_list .result .info .book_detail .data {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}
</style>