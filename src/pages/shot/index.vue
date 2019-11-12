<template>
  <div>
    <div class="comment">
      <img src="https://img3.doubanio.com/view/freyr_page_photo/raw/public/4910.jpg" />
      <div class="select">
        <div class="checked">
          <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Translate from "@components/translate";
export default {
    name:"shot",
    data(){
        return{
            list:["图书详情","产品规格","豆瓣短评"]
        }
    }
};
</script>

<style>
.comment > img {
  width: 100%;
  height: 2.333rem;
  vertical-align: top;
}
.checked {
  width: 100%;
  height: 0.467rem;
  border-bottom: 1px solid #ccc;
}
.checked ul {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.checked ul li {
  float: left;
  width: 0.55rem;
  font-size: 0.133rem;
  color: #9b9b9b;
}
</style>