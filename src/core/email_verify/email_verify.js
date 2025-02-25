// 第三方UI组件
import Vue from "vue";
Vue.config.productionTip = false;
import ElementUI from "element-ui";
Vue.use(ElementUI);

import VueI18n from "vue-i18n";
Vue.use(VueI18n);
import i18n from "@jx3box/jx3box-common/i18n";

// 通用UI模块
// import JX3BOX_UI from '@jx3box/jx3box-common-ui'
import "@jx3box/jx3box-common/css/element.css";
import "@jx3box/jx3box-common/css/normalize.css";
// Vue.use(JX3BOX_UI);

import Bottom from "@jx3box/jx3box-common-ui/src/Bottom.vue"
Vue.component('Bottom',Bottom)

// import router from "../router";
// import store from "../store";

import Email_Verify from "./Email_Verify.vue";

new Vue({
    i18n,
    // router,
    // store,
    render: (h) => h(Email_Verify),
}).$mount("#app");
