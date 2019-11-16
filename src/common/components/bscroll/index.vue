<template>
  <div class="scroll_container">
    <div class="scroll_loading" v-if="flag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>

    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "groll",
  data() {
    return {
      flag: false
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //滚动优化
      probeType: 1,
      //下拉刷新
      pullDownRefresh: {
        threshold: 60
      },
      //上拉加载更多
      pullUpLoad: true,
      tap: true,
      click: true
    });
  },
  methods: {
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 60) {
          this.flag = true;
        }
      });
    },


    //下拉刷新获取数据
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
        callback();
      });
    },
    //当数据请求成功后执行这个方法
    handleRefreshDown() {
      //重新计算better-scroll
      this.scroll.refresh();
      //防止用户多次下拉刷新做的防抖
      this.scroll.finishPullDown();
      setTimeout(() => {
        this.flag = false;
      }, 1000);
    },

    //上拉加载更多
    handlepullingUp(callback) {
      this.scroll.on("pullingUp", () => {
        callback();
      });
    },

    //当上拉加载更多请求数据完毕后
    handlefinishPullUp() {
      //当上拉加载更多数据获取到以后通过better-scroll可以进行下一步加载了
      this.scroll.finishPullUp();
      //重新计算better-scroll
      this.scroll.refresh();
    }
  }
};
</script>

<style>
.wrapper,
.scroll_container {
  height: 100%;
}
.scroll_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.2rem;
}
</style>