<template>
  <ul
      class="generic-list"
  >
    <list-item
      v-for="item in all"
      class="generic-list__list-item"
      :key="item"
      :item="item"
      update-to-name="CoworkersUpdate"
      retrieve-single-to-name="CoworkersRetrieveAll"
    />
  </ul>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import ListItem, {PropsItem as ListItemPropsItem} from "@/components/molecules/ListItem/ListItem.vue";

export default defineComponent( {
  name: 'GenericList',
  components: {ListItem},
  props: {
    all: {
      type: Object as PropType<ListItemPropsItem[]>,
      required: true
    }
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
