<template>
  <div class="item">
    <div class="item-content">
      <div class="img-item">
        <img v-lazy="getImgSrc" alt="phone" />
      </div>
      <p class="item-title">
        <a href="#">{{itemData.goodTitle}}</a>
      </p>
      <p class="price">{{itemData.goodPrice}}</p>
      <p>
        评价：
        <span class="star" v-for="n in itemData.goodStar" :key="n.value"></span>
      </p>
    </div>
    <div class="item-add" @click="addGoodToCart">
      <span>加入购物车</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemData: { type: Object, required: true }
  },
  computed: {
    getImgSrc: function() {
      return require(`./../asset/good/${this.itemData.goodImg}.jpg`);
    }
  },
  methods:{
    addGoodToCart:function(){
      this.$emit('addGood', this.itemData);
    }
  }
};
</script>

<style scoped>
.item {
  border: #cccccc solid 1px;
  box-sizing: border-box;
}

.item:hover {
  border: #338833 solid 1px;
  box-shadow: 5px 5px 5px #888888;
}

.item-content {
  padding: 0 15px;
}

.item-title {
  overflow: hidden;

  height:40px;
}

p {
  line-height: 20px;
}

p a {
  color: black;
}

p a:hover {
  text-decoration: underline;
}

.img-item {
  margin-top: 20px;

  height: 170px;
  text-align: center;
}

.img-item img{
  width:170px;
  height: 170px;
}

.price {
  color: #d415a0;
  font-weight: bold;
  padding-top: 10px;
}

.star {
  display: inline-block;
  height: 13px;
  width: 13px;
  background: url("./../asset/icon/star.png") center center no-repeat;
  margin-right: 1px;
}

.item-add {
  position: relative;

  margin: 20px 20px;
  height: 40px;
  border: #338833 solid 1px;

  text-align: center;
  font-size: 14px;
  color: #338833;
  line-height: 40px;

  transition: background-color 0.5s;
}

.item-add:hover {
  background-color: #aef3ae;
  cursor: pointer;
}
</style>