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
  margin: 20rem 0;
  padding: 20rem;
  box-shadow: var(--box-shadow-v2);
  border-radius: 3rem;

  @include media('>=600') {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__subitem {
    display: block;
    color: var(--color-black);

    &-name {
      color: var(--color-secondary-45);

      @include media('>=600') {
        width: 30%;
      }
    }

    &-email {
      margin: 20rem 0;

      @include media('>=600') {
        flex-grow: 1;
        margin: initial;
      }
    }
  }
  &__button {
    display: block;
    width: 100%;

    @include media('>=600') {
      width: 100rem;
    }
  }
}
</style>
