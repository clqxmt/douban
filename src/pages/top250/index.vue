<template>
  <div class="page">
    <Header />
    <div class="main">
      <Jayce-scroll ref="scroll">
        <div>
          <div class="main_title">图书 top250</div>
          <ul>
            <router-link tag="li" :to="'/jayceDetail/'+item.id+'/'+item.title" v-for="(item,index) in booksList" :key="index">
              <div class="book_logo">
                <img :src="item.cover.url" alt />
              </div>
              <div class="book_introduce">
                <h3>{{item.title}}</h3>
                <div class="stars">
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star_none"></span>
                  <span class="score">{{item.rating.value}}</span>
                </div>
                <p>{{item.info}}</p>
                <i>{{item.description}}</i>
              </div>
            </router-link>
          </ul>
        </div>
      </Jayce-scroll>
    </div>
  </div>
</template>

<script>
import { top250Api } from "@api/books";
export default {
  name: "Top250",
  data() {
    return {
      booksList: [],
      BId:0
    };
  },
  created() {
    this.handleGetBooksList(0);
  },
  methods:{
    async handleGetBooksList(bookId){
      let data = await top250Api(bookId);
      this.booksList = data.subject_collection_items;
    }
  },
  watch:{
    booksList(){
      this.$refs.scroll.handleRefreshDown();
    }
  },
  mounted(){
    this.$refs.scroll.handleScroll();
    // 下拉刷新
    this.$refs.scroll.handlepullingDown(()=>{
      this.BId +=5;
      this.handleGetBooksList(this.BId)
    });
    // 上拉加载更多
    // this.$refs.scroll.handlepullingUp(()=>{
    //   console.log(111);
    // })
  }
};
</script>

<style>
.main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.392rem 0.063rem 0;
}
.main .main_title {
  width: 3rem;
  font-size: 24px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6px;
  margin-top: 0.133rem;
  padding-left: 4%;
  color: #494949;
}
.main ul li {
  width: 100%;
  height: 1.575rem;
  border-bottom: 1px solid #ccc;
  padding: 0.167rem 4%;
  box-sizing: border-box;
}
.main ul li .book_logo {
  width: 0.833rem;
  height: 1.217rem;
  float: left;
  margin-right: 0.125rem;
}
.main ul li .book_logo img {
  width: 100%;
  height: 100%;
}
.main ul li .book_introduce {
  float: left;
  width: 1.8rem;
  height: 0.817rem;
}
.main ul li .book_introduce h3 {
  font-size: 17px;
  padding: 5px 0;
  color: #494949;
}
.main ul li .book_introduce .stars .score {
  font-size: 0.1rem;
  color: #9b9b9b;
}
.main ul li .book_introduce p {
  font-size: 0.1rem;
  padding-top: 5px;
  color: #9b9b9b;
}
.main ul li .book_introduce i {
  font-size: 0.1rem;
  color: #9b9b9b;
  margin-top: 14px;
  line-height: 18px;
  font-style: normal;
  display: inline-block;
}
.star {
  width: 0.083rem;
  height: 0.083rem;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==);
  background-size: contain;
}
.star_none {
  width: 0.083rem;
  height: 0.083rem;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=);
  background-size: contain;
}
</style>