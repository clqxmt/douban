<template>
    <div>
        <header class="login-header">
            <v-touch 
            tag="a"
            @tap="closePage()"
            class="iconfont icon-cha cancel"></v-touch>
            <h3>注册账号</h3>
            <p>新手机号将自动注册，请详读
                <a href="https://accounts.douban.com/passport/agreement">豆瓣使用协议、隐私政策</a>
            </p>
        </header>
        <section class="login-section">
            <div class="main">
                <!-- <div class="from">
                                <div class="from-phone"></div>
                                <div></div>
                            </div> -->

                <div class="sign">
                    <form action="">
                        <input type="text" placeholder="手机号 / 邮箱"
                        @input="inputMutations({type:'username',e:$event})"
                        class="sign">
                        <input type="password" placeholder="密码" 
                        @input="inputMutations({type:'password',e:$event})"
                        class="password">
                    </form>
                    <v-touch tag="button"
                        @tap="handleRegister"
                    >注册</v-touch>
                    <div class="sign-method">
                        <div class="sign-switch">
                            <v-touch tag="a" @tap="changeShow" class="nopassword">账号密码登录</v-touch>
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
    import {mapState,mapMutations} from "vuex"
    import {findUserApi,registerApi} from "@api/login"
    import crypto from "crypto"
    import MessageBox from "@lib/messageBox/index.js"
    export default {
        name:"register",
        computed:{
            ...mapState({
                username:state=>state.login.username,
                password:state=>state.login.password,
               
            })
        },
        methods:{
           ...mapMutations({
                changeShow:"login/changeShow",
                inputMutations:"login/inputMutations",
                closePage:"login/closePage"
           }),
           async handleRegister(){
                let has=true;
                let _this=this;
               let data=JSON.parse(localStorage.getItem("user"));
               
               for(var i=0;i<data.length;i++){
                    if(this.username===data[i]["username"]){
                        has=false;
                        MessageBox({
                            content:"用户已存在",
                            confirm:function(){
                                _this.$store.commit("login/changeShow");
                            }
                        });
                        break;
                    }
               }
               if(has){
                    
                    let hash=crypto.createHash("sha256").update(this.password).digest('hex');
                    let data=await registerApi(this.username,hash);
                    console.log(data);
                    if(data.data.status==1){
                        MessageBox({
                            content:"注册成功",
                            confirm:function(){
                                _this.$store.commit("login/changeShow");
                                
                            }
                        })
                    }
               }
           }
        }
    }
</script>
<style lang="scss">

</style>