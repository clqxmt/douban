<template>
  <div class="specific-three">
    <p>共17条短评</p>
    <ul>
      <li>
        <div>
          <img src alt />
          <span>后浪漫</span>
          <p>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
          </p>
        </div>
        <span>
          正如读者@老叮当所说，森见叙写的不是个人的恋爱故事，
          而是名为“少女”的青春诗歌。这是一个天生浪漫的词汇，
          对于正处青春的少女而言，寡味的姓名又哪及“少女”一词更能代表自己？
          中村无疑是深得森见三昧的。书页展开，中村描绘的春宵少女，
          喝下一杯伪电气白兰，在京都的蔷薇色夜光下步履不停，迈着轻灵的步伐奔向她的青春，
          用红线擒获她的心上人，在万千读者心中迸发出迷离的狂想恋曲。除了中村，
          谁还能将森见笔下的春宵少女描绘的如此纤细美丽呢？
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { commentApi } from "@api/fake";
export default {
  name:"comment",
  created(){
    console.log(commentApi())
  }
};
</script>

<style>
.specific-three {
  width: 100%;
  height: auto;
  padding-left: 0.208rem;
  box-sizing: border-box;
}
.specific-three > p {
  height: 0.533rem;
  width: 100%;
  line-height: 0.55rem;
  color: #9b9b9b;
  font-size: 0.133rem;
}
.specific-three ul li div img {
  width: 0.25rem;
  height: 0.25rem;
  float: left;
}
.specific-three ul li div span:nth-of-type(1) {
  float: left;
  font-size: 0.125rem;
  font-weight: 700;
  margin-right: 0.042rem;
}
.specific-three ul li div {
  height: 0.308rem;
  line-height: 0.308rem;
}
.specific-three ul li div p i {
  color: goldenrod;
  width: 0.117rem;
  height: 0.117rem;
  margin-right: -0.067rem;
}
.specific-three ul li > span {
  width: 2.367rem;
  margin-left: 0.25rem;
  display: block;
  border-bottom: 1px solid #eee;
  font-size: 0.125rem;
  color: rgba(0, 0, 0, 0.8);
  padding-bottom: 0.117rem;
  margin-bottom: 0.125rem;
}
</style>