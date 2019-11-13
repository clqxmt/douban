<template>
    <div>
        <header>
            <a href="" class="iconfont icon-cha cancel"></a>
            <h3>登录豆瓣</h3>
            <p>新手机号将自动注册，请详读
                <a href="https://accounts.douban.com/passport/agreement">豆瓣使用协议、隐私政策</a>
            </p>
        </header>
        <section>
            <div class="main">
                <!-- <div class="from">
                                <div class="from-phone"></div>
                                <div></div>
                            </div> -->

                <div class="sign">
                    <form action="">
                        <input type="text" placeholder="手机号 / 邮箱" 
                        class="sign" v-model="username">
                        <input type="password" placeholder="密码" 
                        class="password" v-model="pwd">
                    </form>
                    <v-touch tag="button" @tap="handleSign()" >登录</v-touch>
                    <div class="sign-method">
                        <div class="sign-switch">
                            <v-touch @tap="handleChange($event)" tag="a" class="nopassword">免密码登录</v-touch>
                            <a  class="sign-abroad">海外手机登录</a>
                        </div>
                        <a href="" class="findPassword">找回密码</a>
                    </div>
                </div>
                <div class="sign-three">
                    <p>第三方登录</p>
                    <div class="sign-three-switch">
                        <a class="iconfont 
                                     weixin" href="https://www.douban.com/accounts/weixin"></a>
                        <a class="iconfont icon-unie61d weibo"
                            href="${ACCOUNTS_DOUBAN}/connect/sina_weibo/?from=None&amp;redir=${redir}&amp;fallback="></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: "login",
        data(){
            return{
                is:true,
                username:"",
                pwd:"",
            }
        },
        methods:{
            handleChange(e){
                e.preventDefault();
                console.log(111);
                // this.is=false;
                this.$emit("handle",false);
            },
            handleSign(){
                // localStorage.setItem("")
            }
        },
    }
</script>
<style lang="scss">
    a {
        color: #42bd56;
    }

    header {
        margin-right: 12px;
        margin: 30px 0;
        /* // font-size: 30px; */
        /* // font-weight: 400; */
        line-height: 1;
        text-align: center;

        .cancel {
            position: absolute;
            top: 15px;
            left: 15px;
            color: #333;
        }

        h3 {
            font-size: 30px;
            font-weight: 400;
            /* // line-height: 1; */
            /* // text-align: center; */
            margin-bottom: 3px;
        }

        p {
            display: block;
            margin-top: 10px;
            color: #bababa;
            font-size: 13px;

            a {
                display: inline;
            }
        }
    }

    section {
        .main {
            .sign {
                padding-left: 15px;

                form {
                    /* // border-radius: 8px; */
                    /* // border:1px solid rgba(0,0,0,.12); */
                    width: 345px;

                    input {
                        border: 1px solid;
                        border-color: rgba(0, 0, 0, .12);
                        border-top: 0;
                        border-radius: 0;
                        box-shadow: none;
                        padding: 10px 40px 10px 10px;
                        color: rgba(0, 0, 0, .7);
                        font-size: 15px;
                        line-height: 24px;
                        width: 100%;
                        box-sizing: border-box;
                        position: relative;
                        caret-color: #42bd56;
                        outline: none;
                    }

                    .sign {
                        border-top: 1px solid;
                        border-color: rgba(0, 0, 0, .12);
                        border-top-left-radius: 8px;
                        border-top-right-radius: 8px;

                    }

                    .password {
                        border-bottom-left-radius: 8px;
                        border-bottom-right-radius: 8px;
                    }
                }

                button {
                    display: block;
                    height: 44px;
                    width: 345px;
                    border-radius: 3px;
                    color: #fff;
                    font-size: 17px;
                    font-weight: 400;
                    line-height: 44px;
                    text-align: center;
                    outline: 0;
                    background-color: rgba(66, 189, 86, .5);
                    border: none;
                    margin-top: 20px;

                }

                .sign-method {
                    margin: 18px 0 20px;
                    overflow: hidden;
                    font-size: 15px;
                    display: flex;
                    justify-content: space-between;
                    margin-right: 15px;

                    .sign-switch {
                        display: flex;

                        .nopassword {
                            margin-right: 12px;
                        }
                    }

                    .findPassword {

                        color: rgba(0, 0, 0, .7);
                    }
                }
            }

            .sign-three {
                float: none;
                font-size: 0;
                text-align: center;
                margin-top: 140px;

                p {
                    margin-bottom: 15px;
                    color: #bababa;
                    font-size: 13px;
                    line-height: 1;
                }

                .sign-three-switch {
                    a {
                        display: inline-block;
                        vertical-align: middle;
                        width: 66px;
                        height: 66px;
                        background-position: 50% 50%;
                        background-repeat: no-repeat;
                        background-color: transparent;
                        background-size: 100%;
                        overflow: hidden;
                        line-height: 66px;
                        font-size: 0;
                        margin: 0 15px;
                    }

                    .weixin {
                        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='58' height='58' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect fill='%23FFF' width='58' height='58' rx='29'/%3E%3Cpath d='M35.154 39.38c-4.706 0-8.52-3.178-8.52-7.1 0-3.922 3.814-7.1 8.52-7.1 4.706 0 8.521 3.178 8.521 7.1 0 2.174-1.173 4.12-3.02 5.423-.193.136-.08.879.34 2.229a.288.288 0 0 1-.134.337.375.375 0 0 1-.397-.02c-1.35-.934-2.183-1.356-2.5-1.263-.88.256-1.826.395-2.81.395zm2.893-8.257a1.136 1.136 0 1 0 0-2.272 1.136 1.136 0 0 0 0 2.272zm-5.778 0a1.136 1.136 0 1 0 0-2.272 1.136 1.136 0 0 0 0 2.272zm3.425-6.7a11.079 11.079 0 0 0-.54-.013c-5.146 0-9.373 3.564-9.373 8.047 0 .744.116 1.462.334 2.144a12.065 12.065 0 0 1-4.168-.536c-.342-.108-1.313.388-2.915 1.489a.418.418 0 0 1-.472 0 .367.367 0 0 1-.137-.43c.567-1.53.71-2.395.43-2.597-2.193-1.581-3.581-3.923-3.581-6.537 0-4.762 4.61-8.622 10.296-8.622 5.047 0 9.246 3.041 10.126 7.055zm-6.762.014c.745 0 1.349-.611 1.349-1.365s-.604-1.366-1.35-1.366c-.744 0-1.348.612-1.348 1.366 0 .754.604 1.365 1.349 1.365zm-6.935 0c.745 0 1.349-.611 1.349-1.365s-.604-1.366-1.35-1.366c-.745 0-1.349.612-1.349 1.366 0 .754.604 1.365 1.35 1.365z' fill='%2334C94B' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E");
                    }

                    .weibo {
                        font-size: 30px;
                        color: rgb(240, 77, 81);
                    }
                }
            }
        }
    }
</style>