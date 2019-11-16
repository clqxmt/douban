<template>
  <div class="bookList">
    <ul>
      <li class="bookList-item" 
        v-for="item in list" :key="item.id"
      >
        <a>
          <h3>{{item.title}}</h3>
          <p>{{item.describe}}</p>
          <div class="cards">
            <img v-for="(imgItem,index) in item.bookpic"
                :key="index"
                :src="imgItem" 
            >
            <em >4</em>
          </div>
          <span class="label">
            <i class="label-before" :style="'border-top-color:'+item.borderColor"></i>
            <em :style="'background-color:'+item.borderColor">{{item.status}}</em>
            <i class="label-after" :style="'border-left-color:'+item.borderColor"></i>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { topicApi } from '@api/bookstore'
export default {
  name: 'topic',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.requestData()
  },
  methods: {
    async requestData() {
      let data = await topicApi()
      console.log(data.data.list)
      this.list = data.data.list
    }
  }
}
</script>
<style lang="scss">
.bookList {
  padding: 15px 0;
  box-sizing: border-box;
  .bookList-item {
    a {
      position: relative;
      z-index: 1;
      display: block;
      padding: 20px;
      margin: 0 10px 15px;
      box-sizing: border-box;
      background-color: #fff;
      h3 {
        color: #494949;
        font-size: 19px;
        line-height: 1.4;
        font-weight: 600;
      }
      p {
        color: #9b9b9b;
        font-size: 13px;
        line-height: 1.4;
        margin: 10px 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
      .cards {
        font-size: 0;
        img {
          display: inline-block;
          width: 50px;
          height: 70px;
          margin-right: 5px;
          background-color: rgba(0, 0, 0, 0.03);
          vertical-align: bottom;
        }
        em {
          display: inline-block;
          font-size: 17px;
          line-height: 70px;
          color: #e76648;
          opacity: 0.5;
          margin-left: 5px;
          &:before {
            content: '+';
            display: inline-block;
            margin-right: 3px;
            position: relative;
            top: -1px;
            z-index: 1;
          }
        }
      }
      .label {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        padding: 2px 0 0 2px;
        line-height: 1em;
        display: block;
        // background-color: #009f3d;

        .label-before {
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          z-index: 1;
          border: 18px solid transparent;
          left: 0;
          top: 0;
        //   border-top: 18px solid #009f3d;
        }
        em {
          color: #fff;
          font-size: 12px;
          line-height: 1em;
          position: relative;
          z-index: 2;
          padding: 2px;
          display: inline-block;
          vertical-align: top;
        //   background-color: #009f3d;
        }
        .label-after {
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          z-index: 1;
          border: 18px solid transparent;
          left: 0;
          top: 0;
          border-left: 18px solid #009f3d;
        }
      }
    }
  }
}
</style>