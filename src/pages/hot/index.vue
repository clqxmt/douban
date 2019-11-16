<template>
  <div>
    <Header />

    <div class="hot">
      <Top />
      <h3>热门图书</h3>
      <ul>
        <li v-for="(item,index) in hotList" :key="index">
          <img :src="item.cover.url" alt />
          <p>{{item.title}}</p>
          <span>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <em>{{item.rating.value}}</em>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { hotApi } from "@api/fake";
export default {
  name: "hot",
  data() {
    return {
      hotList: []
    };
  },
  async created() {
    let data = await hotApi();
    this.hotList = data.subject_collection_items;
  }
};
</script>

<style lang="scss">
.hot {
  width: 100%;
  height: 100%;
  padding-top: 0.417rem;

  h3 {
    margin-top: 0.892rem;
    height: 0.65rem;
    font-size: 0.2rem;
    font-weight: 400;
    line-height: 0.6rem;
    padding-left: 0.133rem;
  }

  ul {
    width: 100%;
    height: 100%;

    li {
      float: left;
      width: 0.992rem;
      height: 1.458rem;
      box-sizing: border-box;
      padding-left: 0.133rem;
      margin-bottom: 0.167rem;

      img {
        width: 0.758rem;
        height: 1.083rem;
        vertical-align: top;
      }

      p {
        font-size: 0.108rem;
        text-align: center;
        width: 0.758rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #494949;
        margin-top: 0.042rem;
      }
    }

    span {
      display: block;
      width: 0.758rem;
      height: 0.158rem;
      text-align: center;

      i {
        display: inline-block;
        font-size: 0.083rem;
        margin-right: -0.017rem;
        color: goldenrod;
      }

      em {
        font-style: normal;
        color: #9b9b9b;
        font-size: 0.1rem;
        margin-left: 0.033rem;
      }

      i:nth-of-type(5) {
        color: #ccc;
      }
    }
  }
  ul:after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>