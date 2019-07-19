import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [],
    iCount:0
  },
  mutations: {
    add(state, item) {
      item.itemId = state.iCount++;
      state.todoList.unshift(item);
      this.commit('write');
    },
    delete(state, itemId) {
      for (let i = 0, len = state.todoList.length; i < len; i++) {
        if (state.todoList[i].itemId == itemId) {
          state.todoList.splice(i, 1);
          break;
        }
      }
      this.commit('write');
    },
    clear(state) {
      state.todoList = state.todoList.filter(todo => !todo.completed);
      this.commit('write');
    },
    change(state, itemId) {
      for (let i = 0, len = state.todoList.length; i < len; i++) {
        if (state.todoList[i].itemId == itemId) {
          state.todoList[i].completed = !state.todoList[i].completed;
          break;
        }
      }
      this.commit('write');
    },
    read(state){
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:8001", true);
      xhr.send();
      let todo = state.todoList;
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          let res = xhr.responseText.split("\n");
          res.map(text =>
            todo.push({
              itemText: text.split(",")[0],
              itemId: state.iCount++,
              completed: +text.split(",")[1]
            })
          );
        }
      };
    },
    write(state) {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:8001", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      let result = [];
      for (let todo of state.todoList) {
        result.push(todo.itemText + "," + (todo.completed ? '1' : '0'));
      }
      xhr.send(result.join("^"));
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status != 200) {
          alert("数据更新失败");
        }
      };
    }
  }
})

export default store