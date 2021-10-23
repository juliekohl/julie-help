<template>
  <h1 class="heading">Register Coworker</h1>
  <form
      class="form"
  >
    <label for="name">Name</label>
    <input
        type="text"
        id="name"
        name="name"
        placeholder="User name"
        v-model="coworker.name"
    />
    <label for="email">Email</label>
    <input
        type="email"
        id="email"
        name="email"
        placeholder="User email"
        v-model="coworker.email"
    />
    <label for="password">Password</label>
    <input
        type="password"
        id="password"
        name="password"
        placeholder="User Password"
        v-model="coworker.password"
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

  <div v-if="coworker.id">
    <h2>User Info</h2>
    <span>Name: {{coworker.name}}</span>
    <span>Email: {{coworker.email}}</span>
    <span>Password: {{coworker.password}}</span>

    <h2>Edit user</h2>
    <form
        class="form"
    >
      <label for="name-edit">{{coworker.name ? coworker.name : 'User Name'}}</label>
      <input
          type="text"
          id="name-edit"
          name="name-edit"
          placeholder="user name edit"
          v-model="coworker.name"
      />
      <label for="email-edit">{{coworker.email ? coworker.email : 'User Email'}}</label>
      <input
          type="email"
          id="email-edit"
          name="email-edit"
          placeholder="email name edit"
          v-model="coworker.email"
      />
      <label for="Password-edit">{{coworker.password ? coworker.password : 'User Password'}}</label>
      <input
          type="password"
          id="Password-edit"
          name="Password-edit"
          placeholder="user password edit"
          v-model="coworker.password"
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
  name: 'RegisterCoworking',
  setup() {
    const all = ref({});
    const coworker = ref({id: null, name: '', email: '', password: ''});
    const user = ref({name: ''});

    fetch('http://localhost:3000/coworkers')
        .then(response => response.json())
        .then(data => all.value = data);

    const handleListItem = (e) => {
      coworker.value.id = e.target.getAttribute('data-id');
      coworker.value.name = e.target.innerHTML;
      coworker.value.email = e.target.innerHTML;
      coworker.value.password = e.target.innerHTML;
      user.value.name = e.target.innerHTML;
    }

    return {
      all,
      user,
      coworker,
      handleListItem
    }
  },
  methods: {
    handleCreate() {
      axios.post("http://localhost:3000/coworker", this.user);
      location.reload();
    },
    handleEdit() {
      axios.post(`http://localhost:3000/coworker/${this.coworker.id}`, this.user);
      location.reload();
    },
    handleDelete() {
      axios.delete(`http://localhost:3000/coworker/${this.coworker.id}`);
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