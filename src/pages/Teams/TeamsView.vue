<template>
  <h1>Team Info</h1>
  <div class="info">
    <span>Name: {{teamUser.name}}</span>
    <span>Email: {{teamUser.email}}</span>
    <button
        class="form__btn"
        type="button"
        v-on:click="handleEdit"
    >
      <router-link
          :to="{ name: 'TeamsEdit', params: { id: teamUserId }}"
      >Edit</router-link>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default defineComponent( {
  name: 'TeamsView',
  setup() {
    const router = useRouter();
    const teamUser = ref({id: null, name: '', email: ''});
    const teamUserId: number = Number(router.currentRoute.value.params.id);

    fetch(`${process.env.VUE_APP_BACKEND_URL}/teams/${teamUserId}`)
        .then(response => response.json())
        .then(data => {teamUser.value = data});

    return {
      teamUser,
      teamUserId
    }
  },
  methods: {
    handleEdit(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/teams/${this.teamUserId}`, this.teamUser);
      location.reload();
    }
  },
})
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>