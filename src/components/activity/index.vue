<template>
    <div class="bookActivity">
        <ul>
            <li v-for="(item,index) in list" :key="item.id">
                <a  class="activity">
                    <div class="poster" :style="'background-image:url('+item.pic+')'">
                        <div class="activity-mask"></div>
                        <div class="poster-title">
                            <div class="title">{{item.title}}</div>
                            <div class="sub-title">{{item.subTitle}}</div>
                        </div>
                    </div>
                    <div class='bookActivity-content'>
                        <div class="content-header">
                            <div class="content-title">{{item.content}}</div>
                        </div>
                        <div class="content-info">
                            <div class="join-people">
                                <i class="iconfont icon-ren1"></i>
                                <span>
                                    <em>{{item.people}}</em>人参与
                                </span>
                            </div>
                            <span class="activity-end">{{item.status}}</span>
                        </div>

                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import {activityApi} from "@api/bookstore"
    export default {
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
                let data =await activityApi();
                this.list=data.data.list;
               
            }
        }

    }
</script>
<style lang="scss">
.bookActivity{
    ul {
        padding: 15px 10px;
        box-sizing: border-box;

        li {
            .activity {
                display: block;
                position: relative;
                z-index: 1;
                margin-bottom: 20px;

                .poster {
                    width: 100%;
                    padding: 38px 0 28px;
                    background-position: 50%;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    z-index: 1;
                    background-color: rgba(0, 0, 0, .03);
                    // background: url(https://img9.doubanio.com/view/freyr_page_photo/raw/public/2286.jpg);

                    .activity-mask {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 1;
                        background-color: #000;
                        opacity: .3;

                    }

                    .poster-title {
                        text-align: center;
                        color: #fff;
                        position: relative;
                        z-index: 2;

                        .title {
                            font-size: 21px;
                            font-weight: 500;
                            margin-bottom: 2px;
                            color: #fff;
                            // text-align: center;
                            // color: #fff;
                            // position: relative;
                            // z-index: 2;
                        }

                        .sub-title {
                            font-size: 15px;
                            color: #fff;
                        }
                    }

                }

                .bookActivity-content {
                    width: 100%;
                    height: 105px;
                    box-sizing: border-box;
                    background-color: #fff;

                    .content-header {
                        height: 40px;
                        overflow: hidden;
                        padding: 15px 20px 0;

                        .content-title {
                            font-size: 14px;
                            color: #9b9b9b;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            word-break: break-all;
                        }
                    }

                    .content-info {
                        font-size: 14px;
                        color: #494949;
                        overflow: auto;
                        width: 100%;
                        padding: 10px 20px 20px;
                        box-sizing: border-box;
                        

                        .join-people {
                            float: left;
                            margin-right: 20px;

                            i {
                                vertical-align: top;
                                line-height: 1;
                                color: #ebbb5a !important;
                                // font-size:16px;
                                margin-right:0.0417rem;
                            }

                            span {
                                color: #333 !important;

                                em {
                                    font-weight: 500;
                                }
                            }
                        }

                        .activity-end {
                            color: #fff;
                            font-size: 12px;
                            font-weight: 500;
                            padding: 2px 8px;
                            background-color: #ccc;
                            border-radius: 3px;
                            margin-left: -10px;
                        }
                    }
                }
            }
        }
    }
}
</style>