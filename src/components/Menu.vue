<template class="page__menu">
  <nav class="menu">
    <h2 class="menu__heading">Julie.help!</h2>
    <div class="menu__burger"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
      <slot>
        <button class="menu__burger_button" title="Menu">
          <span class="menu__burger_bar"></span>
        </button>
      </slot>
    </div>
  </nav>

    <div class="sidebar"
         :class="{'active' : isSidebarActive}"
         v-if="isBurgerActive === isSidebarActive">
      <div class="sidebar__heading">MY COWORKING</div>
      <ul class="sidebar__options">
        <li class="sidebar__li">
          <router-link :to="{ name: 'Coworkers'}">{{ name }} Coworkers</router-link>
        </li>
        <li class="sidebar__li">
          <router-link :to="{ name: 'Teams'}">{{ name }} Teams</router-link>
        </li>
        <li class="sidebar__li">
          <a>Coworking</a>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Menu',
  data: () => ({
    isBurgerActive: false,
    isSidebarActive: false
  }),
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
      this.isSidebarActive = !this.isSidebarActive
    }
  }
})
</script>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0.5rem 0.8rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.3);

  @include media('>=420') {
    width: 280px;
  }

  @include media('>=1024') {
    width: 260px;
  }

  &__heading {
    padding: 25px;
    font-size: 22px;
    line-height: 27px;
    color: #7e72f2;

    @include media('>=600') {
      font-size: 27px;
    }

    @include media('>=1024') {
      font-size: 32px;
    }
  }
  &__burger_button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: relative;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    @include media('>=1200') {
      display: none;
    }
  }
  &__burger_bar {
    width: 30px;
    height: 3px;
    background-color: #8d8d8d;
    border-radius: 3px;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.3);
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
  &__burger_bar::before,
  &__burger_bar::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #8d8d8d;
    border-radius: 3px;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.3);
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
  &__burger_bar::before {
    transform: translateY(-16px);
  }
  &__burger_bar::after {
    transform: translateY(16px);
  }

  /* ANIMATION */
  &__burger.active &__burger_bar{
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  &__burger.active &__burger_bar::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  &__burger.active &__burger_bar::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
}
.sidebar{
  transform: translateX(-100%);
}
.sidebar.active {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 1.5rem 1rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.3);
  transform: translateX(-0.7%);
  transition: all 0.5s ease-in-out;

  @include media('>=420') {
    width: 280px;
  }

  @include media('>=1024') {
    width: 260px;
  }

  &__heading {
    font-size: 14px;
    color: #8d8d8d;

    @include media('>=600') {
      font-size: 17px;
    }

    @include media('>=1024') {
      font-size: 20px;
    }
  }

  &__options > &__li > a {
    margin: 20px;
    font-size: 15px;
    color: #1e1e20;
    line-height: 40px;

    @include media('>=600') {
      font-size: 18px;
    }

    @include media('>=1024') {
      font-size: 21px;
    }
  }
}
</style>