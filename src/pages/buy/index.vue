<template>
  <div>
    <div class="top">
      <span>关闭</span>
      <span>其他电商购买</span>
      <span></span>
    </div>
    <div class="price">
      <p>购买全新书</p>
      <ul>
        <li>
          <span>京东商城</span>
          <span>{{buy.price[0]}}元</span>
        </li>
        <li>
          <span>当当网</span>
          <span>45.60元</span>
        </li>
        <li>
          <span>中国图书网</span>
          <span>45.60元</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {introduceApi} from "@api/fake";
export default {
  name:"buy",
  props:["id"],
  data(){
    return {
      buy:"",
    }
  },
  async created(){
    let buy = await introduceApi(this.id);
    this.buy = buy;
  }
};
</script>

<style lang="scss">
.top {
  width: 100%;
  height: 0.367rem;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span:nth-of-type(1) {
    color: #42bd56;
    font-size: 0.142rem;
    width: 0.583rem;
    text-align: center;
  }

  span:nth-of-type(2) {
    margin-right: 0.55rem;
    font-size: 0.142rem;
    font-weight: 400;
    color: #191919;
  }
}

.price {
  height: 1.65rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.15rem;

  p {
    height: 0.367rem;
    border-bottom: 1px solid #e8e8e8;
    line-height: 0.367rem;
    color: #818181;
    font-size: 0.125rem;
  }

  ul {
    width: 100%;
    height: 0.95rem;

    li {
      height: 0.317rem;
      border-bottom: 1px solid #e8e8e8;
      box-sizing: border-box;
      padding-top: 0.125rem;

      span:nth-of-type(1) {
        color: #42bd56;
        font-size: 0.142rem;
      }

      span:nth-of-type(2) {
        float: right;
        margin-right: 1.05rem;
        color: #494949;
        font-size: 0.125rem;
      }
    }
  }
}
</style>