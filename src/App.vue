<template>
  <div class="app">
    <Menu class="app__menu" />

    <router-view class="app__main" />

    <FooterUnit class="app__footer-unit" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import index from "./router";
import Menu from "@/components/organisms/Menu/Menu.vue";
import FooterUnit from "@/components/atoms/FooterUnit/FooterUnit.vue";

export default defineComponent({
  name: 'App',
  components: { FooterUnit, Menu },
  router: index,
})
</script>

<style lang="scss">
.app {

  @include media('>=600') {
    display: grid;
    grid-template-rows: 1fr 50px;
    grid-template-columns: 300px 1fr;
    grid-template-areas:
    "menu main"
    "footer-unit footer-unit";
  }

  &__menu {
    grid-area: menu;
  }

  &__main {
    grid-area: main;
  }

  &__footer-unit {
    grid-area: footer-unit;
  }
}
</style>
