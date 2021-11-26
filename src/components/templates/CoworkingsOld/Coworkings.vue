<template>
  <div class="Coworking">
    <h1 class="Coworking__heading">Register Coworking</h1>
    <form
        class="Coworking__form"
    >
        <label class="Coworking__form-label" for="name">Coworking Name</label>
        <input
            class="Coworking__form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Coworking name"
            v-model="coworking.name"
        />
        <button
            class="Coworking__form-button"
            type="button"
            v-on:click="handleCreate"
        >Create Coworking
        </button>
    </form>

    <ul class="Coworking__list">
      <li class="Coworking__list-item" v-for="i in all" :key="i" :data-id="i.id" @click="handleListItem">{{ i.name }}</li>
    </ul>

    <div class="Coworking__info" v-if="cwk.id">
      <h2 class="Coworking__info-subheading">Coworking Info</h2>
      <span class="Coworking__info-span">Name: {{cwk.name}}</span>
      <h2 class="Coworking__info-subheading">Edit coworking</h2>
      <form
          class="Coworking__form"
      >
        <label class="Coworking__form-label" for="name-edit">{{cwk.name ? cwk.name : 'Coworking Name'}}</label>
        <input
            class="Coworking__form-input"
            type="text"
            id="name-edit"
            name="name-edit"
            placeholder="Coworking name edit"
            v-model="coworking.name"
        />
        <button
            class="Coworking__form-button"
            type="button"
            v-on:click="handleEdit"
        >Edit
        </button>
        <button
            class="Coworking__form-button"
            type="button"
            v-on:click="handleDelete"
        >Delete
        </button>
      </form>
    </div>
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

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkings`)
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
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworking`, this.coworking);
      location.reload();
    },
    handleEdit(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworking/${this.cwk.id}`, this.coworking);
      location.reload();
    },
    handleDelete(): void {
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/coworking/${this.cwk.id}`);
      location.reload();
    },
  }
})
</script>

<style lang="scss">
.Coworking {

  &__heading {
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20rem;

    &-button {
      margin: 10rem;
    }
  }

  &__list {
    list-style-type: none;

    &-item {}
  }

  &__info-subheading {
  text-align: center;
  }
}
</style>
