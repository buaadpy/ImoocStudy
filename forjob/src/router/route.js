import Vue from 'vue';
import VueRouter from 'vue-router';

import GoodList from './../component/GoodList.vue'
import ShopCart from './../component/ShopCart.vue'
import LoginBox from './../component/LoginBox.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes: [{
    path: '/',
    name: 'goodlist',
    component: GoodList
  }, {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart
  }, {
    path: '/loginbox',
    name: 'loginbox',
    component: LoginBox
  }],
});