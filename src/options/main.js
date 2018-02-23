import Vue from "vue/dist/vue.esm.js";

import Options from "./Options.vue";

import Bulma from "bulma";
import BulmaExt from "bulma-extensions";
import Scss from "../styles/app.scss";

Vue.component("options", Options);

var optionsViewModel = new Vue({
  el: "#options",
  components: {
    Options
  },
  template: "<options/>",
  data: {}
});

