<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item, index) in banner" :key="index">
      <!-- <a href="item.link"> -->
        <img :src="item.image" alt="" />
      <!-- </a> -->
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { getHomeMultidata } from "@/network/skill-A";

export default {
  name: "Swiper",
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      //用组件接受res,不然函数里的暂时变量会在函数结束后释放
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.van-swipe-item {
  color: #fff;
  line-height: 1.5vh;
  text-align: center;
  /* background-color: #39a9ed; */
}
img{
  width: 100vw;
  height: 30vh;
}
</style>