import Vue from 'vue'
import App from './App.vue'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    loading:require('./asset/loading-svg/loading-bars.svg')
});

import store from './store/store'
import router from './router/route'

Vue.config.productionTip = false

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
    store,
    router,
    render: (h)=> h(App)
}).$mount(root);