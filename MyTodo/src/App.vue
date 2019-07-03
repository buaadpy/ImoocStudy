<template>
  <section id="app">
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "./Header.vue";
import Todo from "./Todo.vue";
import Footer from "./Footer.vue";
import './global.css';

export default {
  data: function() {
    return {
      title: "MyTodo"
    };
  },
  components: {
    Header,
    Todo,
    Footer
  }
};
</script>

<style scoped>
#app {
    margin:0 auto;
    
    width:40%;
}
</style>
