<template>
  <div class="top">
    <div class="top-header">
      <div class="logo">
        <img src="../../../../public/img/logo.png"/>
        <input type="text" placeholder="搜索" />
      </div>
      <img src="../../../../public/img/tv.png"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="scss">
.top {
  width: 100%;
  height: 0.417rem;
  display: flex;
  position: fixed;
  justify-content: center;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 10;

  .top-header {
    display: flex;
    align-items: center;
    width: 2.875rem;
    height: 0.417rem;
    justify-content: space-between;

      > img {
        width: 0.167rem;
        height: 0.158rem;
      }

      .logo {
         img{
            width: 0.45rem;
            height: 0.217rem;
            float: left;
            margin-right: 0.125rem;
        }
        input {
            float: left;
            display: flex;
            width: 0.833rem;
            height: 0.25rem;
            background: #f7f7f7 url("../../../../public/img/big.png") no-repeat 8px center;
            background-size: 18px;
            border: 1px solid #dfdfdf;
            border-radius: 0.125rem;
            padding-left: 0.25rem;
            box-sizing: border-box;
            outline: none;
        }
      }
  }
}

</style>