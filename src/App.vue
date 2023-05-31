<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
body {
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #000000 50%,
    #d5d4c2 110%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #000000 50%,
    #d5d4c2 110%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
@media only screen and (max-width: 768px) {
  body {
    background: #000000; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #000000 50%,
      #d5d4c2 110%
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #000000 50%,
      #d5d4c2 110%
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}
::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-track {
  border: 1px solid #8f6e5d;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #8f6e5d;
}
</style>
