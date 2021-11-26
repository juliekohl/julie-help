<template>
  <li class="list-item">
    {{ item.name }}
    <span class="list-item__subitem">
      {{ item.email }}
    </span>
    <button-unit
        class="list-item__button"
        color="gray"
        :to="to"
    >
      Edit
    </button-unit>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

export default defineComponent( {
  name: 'ListItem',
  components: { ButtonUnit },
  props: {
    item: Object,
    to: Object
  },
})
</script>

<style lang="scss">
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  margin: 10rem;
  padding: 10rem;
  font-size: 10rem;
  text-align: left;
  color: var(--color-secondary-45);
  box-shadow: var(--box-shadow-v2);
  border-radius: 3rem;

  @include media('>=600') {
    margin: 15rem;
    padding: 30rem;
    font-size: 15rem;
    border-radius: 8rem;
  }

  &__subitem {
    color: var(--color-black);
  }
}
</style>
