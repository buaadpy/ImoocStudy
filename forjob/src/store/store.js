import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
    iCount:0
  },
  mutations: {
    add(state, item) {
      item.itemId = state.iCount++;
      state.todoList.unshift(item);
      this.commit('write');
    }
  }
})