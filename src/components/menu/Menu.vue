<template>
  <nav class="menu">
    <h1 class="menu__heading">Julie.help!</h1>
    <div
        :class="[
            'menu__burger',
            isBurgerActive && 'menu__burger--active'
        ]"
        @click.prevent="toggle"
    >
      <slot>
        <button class="menu__burger-button">
          <span class="menu__burger-bar"></span>
        </button>
      </slot>
    </div>
  </nav>

  <div
    v-if="isBurgerActive === isSidebarActive"
    :class="[
      'sidebar',
      isSidebarActive && 'sidebar__active'
    ]"
  >
    <div class="sidebar__sub-heading">My Coworking</div>
    <ul class="sidebar__options">
      <li class="sidebar__li">
        <router-link :to="{ name: 'Coworkers'}" @click.prevent="toggle">
          <img src="@/assets/img/icons/user-icon.svg" alt="icon-user">
          <span>Coworkers</span>
        </router-link>
      </li>
      <li class="sidebar__li">
        <router-link :to="{ name: 'Teams'}" @click.prevent="toggle">
          <img src="@/assets/img/icons/user-icon.svg" alt="icon-user">
          <span>Teams</span>
        </router-link>
      </li>
      <li class="sidebar__li">
        <router-link :to="{ name: 'Coworkers'}" @click.prevent="toggle">
          <img src="@/assets/img/icons/user-icon.svg" alt="icon-user">
          <span>Coworking</span>
        </router-link>
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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem 0.8rem;
  background: var(--color-gray-blue);
  box-shadow: var(--box-shadow-v2);

  @include media('>=420') {
    width: 280px;
  }

  @include media('>=1024') {
    width: 350px;
  }

  &__heading {
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

  &__burger-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  &__burger-bar {
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
  &__burger-bar::before,
  &__burger-bar::after {
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
  &__burger-bar::before {
    transform: translateY(-16px);
  }
  &__burger-bar::after {
    transform: translateY(16px);
  }

  /* ANIMATION */
  &__burger--active &__burger-bar{
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  &__burger--active &__burger-bar::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  &__burger--active &__burger-bar::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
}
.sidebar{
  background: var(--color-gray-blue);
  box-shadow: var(--box-shadow-v2);
  transform: translateX(-100%);
}
.sidebar__active {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  transform: translateX(-0.7%);
  transition: all 0.5s ease-in-out;

  @include media('>=420') {
    width: 280px;
  }

  @include media('>=1024') {
    width: 352px;
  }
}

.sidebar__sub-heading {
  margin: 0 20px;
  font-size: 18px;
  text-transform: uppercase;
  color: var(--color-gray-70);

  @include media('>=1024') {
    margin: 65px 35px 0px 35px;
  }
}
.sidebar__options {
  margin-top: 15px;
}
.sidebar__li {
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
</style>