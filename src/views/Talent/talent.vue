<template>
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in list" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
</template>

<script>

export default {
  name: "Swiper",
  data() {
    return {
      list: [
        require("@/assets/img/待机/待机1.gif"),
        require("@/assets/img/待机/待机2.gif"),
        require("@/assets/img/战技/E1.gif"),
      ],
    };
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  background-color: #39a9ed;
  display:flex;
}
</style>