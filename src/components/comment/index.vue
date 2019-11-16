<template>
  <div class="specific-three">
    <p>共17条短评</p>
    <ul>
      <li v-for="(item,index) in comment" :key="index">
        <div>
          <img :src="item.user_logo" />
          <span>{{item.user_name}}</span>
          <p>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
          </p>
        </div>
        <span>{{item.content}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { commentApi } from "@api/fake";
export default {
  name: "comment",
  data() {
    return {
      comment: []
    };
  },
  async created() {
    let comment = await commentApi();
    this.comment = comment.data;
  }
};
</script>

<style lang="scss">
.specific-three {
  width: 100%;
  height: auto;
  padding-left: 0.208rem;
  box-sizing: border-box;

  > p {
    height: 0.533rem;
    width: 100%;
    line-height: 0.55rem;
    color: #9b9b9b;
    font-size: 0.133rem;
  }

  ul li {
    div {
      height: 0.308rem;
      line-height: 0.308rem;

      img {
        width: 0.25rem;
        height: 0.25rem;
        float: left;
        border-radius: 50%;
      }

      span:nth-of-type(1) {
        float: left;
        font-size: 0.125rem;
        font-weight: 600;
        margin-right: 0.042rem;
        margin-left: .083rem;
        font-size: .117rem;
      }

      p {
        i {
          color: goldenrod;
          width: 0.117rem;
          height: 0.117rem;
          margin-right: -0.033rem;
        }

        i:nth-of-type(5) {
          color: #ccc;
        }
      }
    }

    > span {
      width: 2.367rem;
      margin-left: .333rem;
      display: block;
      border-bottom: 1px solid #eee;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.8);
      padding-bottom: 0.117rem;
      margin-bottom: 0.125rem;
    }
  }
}
</style>