<template>
  <h1>Teams</h1>
  <ul>
    <li v-for="i in all" :key="i" :data-id="i.id" @click="handleListItem">{{ i.name }}</li>
  </ul>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: 'Teams',
  setup() {
    const all = ref({});
    const teamUser = ref({id: null, name: ''});

    fetch('http://localhost:3000/teams?team_id=10')
        .then(response => response.json())
        .then(data => {all.value = data});

    const handleListItem = (e: any) => {
      teamUser.value.id = e.target.getAttribute('data-id');
      teamUser.value.name = e.target.innerHTML;
    }

    return {
      all,
      handleListItem
    }
  },
}
</script>