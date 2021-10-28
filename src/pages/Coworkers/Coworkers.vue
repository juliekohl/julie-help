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
        :to="{ name: 'CoworkersCreate', params: { id: teamUserId }}"
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

    fetch('http://localhost:3000/coworkers?coworker_id=5')
        .then(response => response.json())
        .then(data => all.value = data);

    const handleListItem = (e: any) => {
      coworker.value.id = e.target.getAttribute('data-id');
      coworker.value.name = e.target.innerHTML;
      const coworkersId = coworker.value.id;
      console.log(coworkersId);
    }

    return {
      all,
      coworker,
      handleListItem
    }
  },
  methods: {
    handleCreate(): void {
      axios.post("http://localhost:3000/coworkers");
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