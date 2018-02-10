import Vue from "vue/dist/vue.esm.js";

import Tab from "./Tab.vue";

import Bulma from "bulma";
import BulmaExt from "bulma-extensions";
import Scss from "../styles/app.scss";

Vue.component("tab ", Tab);

var tabViewModel = new Vue({
  el: "#tab",
  components: {
    Tab
  },
  template: "<Tab/>",
  data: {}
});

module.exports = tabViewModel;
