<template>
  <div class="specific-two">
    <img src="../img/sad3.jpg" alt />
    <div class="book">
      <ul>
        <li>
          <span>书名:</span>
          <span>中村佑介的插画世界Ⅰ：蓝</span>
        </li>
        <li>
          <span>原作名:</span>
          <span>Blue</span>
        </li>
        <li>
          <span>作者:</span>
          <span>[日]中村佑介</span>
        </li>
        <li>
          <span>译者:</span>
          <span>汪婷</span>
        </li>
        <li>
          <span>出版社:</span>
          <span>后浪丨湖南美术出版社</span>
        </li>
        <li>
          <span>出版时间:</span>
          <span>2019-11</span>
        </li>
        <li>
          <span>页数:</span>
          <span>200</span>
        </li>
        <li>
          <span>定价:</span>
          <span>199.80</span>
        </li>
        <li>
          <span>装帧:</span>
          <span>平装</span>
        </li>
        <li>
          <span>ISBN:</span>
          <span>9787535688545</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.specific-two {
  width: 100%;
  height: 4.775rem;
  box-sizing: border-box;
  padding: 0.125rem 0.25rem;

  img {
    width: 2.625rem;
    height: 1.967rem;
    vertical-align: top;
  }

  .book {
    width: 2.625rem;
    height: 2.558rem;

    ul li {
      box-sizing: border-box;
      color: #9b9b9b;
      height: 0.208rem;

      span:nth-of-type(2) {
        color: rgba(0, 0, 0, 0.9);
        margin-left: 0.067rem;
      }
    }

    li:nth-of-type(1) {
      height: 0.575rem;
      padding: 0.25rem 0 0.108rem;
      border-bottom: 1px solid rgba(231, 102, 72, 0.2);
      margin-bottom: 0.108rem;

      span:nth-of-type(2) {
        font-weight: 700;
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
}
</style>