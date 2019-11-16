import Vue from 'vue'
import Vuex from 'vuex'
import login from "./login"
import editAddress from "./editAddress"

Vue.use(Vuex)

// let state={



// /**编辑地址 */
//   consignee:"",
//   phone:"",
//   provinc:"",
//   city:"",
//   county:"",
//   detailAddress:"",
//   address:"",
//   hasAddress:false,
  
// }
// let mutations={


// /*编辑地址 */
//   selectChange(state,parmas){
//     switch(params.type){
//       case "provinc":
//         state.provinc=params.e.target.value
//         break;
//       case "city":
//           state.city=params.e.target.value
//           break;
//       case "county":
//           state.county=params.e.target.value
//           break;
//       case "detailAddress":
//           state.detailAddress=params.e.target.value
//           break;
//     }
//   },
//   saveAddress(state){
//     state.hasAddress=true;
//     if(state.provinc===state.city){
//       state.address=state.city+"/"+state.county+"/"+state.detailAddress;
//     }else{
//       state.address=state.provinc+"/"+state.city+"/"+state.county+"/"+state.detailAddress;
//     }
//   }
// }


const store = new Vuex.Store({
  // state,
  // actions,
  // mutations,
  modules:{
    login,
    editAddress
  }
})



export default store