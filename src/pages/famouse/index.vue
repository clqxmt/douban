<template>
  <div>
    <Header />

    <div class="middle">
      <Top />
      <groll ref="scroll">
        <div class="middle-head">
          <h2>经典名著</h2>
          <ul>
            <v-touch
              tag="li"
              :to="'/famouseDetail/'+item.id+'/'+item.title"
              v-for="(item,index) in famouseList"
              :key="index"
              @tap="handleJump(item)"
            >
              <a>
                <img :src="item.cover?item.cover.url:''" />
                <div>
                  <p>{{item.title}}</p>
                  <p>
                    <i class="iconfont icon-star"></i>
                    <i class="iconfont icon-star"></i>
                    <i class="iconfont icon-star"></i>
                    <i class="iconfont icon-star"></i>
                    <i class="iconfont icon-star"></i>
                    <span>{{item.rating?item.rating.value:''}}</span>
                  </p>
                  <span>{{item.info}}</span>
                </div>
              </a>
            </v-touch>
          </ul>
        </div>
      </groll>
    </div>
  </div>
</template>

<script>
import { famouseApi } from "@api/fake";
export default {
  name: "famouse",
  data() {
    return {
      famouseList: [],
      chang: 0,
      count: 10
    };
  },
  created() {
    this.handleGetFakeList();
  },
  methods: {
    async handleGetFakeList(fakeId, countTotal) {
      let data = await famouseApi(fakeId, countTotal);
      this.famouseList = data.subject_collection_items;
    },
    handleJump(item){
      this.$router.push({path:'/famouseDetail/'+item.id+'/'+item.title,params:{id:item.id,title:item.title}})
    }
  },
  watch: {
    famouseList() {
      this.$refs.scroll.handleRefreshDown();
      this.$refs.scroll.handlefinishPullUp();
    }
  },
  //在mounted中可以访问DOM结构
  mounted() {
    this.$refs.scroll.handleScroll();
    //下拉刷新
    this.$refs.scroll.handlepullingDown(() => {
      this.chang += 8;
      this.handleGetFakeList(this.chang);
    });

    //上拉加载更多
    this.$refs.scroll.handlepullingUp(() => {
      this.count += 5;
      this.handleGetFakeList(this.chang, this.count);
    });
  },

};
</script>

<style lang="scss">
.middle {
  position: absolute;
  padding-top: 0.417rem;
  height: 100%;
  width: 100%;

  .middle-head {
    // left: 0;
    width: 2.958rem;
    margin-top: 0.392rem;
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
          width: 1.808rem;
          height: 0.683rem;

          p:nth-of-type(1) {
            color: #494949;
            font-size: 0.142rem;
            font-weight: 700;
            margin-top: 0.067rem;
            margin-bottom: 0.033rem;
          }

          p:nth-of-type(2) {
            font-size: 0.1rem;
            color: #9b9b9b;

            span {
              margin-left: 0.017rem;
            }

            i {
              font-style: normal;
              color: #f8c205;
              font-size: 0.117rem;
              // margin-right: -.017rem;
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