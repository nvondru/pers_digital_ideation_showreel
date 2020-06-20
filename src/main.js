import Vue from "vue";
import Eportfolio from "./Eportfolio.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Eportfolio)
}).$mount("#app");
