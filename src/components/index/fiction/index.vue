<template>
    
        <div class="book_fiction">
            <div class="title">
                <h4>最受关注图书 | 虚构类</h4>
                <a href="/book/hotfiction">更多</a>
            </div>
            <ul class="items">
                <li v-for="(item,index) in fictionList" :key="index">
                    <router-link to="/detail" tag="a">
                        <img :src="item.pic.large" alt="">
                        <p class="ellipsis">{{item.title}}</p>
                        <div class="rank">
                            <span v-for="id of 5" :key="id" class="rating-star"
                            :class=" id<=item.rating.star_count?'rating-star-full':'rating-star-gray' "></span>
                           
                            <i>{{item.rating.value}}</i>
                        </div>
                    </router-link>
                </li>
                
            </ul>
        </div>
       
    
</template>

<script>
    import {indexApi} from "@api/index"
    export default {
        name: "fiction",
        data(){
            return{
                fictionList:[]
            }
        },
        async created(){
            let data=await indexApi();
            sessionStorage.setItem("indexApi",JSON.stringify(data));
            this.fictionList=data.modules[2].data.selected_collections[0].items;
        }
    }
</script>
<style lang="scss">
    .book_fiction,
    .book_nonfiction {
        height: 2.1917rem;
        width: 100%;
        padding-left:0.15rem;
    }

    .title {
        display: flex;
        width: 100%;
        height: 0.2rem;
        box-sizing: border-box;
        padding-right:0.125rem;
        h4 {
            min-width: 4em;
            margin-bottom: 0;
            color: #111;
            font-size: 0.1333rem;
            font-weight: normal;
            flex: 1;
        }

        a {
            padding-right: 0.15rem;
            font-size: 0.1167rem;
            color: #42bd56;
        }
    }

    .items {
        padding: 0.125rem 0 0.3583rem 0;
        display: flex;
        overflow: hidden;

        li {
            margin-right: 0.0667rem;

            a {
                color: #111;

                img {
                    display: block;
                    width: 0.8333rem;
                    height: 1.1917rem;
                    border-radius: 0.0417rem;
                }

                p {
                    margin-top: 0.0417rem;
                    line-height: 0.1667rem;
                    font-size: 0.125rem;
                    width: 0.8333rem;
                    height: 0.1667rem;
                    text-align: center;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .rank {
                    width: 0.8333rem;
                    height: 0.125rem;
                    text-align: center;
                    margin-top: 3px;

                    i {
                        color: #818181;
                        font-size: 0.1rem;
                    }
                }
            }
        }
    }
</style>