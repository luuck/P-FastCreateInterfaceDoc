import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminApp from '@/pages/admin/app.vue';
// const Result = resolve => require(['@/pages/index/result'], resolve);

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: AdminApp,
    meta: {
        title: 'admin-快速生成接口'
    }
    // component: (resolve)=>{
    //     require(['@/pages/admin/app'], resolve);
    // }
}];

export default new VueRouter({
    // mode: 'history',
    //base: '/static/v2/',
    routes
});