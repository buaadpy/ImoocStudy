import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './route';


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    store,
    router,
    render: (h)=> h(App)
}).$mount(root);