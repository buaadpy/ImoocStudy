<template>
  <section id="todo">
    <input type="text" placeholder="接下来想做什么？" @keyup.enter="addTodo" autofocus="autofocus" />
    <TodoItem
      v-for="todo in showList"
      :key="todo.id"
      :todo="todo"
      @deleteItem="deleteItem"
      @changeCompleted="changeCompleted"
    ></TodoItem>
    <TodoTab
      :todoLeftCount="getTodoLeftCount"
      @clear="clearCompleted"
      @changeState="changeState"
      :stateActive="stateActive"
    ></TodoTab>
  </section>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoTab from "./TodoTab.vue";

let idCount = 0;

export default {
  data: function() {
    return {
      todoList: [],
      stateActive: "all"
    };
  },
  methods: {
    addTodo: function(e) {
      this.todoList.unshift({
        itemText: e.target.value,
        itemId: idCount++,
        completed: false
      });
      e.target.value = "";
      this.writeData();
    },
    deleteItem: function(itemId) {
      for (let i = 0, len = this.todoList.length; i < len; i++) {
        if (this.todoList[i].itemId == itemId) {
          this.todoList.splice(i, 1);
          break;
        }
      }
      this.writeData();
    },
    clearCompleted: function() {
      this.todoList = this.todoList.filter(todo => !todo.completed);
      this.writeData();
    },
    changeState: function(state) {
      this.stateActive = state;
    },
    changeCompleted: function(itemId) {
      for (let i = 0, len = this.todoList.length; i < len; i++) {
        if (this.todoList[i].itemId == itemId) {
          this.todoList[i].completed = !this.todoList[i].completed;
          break;
        }
      }
      this.writeData();
    },
    writeData: function() {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:8001", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      let result = [];
      for (let todo of this.todoList) {
        result.push(todo.itemText + "," + (todo.completed ? '1' : '0'));
      }
      xhr.send(result.join("^"));
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status != 200) {
          alert("数据更新失败");
        }
      };
    }
  },
  components: {
    TodoItem,
    TodoTab
  },
  computed: {
    getTodoLeftCount: function() {
      return this.todoList.filter(todo => !todo.completed).length;
    },
    showList: function() {
      switch (this.stateActive) {
        case "all":
          return this.todoList;
        case "active":
          return this.todoList.filter(todo => !todo.completed);
        case "completed":
          return this.todoList.filter(todo => todo.completed);
      }
    }
  },
  created: function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8001", true);
    xhr.send();
    let todo = this.todoList;
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let res = xhr.responseText.split("\n");
        res.map(text =>
          todo.push({
            itemText: text.split(",")[0],
            itemId: idCount++,
            completed: +text.split(",")[1]
          })
        );
      }
    };
  }
};
</script>

<style scoped>
input {
  width: 100%;
  height: 60px;
  border: none;
  border-bottom: #f9f9f9 solid 2px;

  line-height: 60px;
  font-size: 26px;
  text-indent: 60px;

  outline: none;
}

#todo {
  width: 100%;
}
</style>