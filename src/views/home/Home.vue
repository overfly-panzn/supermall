<template>
  <div id="home">
    <NarBar class="home-nav">
      <template #center>
        <div>购物车</div>
      </template>
    </NarBar>
    <HomeSwiper :banners="banners"/>
    <RecommendView :recommends="recommends"></RecommendView>
    <featureView/>
    <TabControl :titles="[{id:'pop',name:'流行'},{id:'new',name:'新款'},{id:'sell',name:'精选'}]" :selectedTab="selectedTab" class="tab-control"/>
    <GoodsList :goods="goods[selectedTab].list"></GoodsList>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
    <h2>首页</h2>
  </div>

</template>

<script>
  import NarBar from "components/common/navbar/NarBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import featureView from "./childComps/featureView";
  import GoodsList from "components/content/goods/GoodsList";
  import TabControl from "components/content/tabControl/TabControl";

  import {getHomeMultidata, getHomeGoods} from "network/home";


  export default {
    name: "Home",
    data() {
      return {
        //result:null,
        selectedTab:'pop',
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    components: {
      NarBar,
      HomeSwiper,
      RecommendView,
      featureView,
      TabControl,
      GoodsList
    },
    created() {
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          //this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          console.log(type,res)
          this.goods[type].list.push(...res.data.list)//此处的...是指将数组进行解析成元素，再由push函数放入数组中
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 40px;
    background-color: #fff;
  }
</style>
