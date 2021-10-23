<template>
  <nav class="nav">
    <router-link to="/login">Login</router-link>
    <router-link to="/coworking">Coworking</router-link>
    <router-link to="/coworker">Coworker</router-link>
    <router-link to="/team">Team</router-link>
  </nav>
  <router-view></router-view>
</template>

<script lang="ts">
import router from "./router";

export default {
  name: 'App',
  router: router
}
</script>

<style>

</style>
