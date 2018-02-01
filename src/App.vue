<template>
  <div id="home">

    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li><a href="#"><span class="icon is-small"><i class="fas fa-puzzle-piece"></i></span><span>Settings</span></a></li>
        <li><a href="#"><span class="icon is-small"><i class="fas fa-book"></i></span><span>Dashboard</span></a></li>
      </ul>
    </nav>

    <!-- date picker input -->
    <div class="field has-addons has-addons-centered">
      <div class="control">
        <input id="datepicker" :value="selectedDate" class="input" type="text">
        {{ selectedDate }}
      </div>
      <div class="control">
        <a class="button is-success" @click="setDate">Set</a>
      </div>
    </div>
    <!-- end -->

    <div class="box">
      <timer :deadline="deadline" ></timer>
    </div>

    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <button class="button is-danger">
            Stop Timer
        </button>
        <button class="button is-success">
            Start Timer
        </button>
      </p>
    </div>

    <div class="bottom-buffer"></div>

  </div>
</template>

<script>
import Timer from "./tab/Timer.vue";
import DatePicker from "bulma-extensions/bulma-calendar/datepicker.js"
export default {
  props: [],
  name: "App",
  components: [
    Timer
  ],
  data() {
    return {
      selectedDate: '',
      deadline: 0,
      msg: "If these letters are green Webpack is working",
      sass: "and Sass is working"
    };
  },
  methods: {
    setDate(){
      let dateValue = document.getElementById('datepicker').value;
      this.deadline = dateValue;
    }
  },
  mounted(){
    var datePicker = new DatePicker( document.getElementById( 'datepicker' ), {
      overlay : true
    } );
  }
};
</script>

<style lang="scss">

#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #449c75;;
  margin-top: 60px;
  width: 500px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.bottom-buffer{
  padding: 20px;
}
</style>