<template>
  <div class="nav">
    <div class="nav-header">
      <div class="reload">
        <img src="../../../../public/img/dou.png" />
        <div>
          <h5>豆瓣App</h5>
          <p>记录你的书影音生活</p>
        </div>
      </div>
      <div class="open">
        <span></span>
        <input type="text" value="打开App" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Top"
};
</script>
<style lang="scss">
.nav {
  background-color: #f7f7f7;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  .nav-header {
    width: 2.875rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .reload {
      width: 1.317rem;

      img {
        width: 0.325rem;
        height: 0.325rem;
        float: left;
        margin-right: 0.083rem;
      }

      > div {
        h5 {
          font-size: 0.125rem;
        }

        p {
          color: #818181;
          font-size: 0.092rem;
        }
      }
    }

    .open input {
      width: 0.667rem;
      height: 0.25rem;
      border-radius: 15px;
      text-align: center;
      font-size: 13px;
      line-height: 30px;
      background-color: #42bd56;
      color: #fff;
      border: none;
    }
  }
}
</style>