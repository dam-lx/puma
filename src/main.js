import Vue from 'vue';
import App from './App.vue';
// import store from './store';
import router from './routes'
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';

Vue.use(Vuelidate);
Vue.router = router;

// router.beforeEach((to, from, next) => {
    // let user = store.getters.currentUser;
    // if (to.meta.requiredRoles && to.meta.requiredRoles.length == 0) {
    //     return next();
    // } else if (to.meta.requiredRoles && user != null && to.meta.requiredRoles.includes(user.role)) {
    //     return next();
    // } else {
    //     next({
    //         path: '/login'
    //     })
    // }
// });

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title + '';
    });
});

Vue.use(VueRouter);

new Vue({
    el: '#app',
    // store,
    router,
    render: h => h(App)
})
