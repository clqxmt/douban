<template>
    <div class="container">
        <div class="banner-wrapper">
            <div class="banner">
                <div class="swiper">
                        <van-swipe :autoplay="3000" indicator-color="#e76648" show-indicators="true"	touchable="true">
                                <van-swipe-item>
                                        <img src="https://img1.doubanio.com/view/freyr_page_photo/raw/public/4794.jpg" alt="">
                                </van-swipe-item>
                                <van-swipe-item>
                                        <img src="https://img3.doubanio.com/view/freyr_page_photo/raw/public/4857.jpg" alt="">
                                </van-swipe-item>
                                <van-swipe-item>
                                        <img src="https://img3.doubanio.com/view/freyr_page_photo/raw/public/4731.jpg" alt="">
                                </van-swipe-item>
                                <van-swipe-item>
                                        <img src="https://img3.doubanio.com/view/freyr_page_photo/raw/public/4880.jpg" alt="">
                                </van-swipe-item>
                                <van-swipe-item>
                                        <img src="https://img3.doubanio.com/view/freyr_page_photo/raw/public/4915.jpg" alt="">
                                </van-swipe-item>
                               
                        </van-swipe>
                    
                </div>
            </div>
        </div>
        <div class="list-tab">
           
            <div class="book-tab">
                <!-- <keep-alive> -->
                        <router-link :to="'/bookstore'+item.path" class="tab" v-for="(item,index) in tabList" :key="index">
                            <v-touch tag="a" @tap="handleSwitch(index)" href="javascript:void(0)"  :class="active==index?'active':''">{{item.title}}</v-touch>
                        </router-link>
                <!-- </keep-alive> -->
                <!-- <div class="tab">
                    <v-touch tag="a" @tap="handleSwitch" href="javascript:void(0)">新书</v-touch>
                </div>
                <div class="tab">
                    <v-touch tag="a" @tap="handleSwitch" href="javascript:void(0)">书单</v-touch>
                </div> -->
            </div>
            <div class="cart-tab">
                <a href="" class="cart">
                    <i class="iconfont icon-gouwuche"></i>
                    <span class="cartCount has-count">2</span>
                </a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'vant'
    Vue.use(Swipe).use(SwipeItem);
    export default {
        name:"BookStore",
        data(){
            return{
                active:0,
                tabList:[
                    {
                        title:"活动",
                        path:"/activity",
                        id:0,
                    },
                    {
                        title:"新书",
                        path:"/newbook",
                        id:0
                    },
                    {
                        title:"书单",
                        path:"/topic"
                    }
                ]
            }
        },
        methods: {
            handleSwitch(index){
                console.log(index);
                this.active=index;
            }
        },
    }
</script>
<style lang="scss">
body{
    background-color: #F7F1ED;
}
.container{
    width:100%;

    /* // 轮播图 */
    .banner-wrapper{
        padding-top: 46.66667%;
        position: relative;
        z-index: 1;
        .banner{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            .swiper{
                width: 100%;
                height: 100%;
                margin-left: auto;
                margin-right: auto;
                position: relative;
                overflow: hidden;
                z-index: 1;
                img{
                    width:375px;
                }
                
            }
        }
    }

    /* //选项卡 */
    .list-tab{
        height: 50px;
        background-color: #fff;
        z-index: 2;
        .book-tab{
            display: flex;
            line-height: 50px;
            float: left;
            width: 80%;
            .tab{
                flex: 1;
                text-align: center;
                font-size: 17px;
                a{
                    display: inline-block;
                    height: 50px;
                    color: #9b9b9b;
                }
            }
            .active{
                a{
                    position: relative;
                    z-index: 1;
                    color: rgba(0,0,0,.9);
                    &:after{
                        content: "";
                        display: block;
                        width: 100%;
                        height: 3px;
                        background-color: #e76648;
                        bottom: 0;
                        left: 0;
                        position: absolute;
                        z-index: 1;
                    }
                }
            }
        }
        .cart-tab{
            float: right;
            width: 20%;
            padding-left: 20px;
            margin-top: 15px;
            margin-bottom: 15px;
            margin-left: -1px;
            border-left: 1px solid #9b9b9b;
            box-sizing: border-box;
            .cart{
                position: relative;
                top: 1px;
                line-height: 1;
                text-align: center;
                z-index: 1;
                i{
                    font-size: 20px;
                    color: rgba(0,0,0,.7);
                }
                .cartCount{
                    display: inline-block;
                    min-width: 16px;
                    min-height: 16px;
                    line-height: 1.4;
                    font-size: 10px;
                    color: #fff;
                    border-radius: 50%;
                    line-height: 16px;
                    vertical-align: top;
                    text-align: center;
                    position: relative;
                    top: -1px;
                    left: -2px;
                    z-index: 1;

                }
                .has-count{
                    background-color: #e76648;
                }
            }
        }
    }
}
</style>