<template>
  <tab-bar>
    <tab-item path="/skill_A">
      <!-- slot里填要替换的组件里的插槽 -->
      <img slot="item-icon" src="@/assets/img/天赋/普通攻击.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/命座/魔王武装-暗流.png"
        alt=""
      />
      <div slot="item-text">普通攻击</div>
    </tab-item>
    <tab-item path="/skill_E">
      <img slot="item-icon" src="@/assets/img/天赋/元素战技.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/命座/深渊之灾-纷争祸源.png"
        alt=""
      />
      <div slot="item-text">元素战技</div>
    </tab-item>
    <tab-item path="/skill_Q">
      <img slot="item-icon" src="@/assets/img/天赋/元素爆发.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/命座/极恶技-天使灭尽.png"
        alt=""
      />
      <div slot="item-text">元素爆发</div>
    </tab-item>
    <tab-item path="/Talent">
      <img slot="item-icon" src="@/assets/img/天赋/天赋-诸武精通.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/命座/极恶技-斩水斩雨.png"
        alt=""
      />
      <div slot="item-text">天赋</div>
    </tab-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTab",
  components: {
    TabBar,
    TabItem,
  },
};
</script>


<style scoped>
</style>