import Vue from 'vue'
import Vuex from 'vuex'
import tokenUtils from "@utils/token"
import {findApi} from "@api/login"
import VueRouter from "vue-router";
const crypto = require('crypto');
const router=new VueRouter;

Vue.use(Vuex)

let state={
  is:true,
  token:"",
  username:"",
  password:""
}

let actions={
  async findActions({commit}){
    let data=await findApi();
    console.log(data,111);
    commit("loginMutations",data);
  },
}

let mutations={
  //改变is控制登录页面的注册页面的显示
  changeShow(state){
    state.is=!state.is;
  },

  //监听input中值
  inputMutations(state,params){
    switch(params.type){
      case "username":
        state.username=params.e.target.value;
        break;
      case "password":
        state.password=params.e.target.value;
        break;
    }
  },

  //登录
  loginMutations(state,data){
    let hash=crypto.createHash("sha256").update(state.password).digest('hex');
    console.log(hash,typeof hash,111);
    let has=false;
    for(var i=0;i<data.length;i++){
      console.log(data[i].password,data[i].username,444);
        console.log(hash==data[i].password,333);
        if(state.username==data[i].username && hash==data[i].password)
        {
          let name=state.username;
          let token=tokenUtils.sendToken({name});
          console.log(token,222);
          localStorage.setItem("token",token);
          //document.cookie("token",token);
          this.token=token;
          alert("登录成功");
          
          has=true;
          break;
        }
    }
    if(!has){
      alert("用户名或密码不存在");
    }
  },

  //关闭页面
  closePage(){
    //this.$router.push("/book");
  }

  
}




export default new Vuex.Store({
  state,
  actions,
  mutations
  
})
