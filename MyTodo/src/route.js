import Vue from 'vue';
import VueRouter from 'vue-router';
import Todo from './Todo.vue';
import Random from './Random.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'todo',
    component: Todo
  }, {
    path: '/random',
    name: 'random',
    component: Random
  }],
});