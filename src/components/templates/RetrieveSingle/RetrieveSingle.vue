<template>
  <div class="retrieve-single">
    <header class="retrieve-single__header">
      <h1 class="retrieve-single__header-heading">{{ title }}</h1>
      <button-unit
          class="retrieve-single__header-button"
          color="purple"
          :to="{ name: updateToName, params: { id: entity.id }}"
      >
        Edit
      </button-unit>
    </header>
    <section class="retrieve-single__info">
      <div
          v-for="(value, key) in entity"
          :key="key"
          class="retrieve-single__info-item"
      >
        <span v-if="key === 'id'">ID: {{ value }}</span>
        <span v-else-if="key === 'name'">Name: {{ value }}</span>
        <span v-else-if="key === 'email'">
          Email:
          <a :href="`mailto:${value}`" target="_blank">
            {{ value }}
          </a>
        </span>
        <span v-else>{{key}}: {{value}}</span>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

export default defineComponent( {
  name: 'RetrieveSingle',
  components: {ButtonUnit},
  props: {
    title: String,
    updateToName: String,
    entity: Array,
  },
})
</script>

<style lang="scss">
.retrieve-single {
  padding: 5rem;
  background: var(--color-gray-blue);
  box-shadow: var(--box-shadow-v2);

  @include media('>=600') {
    height: 100vh;
    padding: 10rem;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5rem;

    &-heading {
      align-self: center;
      font-size: 13rem;
      font-weight: 400;
      color: var(--color-black);

      @include media('>=600') {
        font-size: 25rem;
        font-weight: 500;
      }
    }

    &-button {
      align-self: center;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10rem;

    @include media('>=600') {
      margin: 20rem;
    }

    &-item {
      align-self: flex-start;
      margin: 5rem;
    }
  }
}
</style>
