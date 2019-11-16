import http from "@utils/request"
import { get } from "http"

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
export const newbookDetailApi=(id)=>http({
  method:get,
  url:"/bookstore/newbookDetail",
  params:{
    id:id
  }
})