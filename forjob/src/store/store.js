import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName:'',
    shopCartList: [],
  },
  getters:{
    getList:function(state){
      return state.shopCartList;
    },
    getListLength:function(state){
      return state.shopCartList.length;
    },
    getUserName:function(state){
      return state.userName;
    }
  },
  mutations: {
    add(state, good) {
      //Object.assign(good, {selected: false});
      state.shopCartList.push(good);
    },
    remove(state, good) {
      state.shopCartList.splice(state.shopCartList.findIndex((n)=>n.goodId == good.goodId),1);
    },
    clear(state){
      state.shopCartList = [];
    },
    login(state, name){
      state.userName = name;
    }
  },
  actions:{
    addGood:function(context, good){
      context.commit('add',good);
    },
    removeGood:function(context, good){
      context.commit('remove',good);
    },
    userLogin:function(context, name){
      context.commit('login', name);
    },
    clearCart:function(context){
      context.commit('clear');
    }
  }
})