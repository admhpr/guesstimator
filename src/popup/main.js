import Vue from "vue/dist/vue.esm.js";

import PopUp from "./PopUp.vue";
import Timer from "./Timer.vue";

import Bulma from "bulma";
import BulmaExt from "bulma-extensions";
import Scss from "../styles/app.scss";


Vue.component('timer', Timer);

Vue.filter("twoDigits", value => {
  if (value.toString().length <= 1) {
    return "0" + value.toString();
  }
  return value.toString();
});

var popUpViewModel = new Vue({
  el: "#popup",
  components: {
    PopUp,
    Timer
  },
  template: '<PopUp/>',
  data: {
  }
});

window.popUpViewModel = popUpViewModel;
