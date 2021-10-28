<template>
  <h1>Teams</h1>
  <ul>
    <li
        v-for="i in all"
        :key="i"
        :data-id="i.id"
        @click="handleListItem"
    >
      <router-link
          :to="{ name: 'TeamsView', params: { id: i.id }}"
      >{{ i.name }}</router-link>
    </li>
  </ul>
  <button
      class="form__btn"
      type="button"
      v-on:click="handleCreate"
  >
    <router-link
        :to="{ name: 'TeamsCreate', params: { id: teamUserId }}"
    >Create</router-link>
  </button>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";

export default defineComponent( {
  name: 'Teams',

  setup() {
    const all = ref({});
    const teamUser = ref({id: null, name: ''});

    fetch('http://localhost:3000/teams?team_id=10')
        .then(response => response.json())
        .then(data => {all.value = data});

    const handleListItem = (e: any): void => {
      teamUser.value.id = e.target.getAttribute('data-id');
      teamUser.value.name = e.target.innerHTML;
      const teamUserId = teamUser.value.id;
      console.log('id', teamUserId);
    }

    return {
      all,
      teamUser,
      handleListItem
    }
  },
  methods: {
    handleCreate(): void {
      axios.post("http://localhost:3000/teams");
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