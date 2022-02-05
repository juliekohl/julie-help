<template>
  <div class="app">
    <Menu
        v-if="currentUser"
        class="app__menu"
    />

    <button v-if="currentUser" @click.prevent="logout">
      Logout
    </button>

    <router-view class="app__main" />

    <FooterUnit class="app__footer-unit" />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import index from "./router";
import Menu from "@/components/organisms/Menu/Menu.vue";
import FooterUnit from "@/components/atoms/FooterUnit/FooterUnit.vue";
import { useStore } from 'vuex';
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'App',
  components: { FooterUnit, Menu },
  router: index,
  setup() {
    const store = useStore();
    const route = useRouter();

    const currentUser = computed(() => {
      return store.state.auth.user;
    });

    const logout = () => {
      store.dispatch('auth/logout')
      route.push('/login')
    };

    return {
      currentUser,
      logout
    }
  }
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
    "menu footer-unit";
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
