<template>
  <h1 class="heading">Register Coworking</h1>
  <form
      class="form"
  >
      <label for="name">Coworking Name</label>
      <input
          type="text"
          id="name"
          name="name"
          placeholder="Coworking name"
          v-model="coworking.name"
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

  <div v-if="cwk.id">
    <h2>Coworking Info</h2>
    <span>Name: {{cwk.name}}</span>
    <h2>Edit coworking</h2>
    <form
        class="form"
    >
      <label for="name-edit">{{cwk.name ? cwk.name : 'Coworking Name'}}</label>
      <input
          type="text"
          id="name-edit"
          name="name-edit"
          placeholder="Coworking name edit"
          v-model="coworking.name"
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
import {defineComponent, ref} from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'RegisterCoworking',
  setup() {
    const all = ref({});
    const cwk = ref({id: null, name: ''});
    const coworking = ref({name: ''});

    fetch('http://localhost:3000/coworkings')
        .then(response => response.json())
        .then(data => all.value = data);

    const handleListItem = (e: any) => {
      cwk.value.id = e.target.getAttribute('data-id');
      cwk.value.name = e.target.innerHTML;
      coworking.value.name = e.target.innerHTML;
    }

    return {
      all,
      coworking,
      cwk,
      handleListItem
    }
  },
  methods: {
    handleCreate(): void {
      axios.post("http://localhost:3000/coworking", this.coworking);
      location.reload();
    },
    handleEdit(): void {
      axios.post(`http://localhost:3000/coworking/${this.cwk.id}`, this.coworking);
      location.reload();
    },
    handleDelete(): void {
      axios.delete(`http://localhost:3000/coworking/${this.cwk.id}`);
      location.reload();
    },
  }
})
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
