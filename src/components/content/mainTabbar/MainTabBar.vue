<template>
  <TabBar>
    <TabBarItem path="/home">
      <template #itemicon>
        <img src="~assets/img/tabbar/home.svg"  alt="">
      </template>
      <template #itemiconactive>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #itemtext>
        <div >首页</div>
      </template>
    </TabBarItem>

    <TabBarItem path="/categroy">
      <template #itemicon>
        <img src="~assets/img/tabbar/category.svg"  alt="">
      </template>
      <template #itemiconactive>
        <img src="~assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template #itemtext>
        <div >分类</div>
      </template>
    </TabBarItem>

    <TabBarItem path="/cart">
      <template #itemicon>
        <img src="~assets/img/tabbar/shopcart.svg"  alt="">
      </template>
      <template #itemiconactive>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template #itemtext>
        <div >购物车</div>
      </template>
    </TabBarItem>

    <TabBarItem path="/profile">
      <template #itemicon>
        <img src="~assets/img/tabbar/profile.svg"  alt="">
      </template>
      <template #itemiconactive>
        <img src="~assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template #itemtext>
        <div >我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }
</style>
