<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- 插槽会被App里东西直接替换，改slot的样式是没用的，在外面嵌套一个div，改外边的样式，里面的同样会变化 -->
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  data() {
      //即使用不到data()也要return，不然会报错
    return {

    }
  },
  //父组件传给子组件
  props: {
    path: String,
    activeColor:{
        type:String,
        default:'blue'
    }
  },
  methods: {
    itemClick() {
      console.log("itemClick");
      this.$router.replace(this.path);
    },
    
  },

  computed:{
      isActive() {
      //等于-1的时候表示没找到路径，不等于表示找到了
      //route是活跃状态的组件
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
        return this.isActive ? {color: this.activeColor}:{}
    }
  },
};
</script>


<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 60px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 40px;
  height: 40px;
  margin-top: 3px;
  vertical-align: middle;
  margin-top: 2px;
}

</style>