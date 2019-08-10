<template>
  <div class="product comWidth">
    <div class="product-title">
      <h3>数码影像</h3>
    </div>
    <div class="product-list clearfloat">
      <good-list-item class="item" v-for="n in 8" :key="n.value"></good-list-item>
    </div>
    <div class="product-title">
      <h3>娱乐影音</h3>
    </div>
    <div class="product-list clearfloat">
      <good-list-item class="item" v-for="n in 8" :key="n.value"></good-list-item>
    </div>
  </div>
</template>

<script>
import GoodListItem from "./../component/GoodListItem.vue";

export default {
  components: {
    GoodListItem
  }
};
</script>

<style scoped>
.product-title {
  margin-top:20px;
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