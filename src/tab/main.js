import Vue from "vue/dist/vue.esm.js";

import Tab from "./Tab.vue";

import InnerTab from "./components/InnerTab.vue";
import InnerTabs from "./components/InnerTabs.vue";

import LineChart from "./charts/LineChart.vue";
import BarChart from "./charts/BarChart.vue";

import Bulma from "bulma";
import BulmaExt from "bulma-extensions";
import Scss from "../styles/app.scss";

Vue.component("tab", Tab);

Vue.component("inner-tabs", InnerTabs);
Vue.component("inner-tab", InnerTab);

Vue.component("line-chart", LineChart)
Vue.component("bar-chart", BarChart)

var tabViewModel = new Vue({
  el: "#tab",
  components: {
    Tab,
    InnerTabs,
    InnerTab,
    LineChart,
    BarChart
  },
  template: "<tab/>",
  data: {}
});
