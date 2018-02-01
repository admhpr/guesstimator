import Vue from "vue/dist/vue.esm.js";

import Timer from "./tab/Timer.vue";
import App from "./App.vue";

import Bulma from "bulma";
import BulmaExt from "bulma-extensions";
import Scss from "./styles/app.scss";


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

window.vm = vm;
