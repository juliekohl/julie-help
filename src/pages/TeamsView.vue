<template>
  <h1>Team Info</h1>
  <div class="info">
    <span>Name: {{teamUser.name}}</span>
    <span>Email: {{teamUser.email}}</span>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: 'TeamsView',
  setup() {
    const router = useRouter();
    const teamUser = ref({id: null, name: '', email: ''});
    const teamUserId: number = Number(router.currentRoute.value.params.id);

    fetch(`http://localhost:3000/teams/${teamUserId}`)
        .then(response => response.json())
        .then(data => {teamUser.value = data});

    return {
      teamUser,
    }
  },
}
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>