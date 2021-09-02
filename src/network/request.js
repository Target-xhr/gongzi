import axios from "axios"
//封装
export function request(config, success, failure) {
    //创建axios实例
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000",
        timeout: 5000
    })

    //发送真正的网络请求
    // instance(config)
    //     .then(res => {
    //         //console.log(res)
    //         success(res)
    //     })
    //     .catch(err => {
    //         //console.log(err)
    //         failure(err)
    //     })

    //axios拦截器
    instance.interceptors.request.use(config => {
        //比如config中一些信息不符合服务器要求

        //每次发送请求，都希望在界面中显示一个请求的图标？

        //某些网络请求，比如登陆，必须携带特殊信息，拦下来添加信息
        console.log(config)
        //必须返回
        return config
    }, err => {
        console.log(err)
    })

    //响应拦截
    instance.interceptors.response.use(res =>{
        return res.data
    }, err => {
        console.log(err)
    })

    return instance(config)//返回了Promise
}

