import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from "axios"
import {request} from "./network/request"
Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

Vue.use(Vant);

new Vue({
  el: '#app',
  router,
  request,
  render: h => h(App)
})


// axios.defaults.baseURL = "http://123.207.32.32:8000"
// axios.defaults.timeout = 5000
// //基本使用
// axios({
//   url: "http://123.60.25.198:9005/zjStat/overall",
//   //专门针对get请求的参数拼接
//   //url查询对象
//   params: {
//     type: "pop",
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// //axios发送并发请求
// //.all返回一个数组，可以用axios.spread展开这个数组
// axios.all([axios({
//   url: "/home/multidata",
// }
// ), axios({
//   url: "/home/data",
//   params: {
//     type: "shell",
//     page: 5
//   }

// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// //创建axios的实例
// const instance = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout:5000
// })

// instance({
//   url: "/home/multidata"
// }).then(res =>{
//   console.log(res);
// })

// instance({
//   url: "/home/data",
//   params: {
//     type: "pop",
//     page: 5
//   }
// }).then(res =>{
//   console.log(res);
// })

// request({
//   url:"/home/multidata"
// }).then(res => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })