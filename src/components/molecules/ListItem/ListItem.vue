<template>
  <li class="list-item">
    <router-link
        :to="{ name: showToName, params: { id: item.id } }"
        class="list-item__subitem list-item__subitem-name"
    >
      {{ item.name }}
    </router-link>
    <span v-if="item.email" class="list-item__subitem list-item__subitem-email">
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
    showToName: String
  },
})
</script>

<style lang="scss">
.list-item {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10rem;
  margin: 10rem;
  padding: 10rem;
  font-size: 20rem;
  box-shadow: var(--box-shadow-v2);
  border-radius: 3rem;

  @include media('>=600') {
    flex-direction: row;
    gap: 30rem;
    margin: 15rem;
    padding: 30rem;
    font-size: 25rem;
    border-radius: 8rem;
  }

  &__subitem {
    width: 400rem;
    color: var(--color-black);

    &-name {
      color: var(--color-secondary-45);
    }
    &-email {
      align-self: flex-start;
    }
  }
  &__button {
    font-size: 13rem;

    @include media('>=600') {
      font-size: 18rem;
    }
  }
}
</style>
