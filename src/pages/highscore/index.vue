<template>
  <div class="page">
    <Header />
    <!-- https://m.douban.com/rexxar/api/v2/subject_collection/book_score/items?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=0&_=0 -->
    <div class="main">
      <Jayce-scroll ref="scroll">
        <div>
          <div class="main_title">高分图书</div>
          <ul>
            <router-link tag="li" :to="'/jayceDetail/'+item.id+'/'+item.title"  v-for="(item,index) in booksList" :key="index">
              <div class="books_logo">
                <img :src="item.cover.url" alt />
              </div>
              <div class="info">
                <h3>{{item.title}}</h3>
                <span class="rank">
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star_none"></span>
                  <span>{{item.rating.value}}</span>
                </span>
              </div>
            </router-link>
          </ul>
        </div>
      </Jayce-scroll>
    </div>
  </div>
</template>

<script>
import {highscoreApi} from "@api/books"
export default {
  name: "Highscore",
  data(){
      return {
          booksList:[],
          BId:0,
          BCount:9
      }
  },
  created(){
    this.handleGetBooksList(0);
  },
  methods:{
    async handleGetBooksList(bookId,count){
      let data = await highscoreApi(bookId,count);
      this.booksList = data.subject_collection_items;
    }
  },
  watch:{
    booksList(){
      this.$refs.scroll.handleRefreshDown();
      this.$refs.scroll.handlefinishPullingUp();
    }
  },
  mounted(){
    this.$refs.scroll.handleScroll();
    this.$refs.scroll.handlepullingDown(()=>{
      this.BId +=9;
      this.handleGetBooksList(this.BId)
    });
    this.$refs.scroll.handlepullingUp(()=>{
      this.BCount += 9;
      this.handleGetBooksList(this.BId,this.BCount);
    })
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
.main ul {
  /* background: #f00; */
  width: 100%;
  padding: 20px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 660px;
  overflow: hidden;
  box-sizing: border-box;
}
.main ul li {
  text-decoration: none;
  color: #9b9b9b;
  float: left;
  box-sizing: border-box;
  width: 33.33333%;
  padding-left: 4%;
  padding-right: 4%;
  margin-bottom: 20px;
  border-color: #fff;
  overflow: hidden;
}
.main ul li .books_logo {
  width: 100%;
  min-height: 87px;
  overflow: hidden;
  position: relative;
}
.main ul li .books_logo img {
  width: 100%;
  height: 130px;
}
.main ul li .info {
  height: 45px;
  overflow: hidden;
  color: #9b9b9b;
}
.main ul li .info h3 {
  font-size: 13px;
  font-weight: normal;
  padding: 5px 0 0;
  color: #494949;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.main ul li .info .rank {
  height: 16px;
  font-size: 12px;
  padding-top: 3px;
  text-align: center;
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