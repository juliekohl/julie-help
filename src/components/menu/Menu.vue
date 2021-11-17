<template>
  <nav class="menu">
    <div class="menu__header">
      <h1 class="menu__header--heading">Julie.help!</h1>
      <div
          :class="[
              'menu__header--burger',
              isBurgerActive && 'menu__header--burger-active'
          ]"
          @click.prevent="toggle"
      >
        <slot>
          <button class="menu__header--burger-button">
            <span class="menu__header--burger-bar"></span>
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
    >
      <div class="menu__sidebar--sub-heading">My Coworking</div>
      <ul class="menu__sidebar--options">
        <li class="menu__sidebar--li">
          <router-link :to="{ name: 'Coworkers'}" @click.prevent="toggle">
            <img src="@/assets/img/icons/user-icon.svg" alt="icon-user">
            <span>Coworkers</span>
          </router-link>
        </li>
        <li class="menu__sidebar--li">
          <router-link :to="{ name: 'Teams'}" @click.prevent="toggle">
            <img src="@/assets/img/icons/user-icon.svg" alt="icon-user">
            <span>Teams</span>
          </router-link>
        </li>
        <li class="menu__sidebar--li">
          <router-link :to="{ name: 'Coworkers'}" @click.prevent="toggle">
            <img src="@/assets/img/icons/user-icon.svg" alt="icon-user">
            <span>Coworking</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Menu',
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0.8rem;
  background: var(--color-gray-blue);
  box-shadow: var(--box-shadow-v2);

  @include media('>=420') {
    width: 280px;
  }

  @include media('>=1024') {
    position: initial;
    width: 350px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &--heading {
      padding: 25px;
      font-size: 20px;
      line-height: 27px;
      color:var(--color-secondary-40);

      @include media('>=600') {
        font-size: 23px;
      }

      @include media('>=1024') {
        margin: 10px 0 0 15px;
        font-size: 32px;
      }
    }

    &--burger-button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 80px;
      height: 80px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      //@include media('>=1024') {
      //  display: none;
      //}
    }

    &--burger-bar {
      width: 30px;
      height: 3px;
      background-color: var(--color-gray-70);
      border-radius: 3px;
      box-shadow: var(--box-shadow-v2);
      transition: all 0.5s ease-in-out;

      @include media('>=600') {
        width: 40px;
        height: 4px;
        border-radius: 5px;
      }
      @include media('>=1024') {
        width: 50px;
        height: 6px;
      }
    }
    &--burger-bar::before,
    &--burger-bar::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;
      background-color: var(--color-gray-70);
      border-radius: 3px;
      box-shadow: var(--box-shadow-v2);
      transition: all 0.5s ease-in-out;

      @include media('>=600') {
        width: 40px;
        height: 4px;
        border-radius: 5px;
      }
      @include media('>=1024') {
        width: 50px;
        height: 6px;
      }
    }
    &--burger-bar::before {
      transform: translateY(-16px);
    }
    &--burger-bar::after {
      transform: translateY(16px);
    }

    /* ANIMATION */
    &--burger-active &--burger-bar {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
    }
    &--burger-active &--burger-bar::before {
      transform: rotate(45deg) translate(35px, -35px);
    }
    &--burger-active &--burger-bar::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }

  .menu__sidebar {
    display: none;
    transform: translateX(-100%);

    @include media('>=420') {
      width: 280px;
    }

    @include media('>=1024') {
      position: initial;
      width: 352px;
      height: 100vh;
    }

    &--sub-heading {
      margin: 0 20px;
      font-size: 18px;
      text-transform: uppercase;
      color: var(--color-gray-70);

      @include media('>=1024') {
        margin: 65px 35px 0px 35px;
      }
    }
    &--options {
      margin-top: 15px;
    }
    &--li {
      margin: 8px 15px;
      line-height: 28px;

      img {
        margin-right: 10px;
        width: 20px;
        height: 20px;
      }

      span {
        display: inline-flex;
        font-size: 19px;
        color: var(--color-gray-90);
      }
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