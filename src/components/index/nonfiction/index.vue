<template>
    <div class="book_nonfiction">
        <div class="book-title">
            <h4>最受关注图书 | 非虚构类</h4>
            <a href="javascript:void(0)">更多</a>
        </div>
        <div class="actionList">
            <ul class="items">
                <li v-for="(item,index) in nonfictionList" :key="index">
                    <router-link :to="'/detail/'+item.id" tag="a">
                        <img :src="item.pic.large" alt="">
                        <p class="ellipsis">{{item.title}}</p>
                        <div class="rank">
                            <span v-for="id of 5" :key="id" class="rating-star"
                                :class="id<=item.rating.star_count?'rating-star-full':'rating-star-gray'">
                            </span>

                            <i>{{item.rating.value}}</i>
                        </div>
                    </router-link>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
    import { indexApi } from "@api/index"
    export default {
        name: "Nonfiction",
        data() {
            return {
                nonfictionList: []
            }
        },
        async created() {
            let data = JSON.parse(sessionStorage.getItem("indexApi"));
            if (!data) {
                let data = await indexApi();
            }
            // console.log(data);
            this.nonfictionList = data.modules[2].data.selected_collections[2].items;
        }
    }
</script>