<template>
  <h1 class="heading">Register Team</h1>
  <form
      class="form"
  >
    <label for="name">Name</label>
    <input
        type="text"
        id="name"
        name="name"
        placeholder="User name"
        v-model="teamUser.name"
    />
    <label for="email">Email</label>
    <input
        type="email"
        id="email"
        name="email"
        placeholder="User email"
        v-model="teamUser.email"
    />
    <label for="password">Password</label>
    <input
        type="password"
        id="password"
        name="password"
        placeholder="User Password"
        v-model="teamUser.password"
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

  <div v-if="teamUser.id">
    <h2>User Info</h2>
    <span>Name: {{teamUser.name}}</span>
    <span>Email: {{teamUser.email}}</span>
    <span>Password: {{teamUser.password}}</span>

    <h2>Edit user</h2>
    <form
        class="form"
    >
      <label for="name-edit">{{teamUser.name ? teamUser.name : 'User Name'}}</label>
      <input
          type="text"
          id="name-edit"
          name="name-edit"
          placeholder="user name edit"
          v-model="teamUser.name"
      />
      <label for="email-edit">{{teamUser.email ? teamUser.email : 'User Email'}}</label>
      <input
          type="email"
          id="email-edit"
          name="email-edit"
          placeholder="email name edit"
          v-model="teamUser.email"
      />
      <label for="Password-edit">{{teamUser.password ? teamUser.password : 'User Password'}}</label>
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

<script>
import {ref} from 'vue';
import axios from 'axios';

export default {
  name: 'RegisterTeam',
  setup() {
    const all = ref({});
    const teamUser = ref({id: null, coworking_id: 1, name: '', email: '', password: ''});
    const userId = ref({name: ''});

    fetch('http://localhost:3000/teams')
        .then(response => response.json())
        .then(data => all.value = data);

    const handleListItem = (e) => {
      teamUser.value.id = e.target.getAttribute('data-id');
      teamUser.value.name = e.target.innerHTML;
      teamUser.value.email = e.target.innerHTML;
      teamUser.value.password = e.target.innerHTML;
      userId.value.name = e.target.innerHTML;
    }

    return {
      all,
      userId,
      teamUser,
      handleListItem
    }
  },
  methods: {
    handleCreate() {
      axios.post("http://localhost:3000/team", this.userId);
      location.reload();
    },
    handleEdit() {
      axios.post(`http://localhost:3000/team/${this.teamUser.id}`, this.userId);
      location.reload();
    },
    handleDelete() {
      axios.delete(`http://localhost:3000/team/${this.teamUser.id}`);
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