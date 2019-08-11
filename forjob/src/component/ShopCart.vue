<template>
  <div class="shopCart comWidth">
    <div class="itemList">
      <ul>
        <li>商品</li>
        <li>价格</li>
        <li>数量</li>
        <li>总计</li>
        <li>删除</li>
      </ul>
      <shop-cart-item v-for="n in 5" :key="n.value"></shop-cart-item>
    </div>
    <div class="checkout">
      <input type="checkbox" id="sel" v-model="selectAll" :class="selectAll? 'select-input':''" />
      <label for="sel">选择全部</label>
      <div class="checkoutButton">CHECKOUT</div>
      <span class="totalMoney">10000</span>
      <span class="totalMoneyInfo">结算金额：</span>
    </div>
  </div>
</template>

<script>
import ShopCartItem from "./ShopCartItem.vue";
export default {
  data: function() {
    return {
      selectAll: false
    };
  },
  components: {
    ShopCartItem
  }
};
</script>

<style scoped>
.itemList {
  margin: 0 100px;
}

.itemList ul {
  display: flex;
  justify-content: space-around;

  background-color: #666666;
  color: #ffffff;
}

.itemList li {
  width: 120px;
  height: 40px;

  text-align: center;
  font-size: 14px;
  line-height: 40px;
}

.itemList li:nth-of-type(1) {
  flex: 1 0 100px;
}

.checkout {
  margin: 30px 100px;
  height: 50px;
  border: #f9f9f9 solid 2px;
}

input {
  float: left;
  height: 100%;
  width: 40px;
  margin: 0 20px;
  border: none;
  border-radius: 0;

  -webkit-appearance: none;
  background: url(./../asset/img/round.svg) center center no-repeat;
  outline: none;
  cursor: pointer;
}
.select-input {
  background: url(./../asset/img/done.svg) center center no-repeat;
}

.checkout label {
  float: left;

  font-weight: bold;
  font-size: 14px;
  line-height: 50px;
}

.checkoutButton {
  float: right;

  width: 100px;
  height: 100%;

  font-weight: bold;
  text-align:center;
  line-height:50px;

  background-color: #666666;
  cursor: pointer;
  color:#ffffff;
}

.totalMoney {
  float: right;

  margin-right: 20px;

  font-weight: bold;
  font-size: 14px;
  line-height: 50px;

  color: #cc4444;
}

.totalMoneyInfo {
  float: right;

  font-weight: bold;
  font-size: 14px;
  line-height: 50px;

  color: #666666;
}
</style>