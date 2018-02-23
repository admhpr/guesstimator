<template lang="html">
  <div>
    <div class="wrapper">
      <div class="columns">
        <aside class="column is-2 aside">
          <nav class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><a class="is-active" href="#"><span class="icon is-small"><i class="fa fa-tachometer"></i></span> Dashboard</a></li>
            </ul>
            <p class="menu-label">
              Administration
            </p>
            <ul class="menu-list">
              <li>
                <a href="">
                </a>
              </li>
              <li>
                <a class=""><i class="fa fa-cog"></i> Settings</a>
                <ul>
                  <li><a></a></li>
                </ul>
              </li>
            </ul>
            <p class="menu-label">
              Live On
            </p>
            <ul class="menu-list">
              <li><a><span class="icon is-small"><i class="fa fa-bug"></i></span> Additional Pages</a></li>
              <li><a><span class="icon is-small"><i class="fa fa-windows"></i></span> Extras</a></li>
              <li><a><span class="icon is-small"><i class="fa fa-laptop"></i></span> Landing Page</a></li>
            </ul>
          </nav>
        </aside>

        <main class="column main">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <div class="title has-text-primary"><i class="fa fa-tachometer"></i><span id="title">Dashboard</span></div>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button type="button" class="button is-small">
                  March 8, 2017 - April 6, 2017
                </button>
              </div>
            </div>
          </div>

        

          <inner-tabs>
            <inner-tab name="Overview" :selected="true">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <div class="panel">
                    <p class="panel-heading">
                        Chart - Bar Style (Chart.js)
                      </p>
                      <line-chart></line-chart>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="panel">
                    <p class="panel-heading">
                        Chart - Bar Style (Chart.js)
                      </p>
                      <bar-chart></bar-chart>  
                  </div>
                </div>
              </div>
            </inner-tab>
            <inner-tab name="Insights"></inner-tab>
            <inner-tab name="Settings"></inner-tab>
            <inner-tab name="Documents"></inner-tab>
          </inner-tabs>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Vue.js"
    };
  }
};
</script>

<style lang="scss">
@import '../styles/app.scss';
$light : hsl(0, 0%, 85%);
.vue {
  color: #000;
  display: block;
  text-align: center;
}

main{
    border-left: solid 1px $light;
}

#title{
  color: lighten($green, 10);
}

</style>