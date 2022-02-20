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
      <h2 class="show__extra-heading">{{ extraTitle }}</h2>
      <div
          v-for="(v1, k1) in extra"
          :key="k1"
          class="show__extra-item"
      >
        <div
          v-for="(v2, k2) in v1"
          :key="k2"
          class="show__extra-item-item"
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
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-heading {
    }

    &-button {
    }
  }

  &__info,
  &__extra {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20rem 0 0;

    &-heading {
      font-size: 20rem;
      margin: 0 !important;
    }

    &-item,
    &-item-item {
      align-self: flex-start;
      margin: 10rem 0;
    }
  }

  &__extra-item {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin: 20rem;
  }
}
</style>
