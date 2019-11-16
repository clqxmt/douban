<template>
    <div class="comment">
      <img src="https://img3.doubanio.com/view/freyr_page_photo/raw/public/4910.jpg" />
      <div class="select">
        <div class="checked">
          <ul>
            <router-link tag="li" :to="'translate'">图书详情</router-link>
            <router-link tag="li" :to="'norms'">产品规格</router-link>
            <router-link tag="li" :to="'comment'">豆瓣短评</router-link>
          </ul>
        </div>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<script>
export default {
    name:"shot",

};
</script>

<style>
.comment{
  width: 100%;
  height: 100%;
}
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
  width: 0.55rem;
  font-size: 0.133rem;
  color: #9b9b9b;
}
</style>