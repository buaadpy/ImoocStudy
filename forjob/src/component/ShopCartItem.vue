<template>
  <div :class="selected? 'select-item item':'item'" @mouseenter="toggle" @mouseleave="toggle">
    <input type="checkbox" v-model="selected" :class="selected? 'select-input':''"/>
    <div class="image">
      <img :src="getImgSrc" alt="phone" />
    </div>
    <div class="info">{{itemData.goodTitle}}</div>
    <div class="price">￥{{itemData.goodPrice}}</div>
    <div class="quantity">1</div>
    <div class="subtotal">￥{{itemData.goodPrice * 1}}</div>
    <div class="edit">
      <button v-if="seen" @click="deleteItem">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected:false,
      seen: false
    };
  },
  props: {
    itemData: { type: Object, required: true }
  },
  methods: {
    toggle: function() {
      this.seen = !this.seen;
    },
    deleteItem: function() {
      this.$emit('removeGood', this.itemData);
      if (this.selected) this.$emit('selectChange', this.itemData, false);
    },
  },
  computed:{
    getImgSrc:function(){
      return require(`./../asset/good/${this.itemData.goodImg}.jpg`);
    }
  },
  watch:{
    selected:function(){
      this.$emit('selectChange', this.itemData, this.selected);
    }
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
.select-item {
  background-color:#f3dea6;
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
  overflow: hidden;
  align-self:center;

  padding-left: 20px;

  text-align: left;
  font-size: 14px;
  line-height: 14px;
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