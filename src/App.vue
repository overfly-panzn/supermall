<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <router-view></router-view>
  <MainTabBar></MainTabBar>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";


export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
