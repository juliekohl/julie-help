<template>
  <nav class="menu">
    <div class="menu__header">
      <h1 class="menu__header-heading">Julie.help!</h1>
      <div
          :class="[
              'menu__header-burger',
              isBurgerActive && 'menu__header-burger--active'
          ]"
          @click.prevent="toggle"
      >
        <slot>
          <button class="menu__header-burger-button">
            <span class="menu__header-burger-bar"></span>
          </button>
        </slot>
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
      <div class="menu__sidebar-sub-heading">My Coworking</div>
      <ul class="menu__sidebar-options">
        <menu-item
            class="menu__sidebar-li"
            :to="{ name: 'CoworkersRetrieveAll'}"
            icon="user-icon"
            alt="icon-user"
        >
          Coworkers
        </menu-item>
        <menu-item
            class="menu__sidebar-li"
            :to="{ name: 'TeamsRetrieveAll'}"
            icon="user-icon"
            alt="icon-user"
        >
          Teams
        </menu-item>
        <menu-item
            class="menu__sidebar-li"
            :to="{ name: 'CoworkersRetrieveAll'}"
            icon="check-square"
            alt="check-square"
        >
          Coworking
        </menu-item>
      </ul>
    </div>
  </nav>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import MenuItem from "@/components/atoms/MenuItem/MenuItem.vue";

export default defineComponent({
  name: 'Menu',
  components: {MenuItem},
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
      padding: 25px;
      font-size: 20px;
      line-height: 27px;
      color:var(--color-secondary-40);

      @include media('>=600') {
        margin: 10px 0 0 15px;
        font-size: 32px;
      }
    }

    &-burger-button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 80px;
      height: 80px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      @include media('>=600') {
        display: none;
      }
    }

    &-burger-bar {
      width: 30px;
      height: 3px;
      background-color: var(--color-gray-70);
      border-radius: 3px;
      box-shadow: var(--box-shadow-v2);
      transition: all 0.5s ease-in-out;

      @include media('>=600') {
        width: 50px;
        height: 6px;
      }
    }

    &-burger-bar::before,
    &-burger-bar::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;
      background-color: var(--color-gray-70);
      border-radius: 3px;
      box-shadow: var(--box-shadow-v2);
      transition: all 0.5s ease-in-out;

      @include media('>=600') {
        width: 50px;
        height: 6px;
        border-radius: 5px;
      }
    }

    &-burger-bar::before {
      transform: translateY(-16px);
    }

    &-burger-bar::after {
      transform: translateY(16px);
    }

    /* ANIMATION */
    &-burger--active &-burger-bar {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
    }

    &-burger--active &-burger-bar::before {
      transform: rotate(45deg) translate(35px, -35px);
    }

    &-burger--active &-burger-bar::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }

  .menu__sidebar {
    display: none;
    transform: translateX(-100%);

    @include media('>=600') {
      display: inline;
    }

    &-sub-heading {
      margin: 0 20px;
      font-size: 18px;
      text-transform: uppercase;
      color: var(--color-gray-70);

      @include media('>=600') {
        margin: 65px 35px 0 35px;
      }
    }

    &-options {
      margin-top: 15px;
    }
  }

  .menu__sidebar--active {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin: 20px 0;
    padding: 0 1rem;
    transform: translateX(-0.7%);
    transition: all 0.5s ease-in-out;
  }
}
</style>