<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.title">
      <a :herf="item.link">
        <img :src="item.image">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

  export default {
    name: "childSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }

  }
</script>

<style scoped>
  .slide img {
    width: 100%;
  }
</style>
