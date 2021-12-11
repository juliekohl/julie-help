<template>
  <li class="list-item">
    <router-link
        :to="{ name: ShowToName, params: { id: item.id } }"
    >
      {{ item.name }}
    </router-link>
    <span v-if="item.email" class="list-item__subitem">
      {{ item.email }}
    </span>
    <span v-if="item.type" class="list-item__subitem">
      {{ item.type }}
    </span>
    <button-unit
        class="list-item__button"
        color="gray"
        :to="{ name: updateToName, params: { id: item.id } }"
    >
      Edit
    </button-unit>
  </li>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

export interface PropsItem {
  id: number;
  name: string;
  email?: string;
  type?: string;
}

export default defineComponent( {
  name: 'ListItem',
  components: { ButtonUnit },
  props: {
    item: {
      type: Object as PropType<PropsItem>,
      required: true
    },
    updateToName: String,
    ShowToName: String
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
