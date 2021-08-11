<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="itemicon"></slot>
    </div>
    <div v-else>
      <slot name="itemiconactive"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="itemtext"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbaritem",
    props: {
      activeColor: {
        type: String,
        default: 'red'
      },
      path: {
        type: String
      }
    },
    data() {
      return {
        /*isActive: false*/
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      isActiveColor() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        if (this.$route.path != this.path) {
          this.$router.replace(this.path)
        }
      }
    }

  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }

  .active {
    color: red;
  }
</style>
