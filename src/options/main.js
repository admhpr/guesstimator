import Vue from "vue/dist/vue.esm.js";

import Options from "./Options.vue";

import Tab from "./components/Tab.vue";
import Tabs from "./components/Tabs.vue";

import LineChart from "./charts/LineChart.vue";
import BarChart from "./charts/BarChart.vue";

import Bulma from "bulma";
import BulmaExt from "bulma-extensions";
import Scss from "../styles/app.scss";

Vue.component("options", Options);

Vue.component("tabs", Tabs);
Vue.component("tab", Tab);

Vue.component("line-chart", LineChart)
Vue.component("bar-chart", BarChart)

var optionsViewModel = new Vue({
  el: "#options",
  components: {
    Options,
    Tabs,
    Tab,
    LineChart,
    BarChart
  },
  template: "<Options/>",
  data: {}
});
