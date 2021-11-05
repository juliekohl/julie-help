<template>
  <h1>Teams Edit</h1>
  <div v-if="teamUserId">
    <h2>Team Info</h2>
    <span>Name: {{teamUser.name}}</span>
    <span>Email: {{teamUser.email}}</span>

    <h2>Edit team</h2>
    <form class="form">
      <label for="name-edit">{{teamUser.name ? teamUser.name : 'Team Name'}}</label>
      <input
          type="text"
          id="name-edit"
          name="name-edit"
          placeholder="user name edit"
          v-model="teamUser.name"
      />
      <label for="Password-edit">Team Password</label>
      <input
          type="password"
          id="Password-edit"
          name="Password-edit"
          placeholder="user password edit"
          v-model="teamUser.password"
      />
      <button
          class="form__btn"
          type="button"
          v-on:click="handleEdit"
      >Edit
      </button>
      <button
          class="form__btn"
          type="button"
          v-on:click="handleDelete"
      >Delete
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

export default defineComponent( {
  name: 'TeamsEdit',
  setup() {
    const router = useRouter();
    const teamUserId: number = Number(router.currentRoute.value.params.id);
    const teamUser = ref({id: teamUserId, name: '', password: '', email: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/teams/${teamUserId}`)
        .then(response => response.json())
        .then(data => {teamUser.value = data});

    return {
      teamUserId,
      teamUser
    }
  },

  methods: {
    handleEdit(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/teams/${this.teamUserId}`, this.teamUser);
      location.reload();
    },
    handleDelete(): void {
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/teams/${this.teamUserId}`);
      location.reload();
    },
  }
})
</script>

<style scoped>
h1 {
  text-align: left;
}
h2 {
  text-align: left;
}
span {
  display: block;
  text-align: left;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px;
}
.form__btn {
  margin: 10px;
}
</style>