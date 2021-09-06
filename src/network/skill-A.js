import { request } from "./request";
//首页的请求全放这儿，方便管理
export function getHomeMultidata(){
    return request({
        url:"/home/multidata"
    })
}

