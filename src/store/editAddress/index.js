
let state={
  name:"",
  phone:"",
  province:"",
  city:"",
  county:"",
  detailAddress:"",
  address:"",
  hasAddress:false,
  show:false,
  provinceIndex:0,
  cityIndex:0,
}


let mutations={

  //input的值改变时
  inputChange(state,params){
    switch(params.type){
      case "name":
        state.name=params.e.target.value
        break;
      case "phone":
          state.phone=params.e.target.value
          break;
      case "detailAddress":
          state.detailAddress=params.e.target.value
          break;
    }
  },

  //select的值改变时
  selectChange(state,params){
    params.e.stopPropagation();
    switch(params.type){
      case "province":
        state.province=params.e.target.value.match(/\D+/)[0];
        state.provinceIndex=params.e.target.value.match(/\d+/)[0];
        break;
      case "city":
          state.city=params.e.target.value.match(/\D+/)[0];
          state.cityIndex=params.e.target.value.match(/\d+/)[0];
          
          break;
      case "county":
          state.county=params.e.target.value;
          break;
      
    }
    
  },

  //保存地址
  saveAddress(state){
    state.hasAddress=true;
    state.show=false;
    if(state.province===state.city){
      state.address=state.city+"/"+state.county+"/"+state.detailAddress;
    }else{
      state.address=state.province+"/"+state.city+"/"+state.county+"/"+state.detailAddress;
    }
    let address={name:state.name,phone:state.phone,address:state.address}
    localStorage.setItem("address",JSON.stringify(address))
  },

  //控制编辑地址页面的显示和隐藏
  showAddress(state){
    state.show=!state.show;
  },

  //从localStorage中取出地址
  getAddress(state){
    let addressList=JSON.parse(localStorage.getItem("address"));
    // console.log(addressList);
    if(addressList){
      state.hasAddress=true;
      state.name=addressList.name;
      state.phone=addressList.phone;
      state.address=addressList.address;
      console.log(state.name,state.phone,state.address,111);
    }
    
  }
}

export default{
  state,
  mutations,
  
  namespaced:true
}