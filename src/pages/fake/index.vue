<template>
  <div>
    <Header />

    <div class="middle">
      <Top />
      <groll ref="scroll">
        <div class="middle-head">
          <h2>
            最受关注图书
            <span>|</span>虚构类
          </h2>
          <ul>
            <router-link
              v-for="(item,index) in fakeList"
              :key="index"
              :to="'/detail/'+item.id+'/'+item.title"
              tag="li">
            
              <a>
                <img :src="item.cover.url"/>
                <div>
                  <p>{{item.title}}</p>
                  <p>
                    <i class="iconfont icon-star"></i>
                    <i class="iconfont icon-star"></i>
                    <i class="iconfont icon-star"></i>
                    <i class="iconfont icon-star"></i>
                    <i class="iconfont icon-star"></i>
                    <span>{{item.rating.value}}</span>
                  </p>
                  <span>{{item.info}}</span>
                </div>
              </a>
            </router-link>
          </ul>
        </div>
      </groll>
    </div>
  </div>
</template>

<script>
import { fakeApi } from "@api/fake";
export default {
  name: "fake",
  // created(){
  //     console.log(fakeApi())
  // }
  data() {
    return {
      fakeList: [],
      chang:0,
      count:10
    };
  },
  created() {
    this.handleGetFamouseList(0);
    
  },
  methods:{
    async handleGetFamouseList(fakeId,countTotal){
      let data = await fakeApi(fakeId,countTotal);
      this.fakeList = data.subject_collection_items;
    }
  },
  watch:{
    fakeList(){
      this.$refs.scroll.handleRefreshDown();
      this.$refs.scroll.handlefinishPullUp();
    }
  },
  mounted(){
    this.$refs.scroll.handleScroll();
    this.$refs.scroll.handlepullingDown(()=>{
      this.chang += 8;
      this.handleGetFamouseList(this.chang)
    });

    this.$refs.scroll.handlepullingUp(()=>{
      this.count += 5;
      this.handleGetFamouseList(this.chang,this.count);
    })
  }
};
</script>

<style lang="scss">
.middle {
  padding-top: 0.417rem;
    position: absolute;
  //   left: 0;
  height: 100%;
  width: 100%;

  .middle-head {
    width: 2.958rem;
    margin-top: .392rem;
    margin-left: 0.083rem;

    h2 {
      font-size: 0.2rem;
      font-weight: 400;
      margin-left: 0.1rem;

      span {
        margin: 0 0.1rem;
      }
    }

    ul li {
      width: 3rem;
      height: 1.592rem;
      box-sizing: border-box;
      padding: 0.167rem 4%;
      border-bottom: 1px solid #ccc;
      a {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        -webkit-tap-highlight-color: transparent;
        img {
          width: 0.833rem;
          height: 1.233rem;
        }

        > div {
          width: 1.8rem;
          height: 0.683rem;

          p:nth-of-type(1) {
            color: #494949;
            font-size: 0.142rem;
            font-weight: 700;
            margin-top: 0.067rem;
            margin-bottom: 0.033rem;

            span {
              margin-left: 0.017rem;
            }
          }

          p:nth-of-type(2) {
            font-size: 0.1rem;
            color: #9b9b9b;

            i {
              font-style: normal;
              color: #f8c205;
            }

            i:nth-of-type(5) {
              color: #ccc;
            }
          }

          > span {
            font-size: 0.1rem;
            color: #9b9b9b;
          }
        }
      }
    }
  }
}
</style>