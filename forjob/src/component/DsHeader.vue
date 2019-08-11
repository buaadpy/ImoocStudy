<template>
  <div class="header">
    <div class="topBar">
      <div class="comWidth">
        <div class="leftArea">
          <a href="#" class="collection" @click="todo">收藏慕课电商</a>
        </div>
        <div class="rightArea">
          {{userName.length == 0? "欢迎来到慕课电商!" : "欢迎您 "+userName}}
          <router-link to="/loginbox" v-if="userName.length == 0">[登录]</router-link>
          <a v-else class="exit" @click="exit">[退出]</a>
        </div>
      </div>
    </div>
    <div class="middleBar">
      <div class="comWidth">
        <div class="logo">
          <img src="./../asset/img/logo.png" alt="慕课网" />
        </div>
        <div class="searchBox">
          <input type="text" class="searchText" />
          <input type="button" class="searchBtn" value="搜索" @click="todo" />
        </div>
        <div class="shoppingCart" @click="toShopCart">
          <span class="shopText">购物车</span>
          <span class="shopNum">{{total}}</span>
        </div>
      </div>
    </div>
    <div class="navBar">
      <div class="comWidth">
        <ul class="nav">
          <li>
            <router-link to="/" class="active">数码城</router-link>
          </li>
          <li>
            <a href="#" @click="todo">大促</a>
          </li>
          <li>
            <a href="#" @click="todo">团购</a>
          </li>
          <li>
            <a href="#" @click="todo">发现</a>
          </li>
          <li>
            <a href="#" @click="todo">二手特卖</a>
          </li>
          <li>
            <a href="#" @click="todo">名品会</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toShopCart: function() {
      if (location.pathname != '/shopcart')
        this.$router.push('/shopcart');
    },
    todo: function() {
      alert("待完成功能，敬请期待");
    },
    exit:function(){
      this.$store.dispatch('userLogin', '');
      this.$store.dispatch('clearCart');
      if (location.pathname != '/')
        this.$router.push("/");
      alert('退出成功！');
    }
  },
  computed: {
    total: function() {
      return this.$store.getters.getListLength;
    },
    userName: function() {
      return this.$store.getters.getUserName;
    }
  }
};
</script>

<style scoped>
.header {
  margin-bottom: 20px;
}
.topBar {
  height: 32px;
  width: 100%;
  background-color: #f7f7f7;
  line-height: 32px;
}

.topBar .collection {
  background: url("./../asset/icon/collection.png") left center no-repeat;
  padding-left: 19px;
  font-weight: bold;
}

.topBar a:hover {
  color: red;
}

.exit {
  cursor: pointer;
}

.middleBar {
  height: 85px;
  width: 100%;
  background-color: #1d7ad9;
}

.middleBar .logo {
  padding-left: 41px;
  padding-top: 13px;
  float: left;
}

.middleBar .searchBox {
  width: 430px;
  float: left;
  padding-top: 24px;
  padding-left: 186px;
}

.middleBar .searchText {
  width: 350px;
  height: 36px;
  float: left;
  padding: 0 5px;
}

.middleBar .searchBtn {
  float: right;
  width: 70px;
  height: 36px;

  font-size: 14px;
  background-color: #ff8c00;
  color: white;

  cursor: pointer;
}

.middleBar .shoppingCart {
  float: right;

  width: 115px;
  height: 36px;
  margin-top: 24px;
  margin-right: 60px;

  background-color: #ff8c00;
  cursor: pointer;
}

.middleBar .shopText {
  font-size: 14px;
  color: white;
  height: 100%;
  width: 87px;
  border-right: #e27a00 solid 1px;
  float: left;
  line-height: 36px;
  background: url("./../asset/icon/shopIcon.png") 10px center no-repeat;
  text-indent: 40px;
}

.middleBar .shopNum {
  width: 26px;
  height: 100%;
  line-height: 36px;
  color: white;
  border-left: #ff9c01 solid 1px;
  float: left;
  /*background: url("./../asset/icon/sj.png") 34px center no-repeat;*/
  text-align: center;
  /*padding-right: 30px;*/
}

.navBar {
  height: 36px;
  width: 100%;
  background-color: #1369c0;
  color: white;
}

.navBar .nav {
  display: flex;
  justify-content: space-between;
  line-height: 36px;
}

.navBar .nav li {
  float: left;
}

.navBar .nav a {
  padding: 0 36px;
  height: 36px;
  display: inline-block;
  color: white;
}

.navBar .nav .active {
  background-color: #4593fd;
}
</style>