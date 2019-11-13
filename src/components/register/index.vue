<template>
    <div>
        <header>
            <a href="" class="iconfont icon-cha cancel"></a>
            <h3>注册账号</h3>
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
                        <input type="text" placeholder="手机号 / 邮箱" class="sign">
                        <input type="password" placeholder="密码" class="password">
                    </form>
                    <button>注册</button>
                    <div class="sign-method">
                        <div class="sign-switch">
                            <v-touch tag="a" @tap="handleChange()" class="nopassword">账号密码登录</v-touch>
                        </div>

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
        name:"register",
        methods:{
            handleChange(){

                this.$emit("handle",true);
            }
        }
    }
</script>
<style lang="scss">

</style>