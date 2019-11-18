export default{
  path:"/newbookDetail/:id",
  name:"newbookDetail",
  props:true,
  component:_=>import("@pages/newbookDetail"),
  meta:{
    flag:false
  }
}