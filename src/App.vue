<template>
  <div id="app" class="py-3">
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap';

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#f2e9e4;
}
</style>
