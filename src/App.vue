<template>
  <div id="app">
    <!-- to用于跳转 -->
    <!-- tag用于定义组件的表现形式 -->
    <!-- replace改变pushState的方法，用于直接替换网页，不会留下历史记录，回退无法返回 -->
    <!-- <router-link to="/Q_1" tag="button" replace>远程Q</router-link>
    <router-link to="/Q_2" tag="button" replace>近战Q</router-link> -->
    <!-- 动态绑定userid -->
    <!-- <router-link :to="'/user/'+userid" tag="button" replace>用户</router-link> -->

    <main-tab />
    <!-- <img src="@/assets/css/th2.jpg" alt=""> -->
    <router-view></router-view>
    <!-- keep-alive应用于缓存，不至于重新创建组件 -->
    <!-- <keep-alive>
      <router-view/>
    </keep-alive> -->
  </div>
</template>

<script>
import mainTab from "@/components/content/mainTabbar/mainTab.vue";
//vue-router 会在所有组件里添加$router属性
export default {
  name: "App",
  components: {
    mainTab,
  },
  data() {
    return {
      userid: "张三",
    };
  },
};
</script>

<style>
@import "./assets/css/base.css";
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.active {
  color: blue;
}
</style>
