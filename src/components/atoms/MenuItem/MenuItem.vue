<template>
  <li class="menu-item">
    <button-unit
      class="menu-item__button"
      :to="to"
    >
      <img
          class="menu-item__button-image"
          :src="require(`@/assets/img/icons/${icon}.svg`)"
          :alt="alt"
      />
      <span  class="menu-item__button-span"><slot></slot></span>
    </button-unit>
  </li>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

export default defineComponent( {
  name: 'MenuItem',
  components: {ButtonUnit},
  props: {
    to: Object,
    icon: String,
    alt: String
  },
})
</script>

<style lang="scss">
.menu-item {
  margin: 8rem 15rem;
  line-height: 28rem;

  &__button {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &-image {
      align-self: center;
      margin-right: 10rem;
      width: 20rem;
      height: 20rem;
    }

    &-span {
      display: inline-flex;
      align-self: center;
      font-size: 19rem;
      color: var(--color-gray-90);
      text-transform: initial;
    }
  }
}
</style>
