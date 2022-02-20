<template>
  <div class="show-all">
    <header class="show-all__header">
      <h1 class="show-all__header-heading">{{ title }}</h1>
      <button-unit
          class="show-all__header-button"
          color="purple"
          :to="{ name: createToName }"
      >
        Add new {{ createButtonText }}
      </button-unit>
    </header>
    <section class="show-all__options">
      <ul class="show-all__options-ul">
        <list-item
            v-for="item in all"
            class="show-all__options-li"
            :key="item"
            :item="item"
            :update-to-name="updateToName"
            :show-to-name="showToName"
        />
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";
import ListItem from "@/components/molecules/ListItem/ListItem.vue";

export default defineComponent( {
  name: 'ShowAll',
  components: {ListItem, ButtonUnit},
  props: {
    title: String,
    createToName: String,
    createButtonText: String,
    all: Object,
    updateToName: String,
    showToName: String
  },
})
</script>

<style lang="scss">
.show-all {
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 20rem;
  }

  &__header-heading {
    align-self: center;
    color: var(--color-black);
  }

  &__header-button {
  }

  &__options-ul {
    padding: 0;
  }
}
</style>
