<template>
  <div id="app">
    <PageLayer/>
  </div>
</template>

<script>
import PageLayer from './components/pageLayer.vue'
export default {
  name: "App",
  components: {
    PageLayer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
