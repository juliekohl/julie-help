<template>
  <div class="retrieve-all">
    <div class="retrieve-all__header">
      <h1 class="retrieve-all__header-heading">{{ title }}</h1>
      <button-unit
          class="retrieve-all__header_button"
          color="purple"
          :to="{ name: 'CoworkersCreate'}"
      >
        Add new coworker
      </button-unit>
    </div>
    <div class="retrieve-all__options">
      <ul class="retrieve-all__options-ul">
        <list-item
            v-for="item in all"
            :key="item"
            class="retrieve-all__options-li"
            :item="item"
            :to="{ name: 'CoworkersUpdate', params: { id: item.id }}"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";
import ListItem from "@/components/molecules/ListItem/ListItem.vue";

export default defineComponent( {
  name: 'RetrieveAll',
  components: {ListItem, ButtonUnit},
  props: {
    title: String
  },
  setup() {
    const all = ref({});
    const coworker = ref({id: null, name: '', email: ''});
    const coworkersId = coworker.value.id;

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers?coworker_id=1`)
        .then(response => response.json())
        .then(data => all.value = data);

    return {
      all,
      coworker,
      coworkersId,
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers`);
      location.reload();
    }
  }
})
</script>
<style lang="scss">
.retrieve-all {
  padding: 5px;
  height: 100%;

  @include media('>=600') {
    margin-top: 0;
    padding: 10px;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 15px 20px 15px;
    padding: 5px;

    @include media('>=600') {
      margin: 18px 20px 60px 15px;
    }

    &-heading {
      align-self: center;
      font-size: 13px;
      font-weight: 400;
      color: var(--color-black);

      @include media('>=600') {
        font-size: 25px;
        font-weight: 500;
      }
    }
  }

  &__options {
    &-ul {
      @include media('>=600') {
        padding: 0;
      }
    }
  }
}
</style>
