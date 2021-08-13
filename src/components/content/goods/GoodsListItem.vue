<template>
  <div class="goods-item">
    <div>
      <img :src="goodsItem.show.img">
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>
