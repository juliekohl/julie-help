<template>
  <h1 class="heading">Teams Create</h1>
  <form class="form">
    <label for="cwkId">Coworking id</label>
    <input
        type="number"
        id="cwkId"
        name="cwkId"
        placeholder="Coworking id"
        v-model="userId.coworking_id"
    />
    <label for="name">Name</label>
    <input
        type="text"
        id="name"
        name="name"
        placeholder="name"
        v-model="userId.name"
    />
    <label for="email">Email</label>
    <input
        type="email"
        id="email"
        name="email"
        placeholder="email"
        v-model="userId.email"
    />
    <label for="password">Password</label>
    <input
        type="password"
        id="password"
        name="name"
        placeholder="password"
        v-model="userId.password"
    />
    <button
        class="form__btn"
        type="button"
        v-on:click="handleCreate"
    >Create
    </button>
  </form>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";

export default defineComponent( {
  name: 'TeamsCreate',
  setup() {
    const userId = ref({coworking_id: 2, name: '', email: '', password: ''});

    return {
      userId
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/teams`, this.userId);
      location.reload();
    }
  }
})
</script>

<style lang="scss">
.heading {
  text-align: center;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.form__btn {
  margin: 10px;
}
</style>