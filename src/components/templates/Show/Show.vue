<template>
  <div class="show">
    <header class="show__header">
      <h1 class="show__header-heading">{{ title }}</h1>
      <button-unit
          class="show__header-button"
          color="purple"
          :to="{ name: updateToName, params: { id: entity.id }}"
      >
        Edit
      </button-unit>
    </header>
    <section class="show__info">
      <div
          v-for="(value, key) in entity"
          :key="key"
          class="show__info-item"
      >
        <span v-if="key === 'id'">ID: {{ value }}</span>
        <span v-else-if="key === 'name'">Name: {{ value }}</span>
        <span v-else-if="key === 'email'">
          Email:
          <a :href="`mailto:${value}`" target="_blank">
            {{ value }}
          </a>
        </span>
        <span v-else-if="key === 'type'">Type: {{ value }}</span>

        <span v-else-if="key === 'planId'">Plan ID: {{ value }}</span>
        <span v-else-if="key === 'planName'">Plan Name: {{ value }}</span>
        <span v-else-if="key === 'value'">Plan Value: {{ valueFormatted }}</span>

        <span v-else>{{key}}: {{value}}</span>
      </div>
    </section>
    <section class="show__extra">
      <h2 class="show__header-heading">{{ extraTitle }}</h2>
      <div
          v-for="(v1, k1) in extra"
          :key="k1"
          class="show__extra-item"
      >
        <div
          v-for="(v2, k2) in v1"
          :key="k2"
          class="show__extra-item--item"
        >
          <span v-if="k2 === 'id'">ID: {{ v2 }}</span>
          <span v-else-if="k2 === 'name'">Name: {{ v2 }}</span>
          <span v-else-if="k2 === 'email'">
          Email:
          <a :href="`mailto:${v2}`" target="_blank">
            {{ v2 }}
          </a>
        </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";
import numeral from "numeral";

export default defineComponent( {
  name: 'Show',
  components: {ButtonUnit},
  props: {
    title: String,
    updateToName: String,
    entity: Object,
    extraTitle: String,
    extra: Array
  },
  setup(props) {
    const valueFormatted = computed(() => {
      return numeral(props.entity?.value).format('$0,0.00');
    });

    return {
      valueFormatted
    }
  },
})
</script>

<style lang="scss">
.show {
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
      align-self: flex-start;
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

  &__info,
  &__extra {
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

      &--item {
        margin: 10rem;
      }
    }
  }

  h2 {
    margin: 20rem;
  }
}
</style>
