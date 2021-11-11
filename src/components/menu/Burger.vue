<template>
  <div id="burger"
       :class="{ 'active' : isBurgerActive }"
       @click.prevent="toggle">
    <slot>
      <button class="burger__button" title="Menu">
        <span class="burger__bar"></span>
      </button>
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
// import { store, mutations } from '@/store.js';

export default defineComponent ({
  name: 'Burger',
  data: () => ({
    isBurgerActive: false
  }),
  // computed: {
  //   isBurgerActive() {
  //     return store.isNavOpen
  //   }
  // },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
      // mutations.toggleNav()
    }
  }
})
</script>

<style lang="scss" scoped>
.burger__button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.burger__bar {
  width: 50px;
  height: 6px;
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: var(--box-shadow-v2);
  transition: all 0.5s ease-in-out;
}
.burger__bar::before,
.burger__bar::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 6px;
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: var(--box-shadow-v2);
  transition: all 0.5s ease-in-out;
}
.burger__bar::before {
  transform: translateY(-16px);
}
.burger__bar::after {
  transform: translateY(16px);
}

/* ANIMATION */
#burger.active .burger__bar{
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
#burger.active .burger__bar::before {
  transform: rotate(45deg) translate(35px, -35px);
}
#burger.active .burger__bar::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
</style>
