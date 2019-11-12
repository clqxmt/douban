<template>
    <div class="downApp">
        <div>
            <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png"
                alt="">
            <b>豆瓣</b>
        </div>
        <a
            href="https://www.douban.com/doubanapp/card/log?category=book_home&cid=&action=click_download&ref=https%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_book_home%26direct_dl%3D1">去
            App Store 免费下载 iOS 客户端</a>
    </div>
</template>>
<script>
    export default {

    }
</script>
<style lang="scss">
    .downApp {
        padding: 0 0 20px 0;
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
        font-size: 15px;

        /* // position: absolute;
        // bottom:0;
        // left:0;
        // height:0.8833rem; */
        div {
            margin: 0 auto 15px;
            overflow: hidden;
            text-align: left;
            font-size: 14px;
            display: inline-block;
            color: #191919;

            img {
                float: left;
                margin-right: 12px;
                width: 0.4rem;
                height: 0.4rem;
            }

            b {
                font-size: 24px;
                font-weight: normal;
                line-height: 48px;
            }
        }

        a {
            color: #42bd56;
        }
    }
</style>