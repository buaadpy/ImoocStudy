<template>
  <div id="todoItem" @mouseenter="toggle" @mouseleave="toggle">
    <input
      type="checkbox"
      v-model="todo.completed"
      id="todo.itemId"
      :class="todo.completed? 'completed-input':''"
      @click="change"
    />
    <label
      id="label"
      for="todo.itemId"
      :class="todo.completed? 'completed-label':''"
    >{{todo.itemText}}</label>
    <button v-if="seen" @click="deleteItem">X</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      seen: false
    };
  },
  props: { todo: { type: Object, required: true } },
  methods: {
    toggle: function() {
      this.seen = !this.seen;
    },
    deleteItem: function() {
      this.$emit("deleteItem", this.todo.itemId);
    },
    change: function() {
      this.$emit("changeCompleted", this.todo.itemId);
    }
  }
};
</script>

<style scoped>
#todoItem {
  width: 100%;
  height: 60px;
  border: none;
  border-bottom: #f9f9f9 solid 2px;

  line-height: 60px;
  font-size: 26px;
  background-color: #ffffff;
}

button {
  float: right;
  margin-right: 20px;

  width: 40px;
  height: 60px;
  border: none;

  color: #cc3200;
  font-size: 24px;

  background: none;
  cursor: pointer;
  outline: none;
}

input {
  float: left;

  width: 40px;
  height: 60px;
  border: none;
  border-radius: 0;

  -webkit-appearance: none;
  background: url(./img/round.svg) center center no-repeat;
  outline: none;
}

.completed-input {
  background: url(./img/done.svg) center center no-repeat;
}

.completed-label {
  color: #d9d9d9;
  text-decoration: line-through;
}

label {
  float: left;
  margin-left: 20px;

  line-height: 60px;
  font-size: 26px;
}
</style>