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
    @click="$emit('click')"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {PropsTo} from "@/shared/types/PropsTo.interface";

export default defineComponent( {
  name: 'ButtonUnit',
  props: {
    to: {
      type: Object as PropType<PropsTo>,
      required: false
    },
    color: {
      type: String,
      default: null,
      validator: (value: string) => {
        return ['purple', 'red', 'gray'].includes(value);
      }
    },
    type: {
      type: String,
      default: 'button',
      validator: (value: string) => {
        return ['button', 'submit', 'reset'].includes(value);
      }
    }
  },
  emits: ['click'],
})
</script>

<style lang="scss">
.button-unit {
  width: 110rem;
  padding: 10rem;
  font-size: 7rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 3rem;

  @include media('>=600') {
    width: 220rem;
    font-size: 14rem;
    border-radius: 5rem;
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
