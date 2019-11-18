<template>
  <div>
      <div class="newbookDetail"> 
      <div class="banner">
        <div class="newbookDetail-header">
          <a href="">
            <div class="logo-wrap">
              <img src="https://img3.doubanio.com/f/freyr/139cdacc32f9fa8cf65b14ee80f131b8ac0f7ba7/pics/icon/logo_white.png" alt="">
            </div>
          </a>
      </div>
      <div class="banner-bg"
        :style="'background-image:url('+list.headerbgImg+')'"
      ></div>
      <div class="book-intro">
        <p v-for="(item,index) in list.describe"
          :key="index"
        >{{item}}</p>
      </div>
      </div>
  </div>
  <div class="newbookDetail-footer">
    <div class="fixbar-info">
      <div class="fixbar-price">
        <em>￥{{list.nowPrice}}</em>
        <del>￥{{list.beforePrice}}</del>
      </div>
      <router-link 
      tag="div"
      to="/cart"
      class="fixbar-cart">
        <a>
          <i class="iconfont icon-gouwuche1"></i>
          <em class="cart-count">{{goodCount}}</em>
        </a>
      </router-link>
    </div>
    <div class="btn-grounp">
      <div class="fixbar-group-container">
        <div class="fixbar-group-btn">
          <v-touch 
            tag="a"
            @tap="handleAddCart()"
          class="addCart-btn btn">加入购物车</v-touch>
          <a class="buy-btn btn">立即购买</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {detail} from "@api/bookstore"
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
  export default {
      name:"newbookDetail",
      props:["id"],
      data(){
        return{
          list:[],
          goodCount:0,
        }
      },
      created(){
        this.requestData(this.id);
        this.getCartcount();
      },
      methods:{
        async requestData(bookId){
          let data = await detail(bookId);
          this.list=data.data.list[0];
          
        },
        handleAddCart(){
          // Toast.setDefaultOptions({color:"#fff"});
          Toast('成功加入购物车');
          let good=JSON.parse(localStorage.getItem("doubanCart"));
          let is=true;
          if(!good){
            good=[];
            
          }else{
            
            for(var i=0;i<good.length;i++){
              if(good[i].id===this.list.id){
                  good[i].num++;
                  is=false;
                  break;
              }
            }
            
          }
          if(is){
            this.list.num=1;
            good.push(this.list);
          }
          localStorage.setItem("doubanCart",JSON.stringify(good));
          this.getCartcount();
        },
        //从localStorage中获取购物车中的商品数量
        getCartcount(){
          this.goodCount=0;
          let list=JSON.parse(localStorage.getItem("doubanCart"));
          list.forEach((item)=>{
            this.goodCount+=item.num;
          })
        }
      },
      watch:{
        "$route"(){
          this.requestData(this.id);
          this.getCartcount();
        }
      }
  }
</script>

<style lang="scss" >
.banner{
  background:#eee2e0;
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  margin-bottom:0.4833rem;
  .newbookDetail-header{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    .logo-wrap{
      padding: 25px;
      img{
        height: 22px;
        border: 0;
        vertical-align: bottom;
      }
    }
  }
  .banner-bg{
    background-image:url(https://img9.doubanio.com/view/freyr_page_photo/raw/public/4976.jpg);
    height: 280px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .book-intro{
    height: auto;
    background-color: #fbf8f5;
    padding: 30px 25px 15px;
    color: rgba(0,0,0,.9);
    p{
      margin: 15px 0;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

.newbookDetail-footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: -1px;
    z-index: 10;
    display: flex;
    background-color: #fff;
    .fixbar-info{
      display: flex;
      border-right: .5px solid #dfdfdf;
      border-color: #dfdfdf;
      .fixbar-price{
        line-height: 56px;
        padding: 0 12px;
        box-sizing: border-box;
        em{
          font-size: 18px;
          font-weight: 500;
          color: #e76648;
        }
        del{
          font-size: 13px;
          color: #9b9b9b;
        }
      }
      .fixbar-cart{
        padding: 0 12px;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        border-left: .5px solid #dfdfdf;
        a{
          i{
            font-size: 20px;
            color: rgba(0,0,0,.7);
            line-height: 56px;
          }
          .cart-count{
            position: absolute;
            right: 6px;
            top: 6px;
            font-size: 12px;
            color: #e76648;
            font-weight: 500;
          }
        }
      }
    }
    .btn-grounp{
      display: flex;
      flex: 1;
      .fixbar-group-container{
          width: 100%;
          .fixbar-group-btn{
            display: flex;
            width: 100%;
            .btn{
              display: block;
              width: 50%;
              flex: 1;
              font-size: 14px;
              color: rgba(0,0,0,.7);
              height: 56px;
              line-height: 56px;
              padding: 0;
              margin: 0;
              border: 0;
              border-radius: 0;
              background-color: #fff;
              text-align: center;
              font-weight: 400;
              cursor: pointer;
            }
            .addCart-btn{
              border-top: none;
              text-align: center;
              font-weight: 400;
              cursor: pointer
            } 
            .buy-btn{
              color: #fff;
              background-color: #e76648;
              border-top: 0;
            }
          }
      }
    }
}
</style>