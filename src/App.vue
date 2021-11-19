<template>
  <div class="app">
    <Menu class="app__menu" />
    <router-view class="app__main" />
    <Footer class="app__footer" />
  </div>
</template>

<script lang="ts">
import index from "./router";
import Menu from "@/components/menu/Menu.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: 'App',
  components: { Footer, Menu },
  router: index
}
</script>

<style lang="scss">
.app {

  @include media('>=600') {
    display: grid;
    grid-template-rows: 1fr 50px;
    grid-template-columns: 300px 1fr;
    grid-template-areas:
    "menu main"
    "menu footer";
  }

  &__menu {
    grid-area: menu;
  }

  &__main {
    grid-area: main;
  }

  &__footer {
    grid-area: footer;
  }
}
</style>
