<template>
    <div class="category">
        <div class="title">
            <h4>分类浏览</h4>
        </div>
        <div class="category-list">
            <ul>
                <li>
                    <a>
                        <span>虚构类图书</span>
                        <i class="iconfont icon-arrow-right arrowRight"></i>
                    </a>
                </li>
                <router-link tag="li" to="/nonfiction">
                    <a>
                        <span>非虚构图书</span>
                        <i class="iconfont icon-arrow-right arrowRight"></i>
                    </a>
                </router-link>
                <li>
                    <a>
                        <span>名著经典</span>
                        <i class="iconfont icon-arrow-right arrowRight"></i>
                    </a>
                </li>
                <router-link tag="li" to="/film">
                    <a >
                        <span>影视原著</span>
                        <i class="iconfont icon-arrow-right arrowRight"></i>
                    </a>
                </router-link>
                <li>
                    <a>
                        <span>新书速递</span>
                        <i class="iconfont icon-arrow-right arrowRight"></i>
                    </a>
                </li>
                <router-link tag="li" to="/highscore">
                    <a>
                        <span>高分图书</span>
                        <i class="iconfont icon-arrow-right arrowRight"></i>
                    </a>
                </router-link>
                <li>
                    <a>
                        <span>热门图书</span>
                        <i class="iconfont icon-arrow-right arrowRight"></i>
                    </a>
                </li>
                <router-link tag="li" to="/top250">
                    <a>
                        <span>top250</span>
                        <i class="iconfont icon-arrow-right arrowRight"></i>
                    </a>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "category"
    }
</script>
<style lang="scss">
    .category {
        margin-right: -0.2083rem;
        padding-left:0.125rem;
        .category-list {
            margin-top: 0.0833rem;

            ul {
                // padding: 0.9333rem 0 1.5667rem;
                color: #eee;
                font-size: 0.1167rem;
                overflow: hidden;

                li {
                    white-space: nowrap;
                    border-top: solid 1px #eee;
                    border-right: solid 1px #eee;
                    float: left;
                    padding-right: 0.125rem;
                    height: 0.3583rem;
                    width: 1.3rem;
                    // box-sizing:border-box;
                    line-height: 0.3583rem;

                    &:nth-child(2n) {
                        border-right: none;
                        padding-left: 0.125rem;
                    }

                    ;

                    &:nth-child(7),
                    &:nth-child(8) {
                        border-bottom: solid 1px #eee;
                    }

                    a {
                        span {
                            color: #42bd56;
                        }

                        .arrowRight {
                            color: #ccc;
                            font-size: 0.1667rem;
                            float: right;
                        }
                    }
                }
            }
        }
    }
    
</style>