<template>
  <router-link
    v-if="to"
    :class="[
      'button-unit',
      color && `button-unit--color-${color}`,
    ]"
    :to="to"
  >
    <slot></slot>
  </router-link>
  <button
    v-else
    :class="[
      'button-unit',
      color && `button-unit--color-${color}`,
    ]"
    v-on:click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent( {
  name: 'ButtonUnit',
  props: {
    to: Object,
    color: String,
  },
  emits: ['click'],
})
</script>

<style lang="scss">
.button-unit {
  width: 110px;
  padding: 10px;
  font-size: 7px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 3px;

  @include media('>=600') {
    width: 220px;
    font-size: 14px;
    border-radius: 5px;
  }

  &--color-purple {
    color: var(--color-white);
    background-color: var(--color-secondary-40);
  }

  &--color-gray {
    color: var(--color-black);
    background-color: var(--color-gray-50);
  }

  &--color-red {
    color: var(--color-white);
    background-color: var(--color-alert-50);
  }
}
</style>
