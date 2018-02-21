<template>
  <div id="home">
    <div v-show="loggedIn">
      <label for="selectedDate" >
        <span class="has-text-info">
          Current Deadline: 
          {{ selectedDate }}
        </span>
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </label>
      <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li><a href="options.html"><span class="icon is-small"><i class="fa fa-cog"></i></span><span>Settings</span></a></li>
          <li @click="openDashboard" ><a href="#"><span class="icon is-small"><i class="fa fa-chart-bar"></i></span><span>Dashboard</span></a></li>
        </ul>
      </nav>

      <!-- date picker input -->
      <div class="field has-addons has-addons-centered">
        <div class="control">
          <input id="datepicker" :text="selectedDate" class="input" type="text">
        </div>
        <div class="control">
          <a class="button is-outlined is-success" @click="setDate">Set</a>
        </div>
      </div>
      <!-- end -->

      <div class="box">
        <timer :deadline="deadline" ></timer>
      </div>

      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <a @click="logout" class="button is-link is-outlined">Logout</a>
          <button class="button is-danger is-outlined">
              Stop Timer
          </button>
          <button class="button is-success is-outlined">
              Start Timer
          </button>
        </p>
      </div>

      <div class="bottom-buffer">
      </div>

    </div> <!-- end if logged in-->

    <div v-show="!loggedIn">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Guesstimator
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field  has-addons has-addons-centered">
              <p :class="{'control' : true, 'has-icons-left' : true, 'is-loading' : inputIsLoading}">
                <input v-model="baseUrl" :class="{ 'input' : true, 'is-info' : !inputHasError, 'is-danger' : inputHasError }" type="text" placeholder="Info input">
                <span class="icon is-small is-left">
                <i class="fa fa-random"></i>
                </span>
              </p>
              <div class="control">
                <a class="button is-info" @click="checkCredentials">Set</a>
              </div>
            </div>
            <div v-show="inputHasError">
              <p class="help is-danger">Please make sure you are logged in to Jira and the url is correct</p>
              <a @click="openJiraLogin" class="button is-medium is-link">
                <span class="icon">
                  <i class="fa fa-object-group"></i>
                </span>
                <span>Jira</span>
              </a>
            </div>      
          </div>
        </div>
        <footer class="card-footer">

        </footer>
      </div>
    </div> <!-- end else logged in -->

  </div>
</template>

<script>
import axios from 'axios'
import Timer from "./Timer.vue";
import Background from "../background.js"
import DatePicker from "bulma-extensions/bulma-calendar/datepicker.js"

export default {
  props: [],
  name: "Tab",
  components: [
    Timer
  ],
  data() {
    return {
      selectedDate: 'None Set',
      deadline: '0',
      loggedIn: window.localStorage.getItem('loggedIn'),
      baseUrl: '',
      inputIsLoading: false,
      inputHasError: false,
      bg: new Background()

    };
  },
  methods: {
    setDate(){
      let dateInput = document.getElementById('datepicker');
      this.selectedDate = dateInput.value;
      this.deadline = this.selectedDate;
    },
    openDashboard(){
      this.bg.openNewTab("./pages/options.html");  
    },
    openJiraLogin(){
      this.bg.openNewTab("https://id.atlassian.com/login");  
    },
    checkCredentials(){
        this.inputIsLoading = true;
        axios
        .get(`https://${this.baseUrl}.atlassian.net/rest/api/2/configuration`)
        .then((res) => {
          console.log(res);
          if(res.status === 200){
            console.log(res)
            setTimeout(()=>{
              this.bg.setLocalStorage('loggedIn',true);
              this.loggedIn = this.bg.getLocalStorage('loggedIn');
              this.inputIsLoading = false;
            }, 1000)
          }else{
            this.inputIsLoading = false;
            this.inputHasError = true;
          }
        } ).catch((e) => {
         if(e){
            setTimeout(()=>{
              this.loggedIn = false;
              this.inputIsLoading = false;
              this.inputHasError = true;
            }, 1000)
         }
       })
    },
    logout(){
      this.bg.removeLocalStorage('loggedIn');
      this.loggedIn = false
    }
  },
  created(){
    
  },
  beforeMount(){;
  },
  mounted(){
    if(this.loggedIn){
      let datePicker = new DatePicker( document.getElementById( 'datepicker' ), {
        overlay : true
      } );
    }
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