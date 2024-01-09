<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
// Import the NavBar component
import NavBar from '../components/Header.vue';

export default {
  components: {
    NavBar, // Register the NavBar component
  },
  // Any other logic or data for this component goes here
};
</script>

<style>
/* Add styles for this component */
</style>
