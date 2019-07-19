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

export default {
  data: function() {
    return {
      stateActive: "all"
    };
  },
  methods: {
    addTodo: function(e) {
      this.$store.commit('add',{
        itemText: e.target.value,
        itemId: 0,
        completed: false
      });
      e.target.value = '';
    },
    deleteItem: function(itemId) {
      this.$store.commit('delete', itemId);
    },
    clearCompleted: function() {
      this.$store.commit('clear');
    },
    changeState: function(state) {
      this.stateActive = state;
    },
    changeCompleted: function(itemId) {
      this.$store.commit('change', itemId);
    }
  },
  components: {
    TodoItem,
    TodoTab
  },
  computed: {
    getTodoLeftCount: function() {
      return this.$store.state.todoList.filter(todo => !todo.completed).length;
    },
    showList: function() {
      switch (this.stateActive) {
        case "all":
          return this.$store.state.todoList;
        case "active":
          return this.$store.state.todoList.filter(todo => !todo.completed);
        case "completed":
          return this.$store.state.todoList.filter(todo => todo.completed);
      }
    }
  },
  created: function() {
    this.$store.commit('read');
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