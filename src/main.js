import Vue from "vue/dist/vue.esm.js";
import App from "./App.vue";

import Bulma from "bulma";
import BulmaExt from "bulma-extensions";
import Scss from "./styles/app.scss";

import Timer from "./tab/Timer.vue";

Vue.component('timer', Timer);

Vue.filter("twoDigits", value => {
  if (value.toString().length <= 1) {
    return "0" + value.toString();
  }
  return value.toString();
});

var vm = new Vue({
  el: "#popup",
  components: {
    App,
    Timer
  },
  template: '<App/>',
  data: {
  }
});
