<template>
  <div class="item">
    <input type="checkbox" v-model="select" :class="select? 'select-input':''" @click="selectItem" />
    <div class="image">
      <img src="./../asset/img/shopImg.png" alt="phone" />
    </div>
    <div class="info">xxxxxx</div>
    <div class="price">$100</div>
    <div class="quantity">1</div>
    <div class="subtotal">$100</div>
    <div class="edit">
      <button @click="deleteItem">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      select: false
    };
  },
  methods: {
    selectItem: function() {},
    deleteItem: function() {}
  }
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-around;

  height: 100px;
  width: 100%;
  border: #f9f9f9 solid 2px;

  background-color: #ffffff;
}

input {
  flex: 0 0 40px;
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

.image {
  flex: 0 0 40px;
}

.image img {
  margin-top: 20px;
  height: 60px;
  width: 60px;
  border: #cccccc solid 1px;
}

.info {
  flex: 1 0 0;

  padding-left: 20px;

  text-align: left;
  font-weight: bold;
  font-size: 14px;
  line-height: 100px;
}

.price,
.quantity,
.subtotal,
.edit {
  flex: 0 0 120px;

  text-align: center;
  font-size: 14px;
  line-height: 100px;
}

.subtotal {
  color: #cc4444;
}

.edit button {
  border: none;

  font-size: 24px;

  color: #cc3200;
  background: none;
  cursor: pointer;
  outline: none;
}
</style>