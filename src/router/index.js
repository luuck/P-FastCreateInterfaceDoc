import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminApp from '@/pages/admin/app.vue';
import AdminAppNew from '@/pages/admin-1.0.0/app.vue';
// const Result = resolve => require(['@/pages/index/result'], resolve);

Vue.use(VueRouter);

const routes = [{
    path: '/old',
    component: AdminApp,
    meta: {
        title: 'admin-快速生成接口'
    }
    // component: (resolve)=>{
    //     require(['@/pages/admin/app'], resolve);
    // }
}, {
    path: '/',
    component: AdminAppNew
}];

export default new VueRouter({
    routes
});