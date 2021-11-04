<template>
  <h1>Coworkers</h1>
  <ul>
    <li
        v-for="i in all"
        :key="i"
        :data-id="i.id"
        @click="handleListItem"
    >
      <router-link
          :to="{ name: 'CoworkersView', params: { id: i.id }}"
      >{{ i.name }}</router-link>
    </li>
  </ul>
  <button
      class="form__btn"
      type="button"
      v-on:click="handleCreate"
  >
    <router-link
        :to="{ name: 'CoworkersCreate', params: { id: coworkersId }}"
    >Create</router-link>
  </button>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";

export default defineComponent( {
  name: 'Coworkers',

  setup() {
    const all = ref({});
    const coworker = ref({id: null, name: ''});
    const coworkersId = coworker.value.id;
    const coworking = ref({id: 5});
    console.log('coworking', coworking);

    fetch(`${process.env.VUE_APP_BACKEND_URL}/${coworking.value}`)
        .then(response => response.json())
        .then(data => coworking.value = data);

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers?coworker_id=5`)
        .then(response => response.json())
        .then(data => all.value = data);

    const handleListItem = (e: any) => {
      coworker.value.id = e.target.getAttribute('data-id');
      coworker.value.name = e.target.innerHTML;
    }

    return {
      all,
      coworker,
      coworkersId,
      handleListItem
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers`);
      location.reload();
    }
  },
})
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>