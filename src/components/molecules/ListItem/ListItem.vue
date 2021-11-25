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
  gap: 10px;
  margin: 10px;
  padding: 10px;
  font-size: 10px;
  text-align: left;
  color: var(--color-secondary-45);
  box-shadow: var(--box-shadow-v2);
  border-radius: 3px;

  @include media('>=600') {
    margin: 15px;
    padding: 30px;
    font-size: 15px;
    border-radius: 8px;
  }

  &__subitem {
    color: var(--color-black);
  }
}
</style>
