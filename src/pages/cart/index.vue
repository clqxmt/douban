<template>
  <div>
    <header>
      <a href="" class="logo">
        <i class="iconfont logo-icon">豆瓣 <em>|</em> 豆品</i>
      </a>
      <div>
        <a href="" class="people">
          <i class="iconfont icon-ren people-icon"></i>
        </a>
        <a href="" class="home">
          <i class="iconfont icon-shouye home-icon"></i>
        </a>
      </div>
    </header>

    <!-- //列表 -->
    <section>
      <div class="list">
        <div class="list-top">
          <v-touch
            tag="span"
            @tap="handleAllChecked()"
           class="check-btn" :class="isAllChecked?'checked':''">
            <i class="iconfont icon-duihao mark"></i>
          </v-touch>
          <h3>豆瓣优选</h3>
        </div>
        <!-- 所有商品列表 -->
        <div class="goods-list">
          <!-- //商品 -->
          <div class="list-item"
            v-for="(item,index) in goodsList"
            :key="item.id"
          >
            <v-touch tag="span" 
            @tap="handleItemChecked(index)"
            class="check check-btn" :class="item.flag?'checked':''">
              <i class="iconfont icon-duihao mark"></i>
            </v-touch>
            <div class="good-info">
              <a class="good-logo" target="_blank">
                <img :src="item.bookpic" alt="">
              </a>
              <div class="good-config">
                <h4 class="good-name">{{item.bookName}}</h4>
                <p>
                  <span>{{item.color}}</span>
                  <span>{{item.size}}开</span>
                </p>
                <div class="isSale" v-if="!item.isSale">
                  <span>预售：统一{{item.time}}发货</span>
                </div>
                <div class="good-num">
                  <div>
                    <v-touch 
                    tag="i"
                    @tap="handleReduce(index)"
                    class="reduce">-</v-touch>
                    <span>{{item.num}}</span>
                    <v-touch 
                    tag="i"
                    @tap="handleAdd(index)"
                    class="add">+</v-touch>
                  </div>
                </div>
              </div>

            </div>
            <v-touch 
            tag="div"
            @tap="handleRemove(index)"
            class="good-delete">
              <span>删除</span>
            </v-touch>
            <div class="good-count">
              <p>￥{{item.nowPrice}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- //结算 -->
    <footer>
      <!-- <a>
        <span class="check-btn">
          <i class="iconfont icon-duihao mark"></i>
        </span>
        取消
      </a> -->
      <div class="count">
        <div class="countPrice">
          <span>
            <em>（不含运费）</em>
            ￥{{count}}
          </span>
        </div>
        <button>结算</button>
      </div>

    </footer>
  </div>
</template>

<script>
export default {
  name:"cart",
  data(){
    return{
      goodsList:[],
      isAllChecked:true
    }
  },
  created(){
    this.getData();
    
  },
  watch:{
    "$route"(){
      this.getData();
    }
  },
  methods:{
    //从localStorage中取数据
    getData(){
      this.goodsList=JSON.parse(localStorage.getItem("doubanCart"));
      for(var i=0;i<this.goodsList.length;i++){
        this.goodsList[i].flag=true;
      }
    },
    //将最新的goodsList存到localStorage中
    save(){
      localStorage.setItem("doubanCart",JSON.stringify(this.goodsList));
    },
    //点击全选
    handleAllChecked(){
      this.isAllChecked=!this.isAllChecked;
      this.goodsList.forEach((item)=>{
        item.flag=this.isAllChecked;
      })
    },
    //每个商品的选框
    handleItemChecked(index){
      console.log(index);
      this.goodsList[index].flag=!this.goodsList[index].flag;
      let is=true;
      this.goodsList.forEach((item)=>{
        if(!item.flag){
          is=false;
          
        }
      })
      this.isAllChecked=is;
    },
    //减少商品数量
    handleReduce(index){
      if(this.goodsList[index].num==1){
        this.goodsList[index].num=1;
      }else{
        this.goodsList[index].num--;
      }
      this.save();
    },
    //增加商品数量
    handleAdd(index){
      this.goodsList[index].num++;
      this.save();
    },

    //删除商品
    handleRemove(index){
      this.goodsList.splice(index,1);
      this.save();
    }
  },
  computed:{
    count:function (){
      let countPrice=0;
      // this.goodsList.forEach((item)=>{
       
      //   if(item.flag){
      //     countPrice+=item.nowPrice*item.num;
      //   }
      // })
      for(var i=0;i<this.goodsList.length;i++){
        if(this.goodsList[i].flag){
          countPrice+=this.goodsList[i].nowPrice*this.goodsList[i].num;
        }
      }
      return countPrice;
    }
  }
}
</script>

<style lang="scss" >
body {
  background: #f0f0f0;
}
header {
  background-color: #fff;
  height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    .logo-icon {
      font-size: 22px;
      color: #44883e;
      font-weight: 500;
      em {
        color: #eee;
      }
    }
  }
  div {
    display: flex;

    a {
      padding-left: 13px;
      color: #44883e;
      position: relative;
      z-index: 1;

      .people-icon {
        font-size: 18px !important;
      }
      .home-icon {
        font-size: 19px !important;
      }
    }
  }
}

//复选框的公共样式
.check-btn {
  border-width: 1px;
  font-size: 13px;
  line-height: 13px;
  height: 13px;
  width: 13px;
  border-color: #8fb88b;
  background-color: #fff;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
//选中时对号的样式
.mark {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}
//选中时选框的背景颜色
.checked{
  background-color: #44883e;
}
section {
  .list {
    text-align: left;

    //列表头部
    .list-top {
      background-color: #fff;
      position: relative;
      z-index: 1;
      text-align: left;
      padding: 10px 0 10px 45px;
      margin-bottom: 2px;
      span {
        position: absolute;
        z-index: 1;
        top: 13px;
        left: 15px;
        
      }
      h3 {
        font-size: 15px;
        color: rgba(0, 0, 0, 0.9);
      }
    }

    //商品列表
    .goods-list {
       
        
      .list-item {
        position: relative;
        z-index: 1;
        background-color: #fff;
       position: relative;
        margin-bottom: 2px;
        padding: 20px 45px;
        // box-sizing:border-box;
        .check {
          // display: block;
          position: absolute;
          z-index: 1;
          // top: 50%;
          // left: -31px;
          top: 50%;
          left: 15px;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
        //商品信息
        .good-info {
          display: flex;
          .good-logo {
            width: 80px;
            height: 80px;
            line-height: 80px;
            background-color: #f9f9f9;
            text-align: center;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .good-config {
            padding-left: 10px;
            margin-right: 15px;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            .good-name {
              font-size: 15px;
              font-weight: 700;
              color: rgba(0, 0, 0, 0.9);
            }
            p {
              font-size: 13px;
              margin: 6px 0;
              color: #3e3a39;
              span {
                margin-right: 10px;
              }
            }
            .isSale{
                margin-bottom: 5px;
                span{
                  color: #dd1944;
                }
            }
          }
          //商品数量
          .good-num {
            display: inline-block;
            position: relative;
            z-index: 1;
            div {
              border: 1px solid;
              border-color: rgba(0, 0, 0, 0.03);
              i {
                font-size: 16px;
                line-height: 25px;
                height: 25px;
                width: 30px;
                text-align: center;
                display: inline-block;
                vertical-align: middle;
                color: #3e3a39;
                background-color: #f9f9f9;
              }
              span {
                font-size: 13px;
                line-height: 25px;
                margin: 0;
                height: 25px;
                width: 40px;
                display: inline-block;
                vertical-align: middle;
                text-align: center;
                box-sizing: border-box;
                border: none;
              }
            }
          }
        }
        //删除
        .good-delete {
          position: absolute;
          z-index: 1;
              top: 25px;
              right: 15px;
          span {
            font-size: 13px;
            line-height: 18px;
            color: #3e3a39;
          }
        }

        //商品总价
        .good-count {
          right: 15px;
          bottom: 20px;
          text-align: right;
          position: absolute;
          z-index: 1;
          p {
            font-size: 15px;
            color: #dd1944;
          }
        }
      }
    }
  }
}

footer {
  font-size: 16px;
  line-height: 45px;
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  a {
    margin-left: 15px;
    margin-right: 10px;
    padding-right: 5px;
    display: inline-block;
    cursor: pointer;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
  }

  .count {
    float: right;
    .countPrice {
      margin-right: 10px;
      font-weight: 500;
      color: #dd1944;
      display: inline-block;
      vertical-align: middle;
      text-align: right;
      span {
        font-size: 16px;
        display: block;
        font-weight: 400;
        line-height: 1;
        color: #dd1944;
        em {
          font-size: 13px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
    button {
      width: 120px;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      background-color: #dd1944;
      color: #fff;
      border: none;
      height: 46px;
    }
  }
}
</style>