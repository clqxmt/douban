<template>
    <div class="book-detail" :style="{background:list.body_bg_color}">
        <div class="book-detail-info">
            <a href="">
                <img :src="list.pic.normal" alt="">
            </a>
            <div class="book-detail-info-right">
                <h2>{{list.title}}</h2>
                <p>{{list.press | toString()}}  / {{list.pubdate | toString()}}出版</p>
                <div class="status">
                    <a href="">
                        <i class="iconfont icon-xiangdu"></i>
                        <span>想读</span>
                    </a>
                    <a href="">
                        <i></i>
                        <span>在读</span>
                    </a>
                    <a href="">
                        <i class="iconfont icon-xing1"></i>
                        <span>读过</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="rating-root">
            <div class="sub-score">
                <div class="sub-top">
                    <span>豆瓣评分
                        <em>TM</em>
                    </span>
                    <a href="">
                        <span>打开App评分</span>
                    </a>
                </div>
                <div class="sub-content">
                    <div class="sub-rating">
                        <h3>{{list.rating.value}}</h3>
                        <div class="rank">
                            <div class="rank-star">
                                <span v-for="id of 5" :key="id"
                                class="rating-star" 
                                :class="id<=list.rating.star_count?'rating-star-full':'rating-star-gray'">
                                </span>
                               
                            </div>
                            <p>
                                <em>{{list.rating.count}}人评分</em>
                            </p>
                        </div>
                    </div>
                    <div class="sub-chart">
                        <div class="star-stars">
                            <div class="stars-wrap">
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                            </div>
                            <div class="chart-wrap">
                                <span class="rating-progress" style="width: 39.3%;"></span>
                            </div>
                        </div>
                        <div class="star-stars">
                            <div class="stars-wrap">
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                            </div>
                            <div class="chart-wrap">
                                <span class="rating-progress" style="width: 42.9%;"></span>
                            </div>
                        </div>
                        <div class="star-stars">
                            <div class="stars-wrap">
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                            </div>
                            <div class="chart-wrap">
                                <span class="rating-progress" style="width: 15.2%;"></span>
                            </div>
                        </div>
                        <div class="star-stars">
                            <div class="stars-wrap">
                                <span class="rating-star-icon"></span>
                                <span class="rating-star-icon"></span>
                            </div>
                            <div class="chart-wrap">
                                <span class="rating-progress" style="width: 0.9%;"></span>
                            </div>
                        </div>
                        <div class="star-stars">
                            <div class="stars-wrap">
                                <span class="rating-star-icon"></span>
                            </div>
                            <div class="chart-wrap">
                                <span class="rating-progress" style="width: 1.8%;"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="buy-link">
            <div class="reading">
                <router-link to="/buy" tag="div" class="sub-reading">
                    <span class="text">试买 / 购买</span>
                    <span class="price">58.00元起</span>
                </router-link>
            </div>
            <div class="buy">
                <span class="text">其他电商购买</span>
                <span class="price">37.50元起</span>
               
            </div>
        </div>
        
    </div>

</template>
<script>
    export default {
        name: "bookDetail",
        props:["list"],
    }
</script>
<style lang="scss">
    .book-detail {
        background-color: rgb(127, 126, 126);
        padding: 0.2rem 0.15rem 0.15rem;

        .book-detail-info {
            min-height: 165px;
            display: flex;

            a {
                float: left;
                position: relative;

                img {
                    width: 0.85rem;
                    height: 1.1833rem;
                    border-radius: 0.025rem;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    box-shadow: 0 0.0417rem 0.0833rem rgba(0, 0, 0, 0.15);
                    box-sizing: border-box;
                }
            }

            .book-detail-info-right {
                margin-left: 0.0833rem;
                line-height: 1.4;
                min-height: 1.4rem;
                position: relative;

                h2 {
                    font-size: 0.1833rem;
                    color: #fff;
                }

                p {
                    font-size: 0.11rem;
                    color: rgba(255, 255, 255, 0.7);
                    margin: 0.1rem 0 0.05rem;
                }

                .status {
                    margin-top: 10px;
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;

                    a {
                        height: 30px;
                        width: 70px;
                        line-height: 1;
                        display: flex;
                        align-items: center;
                        background-color: #fff;
                        border-radius: 4px;
                        margin-right: 10px;
                        color: #191919;
                        font-size: 13px;
                        text-align: center;
                        justify-content: center;
                        max-width: 50%;
                        flex: 1;

                        i {
                            display: inline-block;
                            vertical-align: middle;
                            line-height: 1;
                            width: 14px;
                            height: 14px;
                            margin-right: 5px;
                            color: #FFAC2C;
                        }
                    }
                }
            }
        }

        /* //评分/ */
        .rating-root {
            .sub-score {
                background-color: rgba(0, 0, 0, 0.1);
                border-radius: 0.06rem;
                padding: 0.1rem 0.15rem 0.13rem;
                margin-top: -0.1rem;

                .sub-top {

                    line-height: 0.22rem;

                    position: relative;
                    margin-bottom: 0.04rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    span {
                        color: #fff;
                        font-size: 0.1rem;

                        em {
                            display: inline-block;
                            font-size: 0.1rem;
                            color: rgba(255, 255, 255, 0.7);
                            position: absolute;
                            top: -1px;
                            font-style: normal;
                            transform: scale(0.7);
                        }
                    }

                    a {
                        font-size: 0.1167rem;
                        color: #fff;
                        border: 1px solid #f9f9f9;
                        border-radius: 0.0417rem;
                        line-height: 1;
                        padding: 0.04rem 0.05rem;
                        box-sizing: border-box;

                    }
                }

                /* //豆瓣评分 */
                .sub-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .sub-rating {
                        display: inline-flex;
                        width: 50%;
                        position: relative;
                        vertical-align: bottom;
                        justify-content: flex-start;
                        align-items: center;

                        h3 {
                            display: inline-block;
                            font-size: 0.28rem;
                            line-height: 0.5rem;
                            margin-right: 5px;
                            color: #fff;
                        }

                        .rank {
                            display: inline-block;
                            box-sizing: border-box;

                            .rank-star {
                                display: inline-block;
                                vertical-align: middle;



                            }

                            p {
                                display: block;
                                /* // font-size: 0.12rem; */
                                color: rgba(255, 255, 255, 0.7);
                                line-height: 1;
                                margin-top: 0.05rem;

                                em {
                                    display: inline-block;
                                    font-size: 0.12rem;
                                    transform: scale(0.9);

                                }
                            }
                        }

                        &:after {
                            content: '';
                            width: .5px;
                            height: 38px;
                            position: absolute;
                            z-index: 1;
                            /* // top: 0px; */
                            right: 0;
                            background: rgba(255, 255, 255, 0.2);
                        }
                    }

                    .sub-chart {
                        display: inline-block;
                        vertical-align: middle;
                        width: 50%;

                        .star-stars {
                            line-height: 0;
                            position: relative;
                            text-align: right;

                            .stars-wrap,
                            .chart-wrap {

                                display: inline-block;
                                vertical-align: middle;
                                /* // line-height: 7px; */
                                margin-bottom: 1px;
                            }

                            .stars-wrap {
                                /* // margin-right: 5px; */
                                font-size: 0;

                                .rating-star-icon {
                                    display: inline-block;
                                    width: 0.0583rem;
                                    height: 0.0583rem;
                                    background-size: 0.0583rem 0.0583rem;
                                    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkltcG9ydGVkIExheWVycyBDb3B5QDN4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IumhtemdojEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+CiAgICAgICAgPGcgaWQ9ImlQaG9uZS04IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMxLjAwMDAwMCwgLTM1Ni4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4wMDAwMDAsIDI5My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg4LjUwMDAwMCwgMzEuNTAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC45ODc5NjYsMzQuNjYwODQ3IEMzNC45Mzk5MDIyLDM0LjQ4MjEzNDEgMzQuNzg4MjcxLDM0LjQ3NTk3OTggMzQuNzg4MjcxLDM0LjQ3NTk3OTggTDMyLjU3Njg4MzEsMzQuMzQ5OTYgTDMxLjczMjczMjUsMzIuMTEyNTkwMSBDMzEuNzMwMDYyMywzMi4xMDQwMDI3IDMxLjY3Njg0MDcsMzIgMzEuNTI3NjA1OCwzMiBDMzEuMzgyMDQ1MywzMiAzMS4zMjM4MDI4LDMyLjA5NzYzMzcgMzEuMzE5ODA4OSwzMi4xMTI1OTAxIEwzMC40ODQ3NjQ0LDM0LjM0MDEwODQgQzMwLjQ4NDc2NDQsMzQuMzQwMTA4NCAyOC4yMDQyMjUsMzQuNDc4MTI2NyAyOC4xOTI2MzEzLDM0LjQ3ODk2MTUgQzI4LjA2Nzc0NzgsMzQuNDg4MDAyMiAyOC4wMTUxODgxLDM0LjYwOTUxMzYgMjguMDA2MjQxNywzNC42NTE5MDE4IEMyNy45ODM0MTk0LDM0Ljc2MDI0NTkgMjguMDI4MjE5NiwzNC44NDI4Mjc5IDI4LjA1OTUwODksMzQuODc1NTMxNSBMMjkuODA2MjM1MiwzNi40MDg1OTMzIEwyOS4yNTQ4MjYsMzguNzQzODM1NSBDMjkuMjU0ODI2LDM4Ljc0MzgzNTUgMjkuMjIzMDgwMiwzOC44NjI0ODQ0IDI5LjM2NDE2NzUsMzguOTU2NTQwMSBDMjkuNDk1Mzk1NywzOS4wNDM5ODgyIDI5LjYxMjM1OTksMzguOTcyNDI2NyAyOS42MTIzNTk5LDM4Ljk3MjQyNjcgTDMxLjUzMzE1MTYsMzcuNzIyOTM5MyBMMzMuNDUwNDc0NCwzOC45NzE5OTc0IEMzMy40NTA0NzQ0LDM4Ljk3MTk5NzQgMzMuNTcyOTg0NCwzOS4wNDU5OTE5IDMzLjcwMjMxODMsMzguOTQyNjA5NCBDMzMuODM0Mjk5NiwzOC44MzcxMjc4IDMzLjc4NjgyOTIsMzguNjkxODEwMyAzMy43ODY4MjkyLDM4LjY5MTgxMDMgTDMzLjIzOTY4NzgsMzYuMzkyMTU4IEwzNC45MzY2MTU4LDM0LjkyNTI0MjkgQzM0LjkzNjYxNTgsMzQuOTI1MjQyOSAzNS4wMzMxMzEzLDM0LjgyODgyNTcgMzQuOTg3OTY2LDM0LjY2MDg0NyIgaWQ9IkltcG9ydGVkLUxheWVycy1Db3B5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

                                }
                            }

                            .chart-wrap {
                                width: 0.8333rem;
                                height: 0.025rem;
                                background: rgba(255, 255, 255, 0.2);
                                border-radius: 3px;
                                position: relative;
                                z-index: 1;

                                span {
                                    display: inline-block;
                                    background: #FFAC2C;
                                    height: 0.025rem;
                                    border-radius: 3px;
                                    position: absolute;
                                    z-index: 1;
                                    top: 0;
                                    left: 0;
                                }
                            }
                        }
                    }
                }

                /* //试读，购买 */

            }
        }

        /* //购买 */
        .buy-link {
            margin: 15px 0;

            .text {
                display: inline-block;
                vertical-align: middle;
                font-size: 0.1333rem;
                color: #fff;
                /* // margin-left: 0.1667rem; */
            }

            .price {
                /* // display: inline-block; */
                color: rgba(255, 255, 255, 0.7);
                vertical-align: middle;
                float: right;
                line-height: 0.22rem;
                font-size: 0.1rem;

                &:after {
                    content: '>';
                    display: inline-block;
                    font-size: 0.10rem;
                    color: rgba(255, 255, 255, 0.7);
                    margin-left: 0.01rem;
                }
            }

            .reading {
                .sub-reading {
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 0.06rem;
                    padding: 0.13rem 0.15rem;
                    margin-top: 0.1rem;

                }
            }

            .buy {
                background: rgba(0, 0, 0, 0.1);
                border-radius: 0.06rem;
                padding: 0.13rem 0.15rem;
            }
        }
    }

    h4 {
        font-size: 0.15rem;
        color: #818181;
        margin-bottom: 0.15rem;
    }
</style>