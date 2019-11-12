<template>
    <div class="linkApp">
        <a href="/home_guide" class="dou">
            <img src="https://img3.doubanio.com/f/frodo/144e6fb7d96701944e7dbb1a9bad51bdb1debe29/pics/app/logo.png" alt="">
        </a>
        <a class="info" href="https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2Fsubject%23book">
            <h3>豆瓣App</h3>
            <p>记录你的书影音生活</p>
        </a>
        □
        <a class="openApp" href="https://www.douban.com/doubanapp/dispatch?copy_open=1&from=mdouban&download=1&model=B&copy=1&page=&channel=m_ad_nav&uri=%2Fsubject%23book">打开App</a>
    </div>
</template>
<script>
export default{
    name:"LinkApp",
}
</script>
<style lang="scss">
.linkApp{
        display:flex;
        align-items: center;
        height:0.5rem;
        width:100%;
        padding: 0 0.15rem;
        box-sizing:border-box;
        background-color: #f7f7f7;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        margin-bottom:0.0833rem;
        .dou{
            margin-right: 0.0833rem;
            img{
                display:block;
                width: 0.325rem;
                height: 0.325rem;
            }
        }
        .info{
            flex:1;
            h3{
                font-size: 0.125rem;
                color: #191919;
                font-weight:normal;
            }
            p{
                font-size: 0.0917rem;
                color: #818181;
            }
        }
        .openApp{
            background-color: #42bd56;
            color: #fff;
            width: 0.6667rem;
            height: 0.25rem;
            border-radius: 0.125rem;
            text-align: center;
            font-size: 0.1083rem;
            line-height: 0.25rem;
        }
    }
</style>