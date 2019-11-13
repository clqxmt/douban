<template>
    <div>
        <ul>
            <li>
                <a  class="activity">
                    <div class="poster">
                        <div class="activity-mask"></div>
                        <div class="poster-title">
                            <div class="title">#阅无止境，一鹿相伴第二季#</div>
                            <div class="sub-title">传统艺术里的中国味道</div>
                        </div>
                    </div>
                    <div class='content'>
                        <div class="content-header">
                            <div class="content-title">来一起漫游艺术世界</div>
                        </div>
                        <div class="content-info">
                            <div class="join-people">
                                <i class="iconfont icon-ren1"></i>
                                <span>
                                    <em>117</em>人参与
                                </span>
                            </div>
                            <span class="activity-end">已结束</span>
                        </div>

                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
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
                    background: url(https://img9.doubanio.com/view/freyr_page_photo/raw/public/2286.jpg);

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
                            text-align: center;
                            color: #fff;
                            position: relative;
                            z-index: 2;
                        }

                        .sub-title {
                            font-size: 15px;
                            color: #fff;
                        }
                    }

                }

                .content {
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
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-break: break-all;

                        .join-people {
                            float: left;
                            margin-right: 20px;

                            i {
                                vertical-align: top;
                                line-height: 1;
                                color: #ebbb5a !important;
                                // font-size:50px;
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
</style>