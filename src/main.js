import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Element UI 
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//import Bootrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import axios
import axios from "axios";
Vue.prototype.$axios = axios

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
