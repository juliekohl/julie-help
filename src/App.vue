<template>
  <div :class="['/login', '/register'].includes(path) ? '' : 'app'">

    <Menu class="app__menu" />

    <router-view class="app__main" />

    <FooterUnit class="app__footer-unit" />
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import index from "./router";
import Menu from "@/components/organisms/Menu/Menu.vue";
import FooterUnit from "@/components/atoms/FooterUnit/FooterUnit.vue";
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'App',
  components: { FooterUnit, Menu },
  router: index,
  setup() {
    const route = useRoute();
    const path = computed(() =>route.path)

    return {
      path
    }
  }
})
</script>

<style lang="scss">
.app {
  @include media('>=1024') {
    display: grid;
    grid-template-rows: 1fr 50rem;
    grid-template-columns: 300rem 1fr;
    grid-template-areas:
    "menu main"
    "footer-unit footer-unit";
    height: 100vh;
  }

  &__menu {
    grid-area: menu;
  }

  &__main {
    grid-area: main;
    padding: 30rem 20rem 20rem;
  }

  &__footer-unit {
    grid-area: footer-unit;
  }
}
</style>
