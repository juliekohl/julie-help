<template>
<!--  <nav class="nav">-->
<!--    <router-link to="/login">Login</router-link>-->
<!--    <router-link to="/coworking">Coworking</router-link>-->
<!--    <router-link to="/coworkers">Coworkers</router-link>-->
<!--    <router-link to="/teams">Teams</router-link>-->
<!--  </nav>-->
  <Menu />
  <router-view />
</template>

<script lang="ts">
import index from "./router";
import Menu from "@/components/menu/Menu.vue";

export default {
  name: 'App',
  components: {Menu},
  router: index
}
</script>
