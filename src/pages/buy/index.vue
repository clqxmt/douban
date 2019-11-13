<template>
    <div>
            <header>
                    <div class="btn-close">关闭</div>
                    <span class="title">在豆瓣购买</span>
                    
                </header>
                <section>
                    <div class="main">
                        <div class="status">当前版本有售</div>
                        <div class="detail">
                            <a class="detail-top" href="https://m.douban.com/book/subject/30396712/">
                                <img src="https://img3.doubanio.com/view/subject/m/public/s33296332.jpg" alt="">
                                <h3>北京联合出版公司(2019年)</h3>
                                <i class="iconfont icon-arrow-right"></i>
                            </a>
                            <a class="detail-price" href="https://market.douban.com/cart/checkout/?utm_campaign=douban_book_subject_buy_btn&sku_id=271469&utm_medium=mobile_web&utm_source=douban">
                                <div class="config">
                                    <p>纸质版</p>
                                    <span>38.40元</span>
                                </div>
                                <div class="desc">满48元包邮</div>
                            </a>
                        </div>
                    </div>
                    
                </section>
    </div>
</template>
<script>
export default{

}
</script>
<style lang="scss">
    body{
    background:#f0f0f0;
}
header{
    position: fixed;
    left: 0;
    top: 0;
    height: 44px;
    width: 100%;
    padding: 14px 0;
    box-sizing: border-box;
    line-height: 17px;
    background: #fff;
    .btn-close{
        float: left;
        color: #42bd56;
        cursor: pointer;
        position: relative;
        padding: 14px 18px;
        margin: -14px 0;
        font-size:18px;
    }
    .title{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        box-sizing: border-box;
        padding: inherit;
        text-align: center;
        font-size:18px;
    }
    
    &:after{
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #E8E8E8;
        content: '';
        position: absolute;
        
    }
}
section{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    margin-top:44px;
    
    .main{
        background:#fff;
        padding-left:0.125rem;
        .status{
            height:0.4583rem;
            border-bottom:1px solid #E8E8E8;
            line-height:0.4583rem;
            font-size:16px;
            font-weight:700;
            color:#999;
        }
        .detail{
            .detail-top{
                padding: 10px 0;
                line-height: 24px;
                text-align: left;
                color: #494949;
                padding-right: 18px;
                display: flex;
                align-items: center;
                img{
                    width:18px;
                    height:24px;
                    margin-right: 10px;
                }
                h3{
                    flex: 1;
                    font-size:16px;
                }
                i{
                    color:#ccc;
                }
            }
            .detail-price{
                padding: 15px 0;
                margin-left: 28px;
                display: block;
                .config{
                    line-height: 1;
                    overflow: hidden;
                    position: relative;
                    p{
                        color: #42bd56;
                        font-size:0.1333rem;
                    }
                    span{
                        color: #494949;
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 38%;
                        font-size:16px;
                    }
                }
                .desc{
                    font-size: 12px;
                    line-height: 1;
                    color: #818181;
                    margin-top: 5px;
                    font-weight: 300;
                }
            }
        }
    }
}
</style>