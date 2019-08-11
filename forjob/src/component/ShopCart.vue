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
      <p class="emptyInfo" v-if="goodList.length == 0">购物车为空哟！</p>
      <shop-cart-item
        ref="cartItem"
        v-for="(item,index) in goodList"
        :key="index"
        :itemData="item"
        @removeGood="removeGoodToCart"
        @selectChange="selectToCheckout"
      ></shop-cart-item>
    </div>
    <div class="checkout" v-if="goodList.length != 0">
      <input
        type="checkbox"
        id="sel"
        v-model="selectAll"
        :class="selectAll? 'select-input':''"
        @click="selectAllGood"
      />
      <label for="sel">选择全部</label>
      <div :class="[{checkoutButton:true},{checkoutReady:selectList.length != 0}]">CHECKOUT</div>
      <span class="totalMoney">￥{{totalMoney}}</span>
      <span class="totalMoneyInfo">结算金额：</span>
    </div>
  </div>
</template>

<script>
import ShopCartItem from "./ShopCartItem.vue";
export default {
  data: function() {
    return {
      selectList: [],
      selectAll: false
    };
  },
  computed: {
    goodList: function() {
      let temp = this.$store.getters.getList;
      if (this.selectList.length == temp.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
      return temp;
    },
    totalMoney: function() {
      return this.selectList.reduce((total, n) => total + n.goodPrice, 0);
    }
  },
  methods: {
    removeGoodToCart: function(data) {
      this.$store.dispatch("removeGood", data);
    },
    selectToCheckout: function(good, flag) {
      if (flag) {
        this.selectList.push(good);
      } else {
        this.selectList.splice(
          this.selectList.findIndex(n => n.goodId == good.goodId),
          1
        );
      }
    },
    selectAllGood: function() {
      if (!this.selectAll) {
        this.$refs.cartItem.forEach(n => (n.selected = true));
      } else {
        this.$refs.cartItem.forEach(n => (n.selected = false));
      }
    }
  },
  watch: {
    selectList: function() {
      if (this.selectList.length == this.$store.getters.getListLength) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    }
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

.emptyInfo {
  margin: 10px 0px;
  text-align: center;
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
  text-align: center;
  line-height: 50px;

  transition: background-color 0.5s;
  background-color: #666666;
  color: #ffffff;
}
.checkoutReady {
  background-color: #cc4444;
  cursor: pointer;
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