<template>
    <div>
        <header>
            <div class="address">收货地址</div>
            <div>
                <div>
                    <div></div>
                    <div class="addAddress">
                        <a href="javascript:void(0)">
                            <v-touch 
                            tag="i"
                            @tap="showAddress()"
                            class="iconfont icon-add-fill"></v-touch>
                            <span>新建地址</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <a href="" class="title">豆瓣书店</a>
            <div class="main">
                <div class="book">
                    <a href="https://book.douban.com/subject/30396712/" class="book-img">
                        <img src="https://img3.doubanio.com/view/dianpu_product_item/small/public/p2052084.jpg" alt="">
                    </a>
                    <div class="book-info">
                        <p class="name">
                            <a href="https://book.douban.com/subject/30396712/">尸人庄谜案</a>
                        </p>
                        <p>数量：1</p>
                    </div>
                </div>
                <span class="price">￥38.40</span>
            </div>
            <div class="count-info">
                <div class="coupon">
                    <span>优惠券</span>
                    <em>暂无可用优惠券</em>
                </div>
                <div class="subtotal">
                    <span>小计</span>
                    <em>￥38.40</em>
                </div>
                <div class="fare">
                    <span>运费</span>
                    <em>￥5.00</em>
                </div>
            </div>
            <div class="bill">
                <div class="bill-open">
                    <span class="bill-open-left">
                        <i></i>
                        <span>我要开发票</span>
                    </span>
                    <i class="iconfont icon-arrow-right rightArrow"></i>
                </div>
                <div class="contact">*如有问题，可联系客服：400-835-3331 转4。</div>
            </div>
        </section>

        <!-- 支付方式 -->
        <div class="pay-method">
            <h3>选择支付方式</h3>
            <ul>
                <li class="pay-weixin pay-item">
                    <i class="weixin-logo"></i>
                    <span class=" pay-text">使用微信支付</span>
                    <span class="switch-btn"></span>
                </li>
                <li class="pay-zhifubao pay-item">
                    <i class="zhifubao-logo"></i>
                    <span class=" pay-text">使用支付宝支付</span>
                    <span class="switch-btn"></span>
                </li>
            </ul>
        </div>

        <!-- 支付金额 -->
        <div class="account">
            <div class="account-money">
                <span>应付：<em>￥43.40</em></span>
            </div>
            <a href="" class="address">请填地址</a>
        </div>

        <transition name="showaddress">
            <div class="transition" v-show="show">
                <EditAddress @handle="isShow"></EditAddress>
            </div>  
        </transition>
    </div>
</template>
<script>
   
    import EditAddress from "@components/address"
    export default {
        name:"orderInfo",
        components:{
            EditAddress
        },
        data(){
            return{
                show:false
            }
        },
        methods:{
            showAddress(){
                console.log(111);
                this.show=true;
            },
            isShow(params){
               
                this.show=params;
            }
        }
    }
</script>
<style lang="scss">
    body {
        background-color: #f9f9f9;
    }

    header {
        margin-bottom: 10px;

        .address {
            font-size: 14px;
            font-weight: 700;
            background-color: #fff;
            color: rgba(0, 0, 0, .9);
            padding: 15px;
            border-bottom: 1px solid #f9f9f9;
            border-color: #f9f9f9;
        }

        .addAddress {
            padding: 30px 0;
            background-color: #fff;
            color: #dd1944;
            text-align: center;

            a {
                color: #d8d8d8;
                display:inline;
                i {
                    font-size: 21px;
                    display: block;
                    line-height: 1;
                    color: #6e6e6e;
                    margin-bottom: 10px;
                }

                span {
                    font-size: 15px;
                    color: #dd1944;
                }
            }
        }
    }

    section {
        margin-bottom: 10px;

        .title {
            padding: 15px;
            border-bottom: 1px solid #f9f9f9;
            border-color: #f9f9f9;
            background-color: #fff;
            font-size: 14px;
            font-weight: 700;
            color: rgba(0, 0, 0, .9);
        }

        .main {

            background-color: #fff;
            padding: 15px;
            border-width: .5px;
            border-color: #f9f9f9;
            position: relative;

            .book {
                display: flex;
                position: relative;
                z-index: 1;

                .book-img {
                    width: 80px;
                    height: 80px;
                    display: block;

                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }

                .book-info {
                    padding-left: 20px;
                    flex: 1;

                    .name {
                        font-size: 14px;
                        margin-bottom: 6px;

                        a {
                            color: rgba(0, 0, 0, .9);
                        }
                    }

                    p {
                        font-size: 12px;
                        color: #6e6e6e;
                        max-width: 70%;
                        margin-right: 8px;
                    }
                }
            }

            .price {
                font-size: 14px;
                position: absolute;
                right: 15px;
                bottom: 5px;
                color: rgba(0, 0, 0, .9);
                font-weight: 500;
                z-index:10;
            }
        }

        /* //优惠券 */
        .count-info {
            padding: 0 15px;
            background-color: #fff;

            .coupon,
            .subtotal,
            .fare {
                font-size: 14px;
                line-height: 20px;
                clear: both;
                color: rgba(0, 0, 0, .9);
                overflow: hidden;
                padding: 10px 0;
                border-bottom: 1px solid #f9f9f9;
                border-color: #f9f9f9;

                span {
                    float: left;
                }

                em {
                    float: right;
                    white-space: nowrap;
                    color: rgba(0, 0, 0, .9);
                }
            }
        }

        /* //发票 */
        .bill {
            padding: 0 15px;
            margin-top: 10px;

            .bill-open {
                font-size: 14px;
                line-height: 20px;
                color: rgba(0, 0, 0, .9);
                clear: both;
                overflow: hidden;
                padding: 10px 15px;
                border-bottom: 1px solid #f9f9f9;
                border-color: #f9f9f9;
                background-color: #fff;

                .bill-open-left {
                    float: left;

                    i {
                        border-width: 1px;
                        font-size: 13px;
                        line-height: 13px;
                        height: 13px;
                        width: 13px;
                        margin-top: -1px;
                        margin-right: 5px;
                        border-style: solid;
                        // border-color: border-color(#6e6e6e);
                        border-color: #8fb88b;
                        background-color: #fff;
                        color: #fff;
                        display: inline-block;
                        vertical-align: middle;
                        text-align: center;
                        position: relative;
                    }

                }

                .rightArrow {
                    float: right;
                    white-space: nowrap;
                }
            }

            .contact {
                display: block;
                font-size: 12px;
                color: rgba(0, 0, 0, .9);
                background-color: #fff;
                padding: 10px 15px;
                /* padding-right:0; */
            }
        }
    }


    /* // 选择支付方式 */
    .pay-method {
        margin-top: 10px;
        overflow: hidden;
        margin-bottom: 60px;

        h3 {
            padding: 15px;
            font-size: 15px;
            font-weight: 700;
            color: rgba(0, 0, 0, .9);
            background-color: #fff;
            border-bottom: 1px solid #f9f9f9;
            border-color: #f9f9f9;
        }

        ul {
            padding-bottom: 10px;

            /* //微信支付和支付宝支付的公共样式 */
            .pay-item {
                padding: 8px 30px 8px 15px;
                background-color: #fff;
                position: relative;
                z-index: 1;
                font-size: 14px;
                color: rgba(0, 0, 0, .9);
                border-bottom: 1px solid #f9f9f9;
                border-color: #f9f9f9;
                bottom:0;
                i {
                    margin-right: 5px;
                    height: 22px;
                    width: 22px;
                    display: inline-block;
                    vertical-align: middle;
                    background-size: cover;
                    background-position: 50%;
                    background-repeat: no-repeat;
                }


                .pay-text {
                    display: inline-block;
                    vertical-align: middle;
                }

                .switch-btn {
                    right: 15px;
                    position: absolute;
                    z-index: 1;
                    top: 20%;
                    border-width: 1px;
                    height: 15px;
                    width: 15px;
                    border-style: solid;
                    background-color: #fff;
                    border-radius: 100%;
                    display: inline-block;
                    vertical-align: middle;

                }
            }

            /* //微信支付下的logo和btn */
            .pay-weixin {
                .weixin-logo {
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAxVJREFUSA2tVU1IVFEUPue9GTHxJ4qghVJQKeVCM2c0mhknI12EDoIuolUFBi0CcyVFDUWbkha5rNy0qMDFOEmkRplTZCbZojHTQEjMaBES/sDMe/d07sw8Z57j0ywvPO659zvne/d+59x7Ebg1hZsyZr9OtQFgAwIUE5FNzm+wRRHxEyB1qTnZNweODmgoiX9MToUIwLlBMkt3/sngzvrd1eq22qzL7HXK0vPfgF0LE3PzipTi3+LXiSJssMU0tvJDnEECqaPGiyjkXOxhV17Q+o0Qim2rJY81ewaktIZ878ZSabzdh/dqoHPixWkg4HWt0Qjs6AqUcy6TjYmvh3zvryRn0i1Pd/kZQXCXkTV2gUsmEAF7B+uHr0o6V8B5yR1w3DKoXUHnSR53yfGgb6QTEDsMzKo3kfMW2nnl8Z0gTKCC40YgkvINET7KcX33kRyV8JWBWfUmWTJUe/6LurczVs5VPU63roNDJZhCVf2sA+Qi6QcFUQsQFZnjcMl0EoWi7WCHVcndgYpGoePsa9/QbTMJDDePNHeOfx9tF4IupGImWYROjamgYXt6HQUKkB7yDb3xPq3Il/pLzE9+xRV0nJ/+Oa1U151o4frpN2JkbyInwlb3k8qyVIeYHUF3UX5pj7RRE3lKvN4hPBa2MUFR1B7N9KNfKIj3UmNNmseCAeZUVI4P+IZHDEdP0HmWq+i+MbbqPT2V+4WmJc7GCs1lEJfKVl1RRFXA2SAQ9ikEk5ywQzW9NY/6avsWrIjlvBCiNBU3JTQBREjonTpQifwTV0Tsj4tLczLRNxI+ad2x587tkXnyx+s4Dps0T0RkcFmVpEWDuMbynJNJXIl5X3qzIwvUT0CFyxiClqb5Mmhh8EH6wKsLIqlhApHDF0yBDelxlHCUt7glGYa/pCxR/uzJybUtIpDVVEZxwaRyoAG2IZCWKgmXZZSrh5+m/2x8s2YycbaJhmBWkW+eaXKzBogPFPmY8tEIbRZnjIdPqi03607swuds2/Tfixc52/LJO8BC/nUOlhfFGjPZFyB8qOZldcjX/w9dUyFtxcmSmgAAAABJRU5ErkJggg==);

                }

                .switch-btn {
                    &:after {
                        content: "";
                        margin-top: -4.5px;
                        margin-left: -4.5px;
                        height: 9px;
                        width: 9px;
                        background-color: #44883e;
                        border-radius: 100%;
                        left: 50%;
                        top: 50%;
                        position: absolute;
                        z-index: 1;
                    }
                }
            }

            /* //支付宝支付下的logo */
            .pay-zhifubao {
                .zhifubao-logo {
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAzVJREFUOBGtVV1IVFEQnjn3qoVu/myyalAIWyIUFPXQaxSlFYi1ChE9FIFIEAg9BAUF9RD1UhRERfUQFa39IElUVPQSUVEPiUS5FVmtbe2mpIuJe8/0HfHq3W5uBh24d+7M+eabOTPnnMuEEb6VmpVO0wFNUk/EYRJhY5/2YBYiiTGp20WFsje2NviDDengkDwHSXjaRLmBsUARL1VDaT74H0lNyLDhVEK6LncCKA5TJylabh4mTv4NbzjtsZoSSpRjCHEsEQk+MZBQe3L0L3CgOGz7GsXUg1bEs+Iwx1wdGT9Go4KubiRaXYVg8ydsaD4yzh4gvaeUdddrVVreujrmz7CyZri6kVo7q7HmSWLYfMQAtDraafU6OsxHobcZm2Y5R9qp9M7/6dtHbEDMajee+64D207C/bYtq15rznN10ZmdSGaLq7uSQ9Gkr3M4HcOoW8YF+aTQzUTz7M3GXhFNdQnJwt8xvozRnO/E1I1mjABchNZUQ4a8jor4gtErrydrdcZPauYmiZkHLOEdC8pLow9XcFa2866lK0edkRWob4MI1cabyu6YMy8O78Lb8PjGRCksZTU65PSx5jZA58HxM9DvcP67yqjkRnczD3m953YOlI4MZz6AN+C1u99jxCB5YSu1NSP6KTIqcCc9coiZozbbhz5Fintce02HBAZH+9drkUbUuc4bRBkQGvXKIVk5BamBFGEVy/K189UoVdHvc4183cCD8UjZ5S9NweZAYbCclVqHPXUaPeobLwU/slTedkdGu3ASJ+tuvDGwogdiF2xKbAh8rbya2qg1XYH5mSI53NIU7NjPrMeA4y/ByXOJNVtqleXon+jaEVyvSzBnGtilSJ1qaSq5aJxDV1PbQHESy873EOEepmNSHDyfWMNp186h9hTud0Qg+oZD0RaPlF5CPbNaPSfav9ghvQeEEdfRJ7GrzHHHVjwRby7rBXHyDYo+cc6xj98Ly0sW9RHVr0CEGshFPqIpDexg6qxtfie4PyeIkVU1AlXDNqVr7gmxsPIRZf5RAMZyg/9hFtdu/ky1T5kfn/lHIcpxtL8HN1BWfadFCR9TQqz+RJ7kLe9dX9L/C2T+One1JOIVAAAAAElFTkSuQmCC);

                }
            }

        }
    }

    /* // 付款 */
    .account {
        bottom: 0;
        position: fixed;
        z-index: 10;
        left: 0;
        right: 0;
        transition: all .8s ease-out;
        background-color: #fff;
        padding-left: 15px;
        box-sizing: border-box;
        display: flex;
        height: 46px;
        line-height: 46px;
        color: rgba(0, 0, 0, .9);

        .account-money {
            font-weight: 700;
            font-size: 14px;
            color: rgba(0, 0, 0, .9);
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;

            span {
                em {
                    color: #dd1944;
                }
            }
        }

        .address {
            font-size: 15px;
            background-color: #d8d8d8;
            width: 120px;
            line-height: 45px;
            display: block;
            text-align: center;
            color: #fff;
        }
    }

    .transition{
        position:absolute;
        bottom:0;
        height:100%;
        width:100%;
    }
    .showaddress-enter,.showaddress-leave-to{
        bottom:-100%;
    }
    .showaddress-enter-active,.showaddress-leave-active{
        transition:all 0.3s;
    }
</style>