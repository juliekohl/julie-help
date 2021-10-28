<template>
  <h1>Coworkers Edit</h1>
  <div v-if="coworkerUserId">
    <h2>Coworker Info</h2>
    <span>Name: {{coworkerUser.name}}</span>
    <span>Password: {{coworkerUser.password}}</span>

    <h2>Edit Coworker</h2>
    <form class="form">
      <label for="name-edit">{{coworkerUser.name ? coworkerUser.name : 'Coworker Name'}}</label>
      <input
          type="text"
          id="name-edit"
          name="name-edit"
          placeholder="user name edit"
          v-model="coworkerUser.name"
      />
      <label for="Password-edit">{{coworkerUser.password ? coworkerUser.password : 'Coworker Password'}}</label>
      <input
          type="password"
          id="Password-edit"
          name="Password-edit"
          placeholder="user password edit"
          v-model="coworkerUser.password"
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
import {useRouter} from "vue-router";
import axios from "axios";

export default defineComponent( {
  name: 'CoworkersEdit',
  setup() {
    const router = useRouter();
    const coworkerUserId: number = Number(router.currentRoute.value.params.id);
    const coworkerUser = ref({id: coworkerUserId, name: '', password: ''});

    fetch(`http://localhost:3000/coworkers/${coworkerUserId}`)
        .then(response => response.json())
        .then(data => {coworkerUser.value = data});

    return {
      coworkerUserId,
      coworkerUser
    }
  },
  methods: {
    handleEdit(): void {
      axios.post(`http://localhost:3000/coworkers/${this.coworkerUserId}`, this.coworkerUser);
      location.reload();
    },
    handleDelete(): void {
      axios.delete(`http://localhost:3000/coworkers/${this.coworkerUserId}`);
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