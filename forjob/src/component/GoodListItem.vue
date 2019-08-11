<template>
  <div class="item">
    <div class="item-content">
      <div class="img-item">
          <img src="./../asset/img/shopImg.png" alt="phone" />
      </div>
      <p>
        <a href="#">Canon 佳能 IXUS 132 数码相机 粉色 1600像素 2.7LCD</a>
      </p>
      <p class="price">￥3212</p>
      <p>
        评价：
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span></span>
      </p>
    </div>
    <div class="item-add">
      <span>加入购物车</span>
    </div>
  </div>
</template>

<script>
export default {};
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
  margin-top:20px;

  height: 170px;
  text-align: center;
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