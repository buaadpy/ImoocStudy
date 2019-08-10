<template>
  <div id="app">
    <ds-header></ds-header>
    <good-list></good-list>
    <ds-footer></ds-footer>
  </div>
</template>

<script>
import "./asset/css/common.css";
import "./asset/css/reset.css";

import DsHeader from "./component/DsHeader.vue";
import DsFooter from "./component/DSFooter.vue";
import GoodList from "./component/GoodList.vue";
import LoginBox from "./component/LoginBox.vue";

export default {
  name: "app",
  components: {
    DsHeader,
    DsFooter,
    GoodList,
    LoginBox
  }
};
</script>

<style>
</style>