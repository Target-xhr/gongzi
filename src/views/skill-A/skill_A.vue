<template>
  <div>
    <nav-bar class="skill-A"><div slot="center">购物街</div></nav-bar>
    <swiper></swiper>
    
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue"
import Swiper from '@/components/common/swiper/swiper.vue';

export default {
  name: "A",
  data() {
    return {
    };
  },
  components: {
    NavBar,
    Swiper,
  },
  methods: {
  },
};
</script>


<style scoped>
.skill-A{
  background-color: var(--color-tint);
  color: #fff;
}
</style>