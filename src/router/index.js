//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

//从component里导入组件
// import Q_1 from '../components/Q_1'
// import Q_2 from '../components/Q_2'
// import user from '../components/user'

//路由懒加载，只有在用到组件的时候才加载对应js文件
const skill_Q = () => import('@/views/skill-Q/skill_Q')
const skill_E = () => import('@/views/skill-E/skill_E')
const skill_A = () => import('@/views/skill-A/skill_A')
const talent = () => import('@/views/Talent/talent')
//通过哟Vue.use()安装插件 VueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:'',
        redirect:'/skill_A'
    },
    {
        path:'/skill_Q',
        meta:{
            title:'元素爆发'
        },
        component:skill_Q
        
    },
    {
        path:'/skill_E',
        meta:{
            title:'元素战技'
        },
        component:skill_E
    },
    {
        path:'/skill_A',
        meta:{
            title:'普通攻击'
        },
        component:skill_A
    },
    {
        path:'/Talent',
        meta:{
            title:'天赋'
        },
        component:talent

    },
]

//配置路径和组件间的映射关系
// const routes = [
//     {
//       path:'',
//       //默认打开远程大招界面，redirect重定向
//       redirect:'/Q_1'
      
//     },
//     {
//         path:'/Q_1',
//         component:Q_1,
//         meta:{
//             title:'远程大招'
//         },
//         children:[
//             {
//                 //子组件路径不用加/
//                 path:'info1',
//                 component: info1
//             },
//         ]
//     },
//     {
//         path:'/Q_2',
//         component: Q_2,
//         meta:{
//             title:'近战大招'
//         },
//         children:[
//             {
//                 //子组件路径不用加/
//                 path:'info2',
//                 component: info2
//             },
//         ]
//     },
//     {
//         path:'/user/:userid',
//         component:user,
//         meta:{
//             title:'登录界面'
//         },
//     }
// ]
//2.创建路由对象
const router = new VueRouter({
    routes,
    mode: 'history',
    //修改.router-link-active 属性名为 active
    linkActiveClass:'active'
})
//前置钩子，跳转之前的回调
//导航守卫，to表示要跳去的网页，from表示跳转之前的网页，matched的第一个meta里存储了标题，这个在上面定义了
//一定要有next(),不然不会运行，调用该方法才能进入下一个钩子
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})

//后置钩子
//router.afterEach

export default router