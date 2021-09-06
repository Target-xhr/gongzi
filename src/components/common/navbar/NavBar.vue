<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name:'',
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 1px 10px 10px rgba(100, 100, 100, 0.1);
}
.left, .right{
    width: 60px;
}
.center{
    /* 占据剩余的地方 */
    flex: 1;
}

</style>