<template>
  <div id="app">
    <ds-header></ds-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <ds-footer></ds-footer>
  </div>
</template>

<script>
import "./asset/css/common.css";
import "./asset/css/reset.css";

import DsHeader from "./component/DsHeader.vue";
import DsFooter from "./component/DSFooter.vue";

export default {
  name: "app",
  components: {
    DsHeader,
    DsFooter
  }
};
</script>

<style>
</style>