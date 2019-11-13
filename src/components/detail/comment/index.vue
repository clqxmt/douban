<template>
    <div>
        <div class="book-comment">
            <h4>短评</h4>
            <div class="comment-list">
                <div class="data">
                    <ul>
                        <li v-for="(item,index) in commentList" :key="index">
                            <div class="desc">
                                <a href="">
                                    <img :src="item.user.avatar" >
                                </a>
                                <div class="user-info">
                                    <div class="user-name">
                                        {{item.user.name}}
                                    </div>
                                    <span class="rating-stars">
                                        <span v-for="id of 5" :key="id"
                                        class="rating-star" 
                                        :class="id<=item.rating.star_count?'rating-star-full':'rating-star-gray'">
                                        </span>
                                    </span>
                                    <span class="date">3个月前</span>
                                </div>
                            </div>
                            <div class="comment-content">
                                <p class="LinesEllipsis clamped ">{{item.comment}}<span class="LinesEllipsis-ellipsis">...</span><span class="LinesEllipsis-readmore" style="color: rgb(66, 189, 86);">展开</span>
                                </p>
                            </div>
                            <div class="giveUp">
                                <span class="left">
                                    <i class="iconfont icon-zan"></i>
                                    <span class="text">{{item.vote_count}}</span>
                                </span>
                                <span class="right">
                                    <i class="iconfont icon-shenglvehao"></i>
                                </span>
                            </div>
                        </li>
                    </ul>
                    <a href="" class="show-all">打开App，看更多热门短评</a>
                </div>
            </div>
        </div>
        <div class="split"></div> 
    </div>
</template>
<script>
    import {bookComment} from "@api/detail.js"
export default{
    name:"Comment",
    
    data(){
        return{
            commentList:[],
            id:"",
        }
    },
    async created(){
        //http://localhost:8080/#/detail/34434309
        this.id=window.location.href.match(/\b\w+$/)[0];
        console.log(this.id,444);
        let data=await bookComment(this.id);
        this.commentList=data.interests;
        console.log(this.commentList,"comment");
    }
}
</script>
<style lang="scss">
.book-comment{
            padding: 0.15rem 0.15rem 0;
        .comment-list{
            
            .data{
                ul{
                    margin-left: -0.15rem;
                    margin-right: -0.15rem;
                    border-bottom: 0.01rem solid #EFEFEF;
                    li{
                        padding: 0.15rem 0 0 0.15rem;
                        word-wrap: break-word;
                        overflow: hidden;
                        &:first-child{
                            padding-top:0;
                        }
                        &:after{
                            content: '';
                            height: 1px;
                            left: 34px;
                            right: 0;
                            position: absolute;
                            // bottom: 0;
                            width: 100%;
                            background: #E8E8E8;
                        }
                        .desc{
                            font-size: 0;
                            line-height: normal;
                            margin-bottom: 5px;
                            color: #494949;
                            position: relative;
                            a{
                                display: inline;
                                overflow: hidden;
                                text-decoration: none;
                                color: #494949;
                                img{
                                    width: 20px;
                                    border-radius: 50%;
                                    vertical-align: text-top;
                                    margin-right: 10px;
                                    float: left;
                                }
                            }
                            .user-info{
                                margin-left: 30px;
                                line-height: 21px;
                                .user-name{
                                    font-size: 15px;
                                    display: inline-block;
                                    vertical-align: middle;
                                    margin-right: 5px;
                                }
                                .rating-stars{
                                    vertical-align: middle;
                                    line-height: 1;
                                    display: inline-block;
                                    font-size:0;
                                }
                                .date{
                                    font-size: 11px;
                                    color: #c0c0c0;
                                    display: inline-block;
                                    vertical-align: middle;
                                    position: relative;
                                    top: 2px;
                                    margin-left: 5px;
                                }
                            }
                        }
                        .comment-content{
                            margin-left: 30px;
                            font-size:0;
                            max-height:0.525rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            /* position: relative; */
                            .LinesEllipsis{
                                line-height: 21px;
                                color: #494949;
                                white-space: pre-wrap;
                                padding-right: 10px;
                                font-size: 15px;
                                max-height:0.525rem;
                                position: relative;
                                
                            }
                            
                            
                        }
                        .giveUp{
                            // display:flex;
                            // justify-content: space-between;
                            height: 22px;
                            margin-top: 10px;
                            margin-left: 30px;
                            padding-bottom: 0.15rem;
                            border-bottom: 0.01rem solid #EFEFEF;
                            .left {
                                // display: inline;
                                margin-right: 20px;
                                font-size: 14px;
                                cursor: pointer;
                                float: left;
                                i{
                                    float:left;
                                    color: #ccc;
                                }
                                .text{
                                    color: #ccc;
                                    margin-left: 3px;
                                    position: relative;
                                    left: 0;
                                    top: -3px;
                                }
                            }
                            .right{
                                // display: inline;
                                margin-right: 20px;
                                font-size: 14px;
                                cursor: pointer;
                                float: right;
                                i{
                                    color: #ccc;
                                    font-size:20px;
                                }
                            }
                        }
                    }
                }
                .show-all{
                    margin: 15px auto;
                    display: block;
                    font-size: 15px;
                    text-align: center;
                    color: #42bd56;
                }
            }
        }
        .split{
            width: 100%;
            height: 0.0833rem;
            background: #EFEFEF;
        }
    }

</style>