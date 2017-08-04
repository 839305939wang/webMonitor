import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import Routers from '../../router/router';
import Vuex from 'vuex';
import iView from 'iview';
import store from "../../store/store"
import 'iview/dist/styles/iview.css';
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);
// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});