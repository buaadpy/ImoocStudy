import Vue from 'vue';
import App from './App.vue';
import store from './store'


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    store,
    render: (h)=> h(App)
}).$mount(root);