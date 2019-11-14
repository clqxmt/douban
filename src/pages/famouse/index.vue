<template>
  <div>
    <Header />

    <div class="middle">
      <Top />
      <div class="middle-head">
        <h2>经典名著</h2>
        <ul>
          <router-link tag="li" :to="'/famouseDetail/'+item.id+'/'+item.title" v-for="(item,index) in famouseList" :key="index">
            <a>
              <img :src="item.cover.url" />
              <div>
                <p>{{item.title}}</p>
                <p>
                  <i>☆</i>
                  <i>☆</i>
                  <i>☆</i>
                  <i>☆</i>
                  <i>☆</i>
                  <span>{{item.rating.value}}</span>
                </p>
                <span>{{item.info}}</span>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { famouseApi } from "@api/fake";
export default {
  name: "famouse",
  data(){
    return{
      famouseList:[],
    }
  },
  async created(){
    let data = await famouseApi();
    this.famouseList = data.subject_collection_items;
  },
};
</script>

<style lang="scss">
.middle {
  padding-top: 0.417rem;
  height: 100%;
  width: 100%;

  .middle-head {
    // position: absolute;
    // left: 0;
    width: 2.958rem;
    margin-top: 0.533rem;
    height: 100%;
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
          width:1.808rem;
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
              font-size: .117rem;
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