<template>
<!--  <nav class="nav">-->
<!--    <router-link to="/login">Login</router-link>-->
<!--    <router-link to="/coworking">Coworking</router-link>-->
<!--    <router-link to="/coworkers">Coworkers</router-link>-->
<!--    <router-link to="/teams">Teams</router-link>-->
<!--  </nav>-->
  <Menu />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import index from "./router";
import Menu from "@/components/menu/Menu.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: 'App',
  components: {Footer, Menu},
  router: index
}
</script>
<style lang="scss">

</style>
