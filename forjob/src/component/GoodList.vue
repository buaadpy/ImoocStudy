<template>
  <div class="product comWidth">
    <div class="product-title">
      <h3>数码影像</h3>
    </div>
    <div class="product-list clearfloat">
      <good-list-item
        class="item"
        v-for="item in SMYXList"
        :key="item.goodId"
        :itemData="item"
        @addGood="addGoodToCart"
      ></good-list-item>
    </div>
    <div class="product-title">
      <h3>娱乐影音</h3>
    </div>
    <div class="product-list clearfloat">
      <good-list-item
        class="item"
        v-for="item in YLYYList"
        :key="item.goodId"
        :itemData="item"
        @addGood="addGoodToCart"
      ></good-list-item>
    </div>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue";
import testData1 from "./../../test/testData1.json";
import testData2 from "./../../test/testData2.json";

export default {
  data: function() {
    return {
      SMYXList: [],
      YLYYList: []
    };
  },
  components: {
    GoodListItem
  },
  created: function() {
    this.SMYXList = [...testData1.goodList];
    this.YLYYList = [...testData2.goodList];
  },
  methods: {
    addGoodToCart: function(data) {
      if (this.$store.getters.getUserName.length == 0) {
        alert("请您先登录");
        this.$router.push('/loginbox');
      } else {
        this.$store.dispatch("addGood", data);
        alert("已加入购物车！");
      }
    }
  }
};
</script>

<style scoped>
.product-title {
  height: 34px;
  line-height: 34px;
  border-bottom: #cccccc solid 2px;
}

.product-title h3 {
  width: 171px;
  border-bottom: #096dba solid 2px;
  margin-bottom: -2px;
  padding-left: 9px;

  font-size: 18px;
}

.product-list .item {
  width: 23%;
  float: left;
  margin: 10px 10px;
}
</style>