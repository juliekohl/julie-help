<template>
  <div class="coworkers-create">
    <div class="coworkers-create__header">
      <h1 class="coworkers-create__header-heading">New Coworker</h1>
      <button
          class="coworkers-create__header-button"
          v-on:click="handleCreate"
      >
        <router-link
            class="coworkers-update__header-button-anchor"
            :to="{ name: 'CoworkersRetrieveAll'}"
        >
          Add New Coworker
        </router-link>
      </button>
    </div>
    <form class="coworkers-create__form">
      <input
          class="coworkers-create__form-input"
          type="hidden"
          id="cwkId"
          name="cwkId"
          v-model="userId.coworking_id"
      />
      <label
          class="coworkers-create__form-label"
          for="name"
      >
        Name
      </label>
      <input
          class="coworkers-create__form-input"
          type="text"
          id="name"
          name="name"
          v-model="userId.name"
      />
      <label
          class="coworkers-create__form-label"
          for="email"
      >
        Email
      </label>
      <input
          class="coworkers-create__form-input"
          type="email"
          id="email"
          name="email"
          v-model="userId.email"
      />
      <label
          class="coworkers-create__form-label"
          for="password"
      >
        Password
      </label>
      <input
          class="coworkers-create__form-input"
          type="password"
          id="password"
          name="password"
          v-model="userId.password"
      />
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";

export default defineComponent({
  name: 'CoworkersCreate',
  setup() {
    const userId = ref({coworking_id: 1, name: '', email: '', password: ''});

    return {
      userId
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers`, this.userId);
      location.reload();
    },
  }
})
</script>

<style lang="scss">
.coworkers-create {
  padding: 5rem;
  background: var(--color-gray-blue);
  box-shadow: var(--box-shadow-v2);

  @include media('>=600') {
    height: 100vh;
    padding: 10rem;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5rem;

    &-heading {
      align-self: center;
      font-size: 13rem;
      font-weight: 400;
      color: var(--color-black);

      @include media('>=600') {
        font-size: 25rem;
        font-weight: 500;
      }
    }

    &-button {
      width: 110rem;
      height: 17rem;
      padding: 2rem;
      font-size: 7rem;
      text-align: center;
      text-transform: uppercase;
      background-color: var(--color-secondary-40);
      border-radius: 3rem;

      &-anchor{
        color: var(--color-white);
      }

      @include media('>=600') {
        width: 220rem;
        height: 32rem;
        padding: 5rem;
        font-size: 14rem;
        border-radius: 5rem;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10rem;

    @include media('>=600') {
      margin: 20rem;
    }

    &-label {
      align-self: flex-start;
      margin-bottom: 5rem;
      font-size: 10rem;

      @include media('>=600') {
        margin-bottom: 10rem;
        font-size: 16rem;
      }
    }

    &-input {
      align-self: flex-start;
      width: 100%;
      height: 25rem;
      margin-bottom: 5rem;
      background: var(--color-gray-blue);
      border: 1px solid var(--color-gray-70);
      border-radius: 5rem;

      @include media('>=600') {
        width: 400rem;
        margin-bottom: 10rem;
      }
    }
  }
}
</style>
