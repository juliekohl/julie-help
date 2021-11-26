<template>
  <ul
      class="generic-list"
  >
    <list-item
      v-for="item in all"
      class="generic-list__list-item"
      :key="item"
      :to="{ name: 'CoworkersUpdate', params: { id: item.id } }"
      :item="item"
    />
  </ul>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ListItem from "@/components/molecules/ListItem/ListItem.vue";

export default defineComponent( {
  name: 'GenericList',
  components: {ListItem},
  props: {
    item: Object,
    to: Object,
    all: Object
  }
})
</script>

<style lang="scss">
.generic-list {

  @include media('>=600') {
    padding: 0;
  }
}
</style>
