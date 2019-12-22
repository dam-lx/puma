import Vue from 'vue';
import Router from 'vue-router';

// import Layout from '@/components/Layout/Layout';
import Login from './pages/Login/Login';

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/login',
            name:'login',
            component: Login,
            meta:{
                requiredRoles:[],
                title:'Login'
            }
        }
    ]
})