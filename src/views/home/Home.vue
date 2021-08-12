<template>
  <div id="home">
    <NarBar class="home-nav">
      <template #center>
        <div>购物车 </div>
      </template>
    </NarBar>
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.title">
        <a :herf="item.link">
          <img :src="item.image">
        </a>
      </SwiperItem>
    </Swiper>
    <h2>首页</h2>

  </div>

</template>

<script>
  import NarBar from "components/common/navbar/NarBar";
  import {getHomeMultidata} from "network/home";
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

  export default {
    name: "Home",
    data() {
      return {
        //result:null,
        banners: [],
        recommends: []
      }
    },
    components: {
      NarBar,
      Swiper,
      SwiperItem
    },
    created() {
      getHomeMultidata().then(res => {
        //this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);

    color: white;
  }
</style>
