<template>
    <div class="bookstore">
        <div class="book-title">
            <h4>豆瓣书店</h4>
            <router-link to="/bookstore" tag="a">更多</router-link>
        </div>
        <router-link 
            tag="a"
            to="/newbookDetail/1"
         class="promBook">
            <img :src="bookstoreHeader.cover.url" alt="">
            <div class="find-content">
                <div class="content-title">
                    <span>{{bookstoreHeader.title}}</span>
                    <i>￥{{bookstoreHeader.price}}</i>
                </div>
                <p>
                    {{bookstoreHeader.info}}
                </p>
            </div>
        </router-link>
        <div class="bookstore-list">
            <div class="bookstoreList">
                <ul class="items bookstore-items">
                    <router-link tag="li" v-for="(item,index) in bookstoreList" 
                    :key="index"
                    :to="'/newbookDetail/'+item.id"
                    >
                        <a href="javascript:(0);">
                            <img :src="item.cover.url" alt="">
                            <span>{{item.title}}</span>
                            <i>￥{{item.price}}</i>
                        </a>
                    </router-link>

                </ul>
            </div>
        </div>
    </div>

</template>
<script>
    import { indexApi } from "@api/index"
    export default {
        name: "BookStore",
        data() {
            return {
                bookstoreHeader: [],
                bookstoreList: []
            }
        },
        async created() {
            var data = JSON.parse(sessionStorage.getItem("indexApi"));
            if (!data) {
                let data = await indexApi();
            }
            this.bookstoreHeader = data.modules[8].data.subject_collection_boards[0].header;
            this.bookstoreList = data.modules[8].data.subject_collection_boards[0].items;
            console.log(this.bookstoreList,111);
            this.bookstoreList[0].id=3;
            this.bookstoreList[1].id=5;
            this.bookstoreList[2].id=4;
            this.bookstoreList[3].id=5;
        }
    }
</script>
<style lang="scss">
    .bookstore {

        padding-left: 0.15rem;
        position:relative;
        z-index:10;
        .title {
            a {
                padding-right: 0;
            }
        }

        .promBook {
            padding-right: 0.125rem;
            box-sizing: border-box;
            display: flex;
            margin-top: 0.1rem;

            img {
                width: 0.8333rem;
                height: 1.1rem;
                margin-right: 0.125rem;
            }

            .find-content {
                .content-title {
                    margin: 0.0833rem 0;
                    display: flex;

                    span {
                        display: block;
                        font-size: 0.15rem;
                        color: #494949;
                        margin-right: 0.10rem;
                        width: 1.40rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        word-wrap: normal;
                    }

                    i {
                        // float: right;
                        color: #E76648;
                        font-size: 16px;
                        line-height: 22px;
                    }
                }

                p {
                    font-size: 13px;
                    font-weight: 300;
                    line-height: 1.5;
                    color: #9B9B9B;
                }
            }
        }

        .bookstore-list {
            .bookstoreList{
                width:100%;
                 overflow: hidden;
                 height:2.0583rem;
             }
            .bookstore-items{
                width: calc(100% - 30px);
                height:2.2rem;
                overflow: auto; 
            }
            /* overflow:hidden; */
            ul {
                /* */
                li {
                    a {
                        img {
                            border-radius: 0.0333rem;
                        }

                        span {
                            display: block;
                            margin-top: 5px;
                            width: 0.8333rem;
                            color: #111;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            text-align: center;
                        }

                        i {
                            display: block;
                            width: 0.8333rem;
                            text-align: center;
                            color: #818181;
                            font-size: 0.1rem
                        }
                    }
                }
            }
        }
    }
</style>