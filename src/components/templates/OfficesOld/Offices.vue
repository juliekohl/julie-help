<template>
  <div class="offices">
    <h1 class="offices__heading">Register Offices</h1>
    <form
        class="offices__form"
    >
      <label class="offices__form-label" for="coworking-id">Coworking ID Office</label>
      <input
          class="offices__form-input"
          type="number"
          id="coworking-id"
          name="coworking-id"
          placeholder="coworking id"
          v-model="office.id"
      />
      <label class="offices__form-label" for="name">Office Name</label>
      <input
          class="offices__form-input"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          v-model="office.name"
      />
      <label class="offices__form-label" for="type">Office Type</label>
      <input
          class="offices__form-input"
          type="text"
          id="type"
          name="type"
          placeholder="office type"
          v-model="office.type"
      />
      <button
          class="offices__form-button"
          type="button"
          v-on:click="handleCreate"
      >Create offices
      </button>
    </form>

    <ul class="offices__list" v-if="office.id">
      <li class="offices__list-item" v-for="item in items" :key="item" :data-id="item.id" @click="handleListItem">{{ item.name }}</li>
    </ul>

    <div class="offices__info" v-if="office.id">
      <h2 class="offices__info-subheading">Offices Info</h2>
      <span class="offices__info-span">Name: {{office.name}}</span>
      <span class="offices__info-span">Type: {{office.type}}</span>
      <h2 class="offices__info-subheading">Edit office</h2>
      <form
          class="offices__form"
      >
        <label class="offices__form-label" for="name-edit">{{office.name ? office.name : 'Office Name'}}</label>
        <input
            class="offices__form-input"
            type="text"
            id="name-edit"
            name="name-edit"
            placeholder="name"
            v-model="office.name"
        />
        <label class="offices__form-label" for="type-edit">{{office.type ? office.type : 'Office Type'}}</label>
        <input
            class="offices__form-input"
            type="text"
            id="type-edit"
            name="type-edit"
            placeholder="offices type"
            v-model="office.type"
        />
        <button
            class="offices__form-button"
            type="button"
            v-on:click="handleEdit"
        >Edit
        </button>
        <button
            class="offices__form-button"
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
  name: 'RegisterOffices',
  setup() {
    const office = ref({id: null, name: '', type: ''});
    const officeId: number = 1;

    fetch(`${process.env.VUE_APP_BACKEND_URL}/offices?office_id=1`)
        .then(response => response.json())
        .then(data => {office.value = data});

    const handleListItem = (e: any) => {
      office.value.id = e.target.getAttribute('data-id');
      office.value.name = e.target.innerHTML;
      office.value.type = e.target.innerHTML;
    }

    return {
      office,
      officeId,
      handleListItem
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/offices`, this.office);
      location.reload();
    },
    handleEdit(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/offices/${this.officeId}`, this.office);
      location.reload();
    },
    handleDelete(): void {
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/offices/${this.officeId}`);
      location.reload();
    },
  }
})
</script>

<style lang="scss">
.offices {

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
      width: 90px;
      margin: 10rem;
      text-align: center;
      background-color: #004f8a;
    }
  }

  &__list {
    border: 2px solid black;

    &-item {}
  }

  &__info-subheading {
    text-align: center;
  }
}
</style>
