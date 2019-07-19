<template>
  <section id="app">
    <Header></Header>
    <div id="page">
    <router-link to="/" class="router-link">记录任务</router-link>
    <span class="router-link"> | </span>
    <router-link to="/random" class="router-link">找点事做</router-link>
    </div>
    <router-view/>
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

#page{
    margin:0 0 20px 0;
    text-align:center;
}

.router-link {
    color:#cccccc;
    font-size:20px;
}
</style>
