<template>
  <h1 class="heading">Register Team</h1>
  <form
      class="form"
  >
    <label for="name">User Name</label>
    <input
        type="text"
        id="name"
        name="name"
        placeholder="User name"
        v-model="usr.name"
    />
    <label for="cwk">Team Coworking</label>
    <input
        type="text"
        id="cwk"
        name="ckw"
        placeholder="Coworking name"
        v-model="usr.coworking"
    />
    <button
        class="form__btn"
        type="button"
        v-on:click="handleCreate"
    >Create
    </button>
  </form>

  <ul>
    <li v-for="i in all" :key="i" :data-id="i.id" @click="handleListItem">{{ i.name }}</li>
  </ul>

  <div v-if="usr.id">
    <h2>User Info</h2>
    <span>Name: {{usr.name}}</span>
    <span>Coworking: {{usr.name}}</span>

    <h2>Edit user</h2>
    <form
        class="form"
    >
      <label for="name-edit">{{usr.name ? usr.name : 'User Name'}}</label>
      <input
          type="text"
          id="name-edit"
          name="name-edit"
          placeholder="user name edit"
          v-model="usr.name"
      />
      <label for="cwk-edit">{{usr.name ? usr.name : 'User Email'}}</label>
      <input
          type="text"
          id="cwk-edit"
          name="cwk-edit"
          placeholder="coworking name edit"
          v-model="usr.coworking"
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

<script>
import {ref} from 'vue';
import axios from 'axios';

export default {
  name: 'RegisterTeam',
  setup() {
    const all = ref({});
    const usr = ref({id: null, name: '', coworking: ''});
    const user = ref({name: ''});

    fetch('http://localhost:3000/teams')
        .then(response => response.json())
        .then(data => all.value = data);

    const handleListItem = (e) => {
      usr.value.id = e.target.getAttribute('data-id');
      usr.value.name = e.target.innerHTML;
      user.value.name = e.target.innerHTML;
    }

    return {
      all,
      user,
      usr,
      handleListItem
    }
  },
  methods: {
    handleCreate() {
      axios.post("http://localhost:3000/team", this.user);
      location.reload();
    },
    handleEdit() {
      axios.post(`http://localhost:3000/team/${this.usr.id}`, this.user);
      location.reload();
    },
    handleDelete() {
      axios.delete(`http://localhost:3000/team/${this.usr.id}`);
      location.reload();
    },
  }
}
</script>

<style scoped>
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
ul {
  list-style-type: none;
}
h2 {
  text-align: center;
}
</style>