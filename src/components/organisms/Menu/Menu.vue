<template>
  <nav class="menu" v-if="currentUser">
    <div class="menu__header">
      <h1 class="menu__header-heading">Julie.help!</h1>
      <div
          :class="[
              'menu__header-burger',
              isBurgerActive && 'menu__header-burger--active'
          ]"
          @click.prevent="toggle"
      >
        <button class="menu__header-burger-button">
          <span class="menu__header-burger-bar"></span>
        </button>
      </div>
    </div>
    <div
      v-if="isBurgerActive === isSidebarActive"
      :class="[
        'menu__sidebar',
        isSidebarActive && 'menu__sidebar--active'
      ]"
      @click.prevent="toggle"
    >
      <div class="menu__sidebar-subheading">My Coworking</div>
      <ul class="menu__sidebar-options">
        <menu-item
            class="menu__sidebar-li"
            :to="{ name: 'Dashboard'}"
            icon="home-icon"
            alt="home icon"
        >
          Dashboard
        </menu-item>
        <menu-item
            class="menu__sidebar-li"
            :to="{ name: 'CoworkersShowAll'}"
            icon="user-icon"
            alt="user icon"
        >
          Coworkers
        </menu-item>
        <menu-item
            class="menu__sidebar-li"
            :to="{ name: 'TeamsShowAll'}"
            icon="chat-icon"
            alt="chat icon"
        >
          Teams
        </menu-item>
        <menu-item
            class="menu__sidebar-li"
            :to="{ name: 'OfficesShowAll'}"
            icon="clock-icon"
            alt="clock icon"
        >
          Offices
        </menu-item>
        <menu-item
            class="menu__sidebar-li"
            :to="{ name: 'PlansShowAll'}"
            icon="check-square"
            alt="check square icon"
        >
          Plans
        </menu-item>
        <menu-item
            class="menu__sidebar-li"
            :to="{ name: 'CoworkersShowAll'}"
            icon="anchor-icon"
            alt="anchor icon"
        >
          Coworking
        </menu-item>
        <menu-item
            class="menu__sidebar-li"
            v-if="currentUser"
            @click.prevent="logout"
            :to="{ name: 'Login'}"
            icon="logout-icon"
            alt="logout icon"
        >
          Logout
        </menu-item>
      </ul>
    </div>
  </nav>

</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import MenuItem from "@/components/molecules/MenuItem/MenuItem.vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'Menu',
  components: {MenuItem},
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
  },
  data: () => ({
    isBurgerActive: false,
    isSidebarActive: false,
  }),
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
      this.isSidebarActive = !this.isSidebarActive
    }
  }
})
</script>

<style lang="scss">
.menu {
  width: 100%;
  padding: 0.5rem 0.8rem;
  background: var(--color-gray-blue);
  box-shadow: var(--box-shadow-v2);

  @include media('>=600') {
    height: 100%;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &-heading {
      padding: 25rem;
      font-size: 20rem;
      line-height: 27rem;
      color:var(--color-secondary-40);

      @include media('>=600') {
        margin: 10rem 0 0 15rem;
        font-size: 32rem;
      }
    }

    &-burger-button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 80rem;
      height: 80rem;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      @include media('>=600') {
        display: none;
      }
    }

    &-burger-bar {
      width: 30rem;
      height: 3rem;
      background-color: var(--color-gray-70);
      border-radius: 3rem;
      box-shadow: var(--box-shadow-v2);
      transition: all 0.5s ease-in-out;

      @include media('>=600') {
        width: 50rem;
        height: 6rem;
      }
    }

    &-burger-bar::before,
    &-burger-bar::after {
      content: '';
      position: absolute;
      width: 30rem;
      height: 3rem;
      background-color: var(--color-gray-70);
      border-radius: 3rem;
      box-shadow: var(--box-shadow-v2);
      transition: all 0.5s ease-in-out;

      @include media('>=600') {
        width: 50rem;
        height: 6rem;
        border-radius: 5rem;
      }
    }

    &-burger-bar::before {
      transform: translateY(-16rem);
    }

    &-burger-bar::after {
      transform: translateY(16rem);
    }

    /* ANIMATION */
    &-burger--active &-burger-bar {
      transform: translateX(-50rem);
      background: transparent;
      box-shadow: none;
    }

    &-burger--active &-burger-bar::before {
      transform: rotate(45deg) translate(35rem, -35rem);
    }

    &-burger--active &-burger-bar::after {
      transform: rotate(-45deg) translate(35rem, 35rem);
    }
  }

  .menu__sidebar {
    display: none;
    transform: translateX(-100%);

    @include media('>=600') {
      display: inline;
    }

    &-subheading {
      margin: 0 20rem;
      font-size: 18rem;
      text-transform: uppercase;
      color: var(--color-gray-70);

      @include media('>=600') {
        margin: 65rem 35rem 0 35rem;
      }
    }

    &-options {
      margin-top: 15rem;
    }
  }

  .menu__sidebar--active {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin: 20rem 0;
    padding: 0 1rem;
    transform: translateX(-0.7%);
    transition: all 0.5s ease-in-out;
  }
}
</style>
