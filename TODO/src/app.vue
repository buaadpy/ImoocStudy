<template>
  <div id="app">
    <div id="cover"></div>
    <MyHeader></MyHeader>
    <Todo></Todo>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./todo/header.vue"
import MyFooter from "./todo/footer.jsx"
import Todo from "./todo/todo.vue"

export default {
  components: {
    MyHeader, MyFooter,Todo
  }
};
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>