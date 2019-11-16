import tokenUtils from "@utils/token"
import {findApi} from "@api/login"
import VueRouter from "vue-router";
const crypto = require('crypto');
const router=new VueRouter();
import MessageBox from "@lib/messageBox/index.js"



let state={
  is:true,
  token:"",
  username:"",
  password:""
}

let actions={
  async findActions({commit}){
    let data=await findApi();
    
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
    
    let has=false;
    for(var i=0;i<data.length;i++){
      
        if(localStorage.getItem("token"))
        {
          //alert("已登录");
          MessageBox({
            content:"已登录",
            confirm:function(){
              router.push({name:"book"});
            }
          })
          return;
        }else if(state.username==data[i].username && hash==data[i].password)
        {
            let name=state.username;
            let token=tokenUtils.sendToken({name});
            localStorage.setItem("token",token);
            this.token=token;
            //alert("登录成功");
            has=true;
            MessageBox({
              content:"登录成功",
              confirm:()=>{
                router.back();
              }
            })
            break;
        }
    }
    if(!has){
      MessageBox({
        content:"用户名或密码不存在",
      });
    }
  },

  //关闭页面
  closePage(){
    router.back();
  }

  
}

export default{
  state,
  actions,
  mutations,
  namespaced:true
}
