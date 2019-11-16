<template>
  <div class="book-list">
    <ul>
        <li class="book-wrap" v-for="item in list" 
            :key="item.id"
        >
            <a class="book">
                <div class="book-item" 
                :style="'background-image:url('+item.bgpic+')'">
                <div class="price">¥ {{item.price}}</div>
                <div class="cover"
                    :style="'background-image:url('+item.bookpic+')'"
                ></div>
                </div>
                <div class="info">
                <h3>{{item.bookName}}</h3>
                <p>{{item.describe}}</p>
                </div>
            </a>
        </li>
    </ul>
  </div>
</template>
<script>
import {newbookApi} from "@api/bookstore"
export default {
    name:"newbook",
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.requestData();
    },
    methods:{
        async requestData(){
            let data=await newbookApi();
            
            this.list=data.data.list;
        }
    }
}
</script>
<style lang="scss">
.book-list {
  width: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  .book-wrap {
    .book {
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
      display: block;
      .book-item {
        width: 100%;
        padding: 21.16% 0;
        background-color: #fff;
        background-size: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        z-index: 1;
        background-image: url('https://img1.doubanio.com/view/freyr_page_photo/raw/public/4938.jpg');
        .price {
          position: absolute;
          z-index: 1;
          right: 0;
          bottom: 0;
          -webkit-transform: translateY(50%);
          transform: translateY(50%);
          background-color: #e76648;
          color: #fff;
          font-size: 16px;
          line-height: 22px;
          padding: 2px 8px 2px 5px;
          font-weight: 400;
        }
        .cover {
          position: absolute;
          z-index: 2;
          left: 20px;
          width: 90px;
          height: 120px;
          bottom: -80px;
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-image: url('https://img1.doubanio.com/view/freyr_page_photo/raw/public/4939.jpg');
        }
      }
      .info {
        background-color: #fff;
        padding: 20px 20px 20px 125px;
        line-height: 20px;
        h3 {
          color: #494949;
          padding: 0 0 5px;
          font-size: 19px;
          line-height: 26px;
          font-weight: 700;
        }
        p {
          overflow: hidden;
          display: -webkit-box;
          font-size: 14px;
          color: #9b9b9b;
          word-break: break-all;
        }
      }
    }
  }
}
</style>