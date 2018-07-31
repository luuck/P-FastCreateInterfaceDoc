import Vue from 'vue';
import router from '@/router/index';
import VueBus from 'vue-bus';
import Axios from 'axios';
import Http from '@/assets/js/http.js';
import store from '../../store/store.js';
// import URL from '../../components/base/url'; // 全局的请求url
import '../../assets/css/reset.css'; /*引入公共样式*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard2';

Http.initHttp(Vue);
Vue.use(VueBus);
Vue.prototype.$axios = Axios;
// Vue.prototype.URL = URL;
Vue.use(ElementUI);
Vue.use(VueClipboard);
// VueClipboard.config.autoSetContainer = true // add this line

new Vue({
    el: '#app',
    router,
    store
});