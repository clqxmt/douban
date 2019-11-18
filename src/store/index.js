import Vue from 'vue'
import Vuex from 'vuex'
import login from "./login"
import editAddress from "./editAddress"
// import cart from "./cart"

Vue.use(Vuex)



const store = new Vuex.Store({
  // state,
  // actions,
  // mutations,
  modules:{
    login,
    editAddress,
    // cart
  }
})



export default store