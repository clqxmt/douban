import http from "@utils/request"


/**活动 */
export const activityApi=()=>http({
    method:"get",
    url:"/bookstore/activity"
})

/**新书  */
export const newbookApi=()=>http({
  method:"get",
  url:"/bookstore/newbook"
})


/**书单 */
export const topicApi=()=>http({
  method:"get",
  url:"/bookstore/topic"
})

/**新书的详细信息 */
export const detail=(bookId)=>http({
  method:"get",
  url:"/bookstore/detail",
  data:{
    id:bookId
  }
})