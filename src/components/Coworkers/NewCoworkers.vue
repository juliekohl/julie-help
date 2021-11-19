<template>
  <div class="new-coworkers">
    <div class="new-coworkers__header">
      <h1 class="new-coworkers__header--heading">New Coworker</h1>
      <button
          class="new-coworkers__header--btn"
          v-on:click="handleCreate"
      >
        <router-link
            class="edit-coworkers__header--btn-anchor"
            :to="{ name: 'Coworkers'}"
        >
          Add New Coworker
        </router-link>
      </button>
    </div>
    <form class="new-coworkers__form">
      <input
          class="new-coworkers__form--input"
          type="hidden"
          id="cwkId"
          name="cwkId"
          v-model="userId.coworking_id"
      />
      <label
          class="new-coworkers__form--label"
          for="name"
      >
        Name
      </label>
      <input
          class="new-coworkers__form--input"
          type="text"
          id="name"
          name="name"
          v-model="userId.name"
      />
      <label
          class="new-coworkers__form--label"
          for="email"
      >
        Email
      </label>
      <input
          class="new-coworkers__form--input"
          type="email"
          id="email"
          name="email"
          v-model="userId.email"
      />
      <label
          class="new-coworkers__form--label"
          for="password"
      >
        Password
      </label>
      <input
          class="new-coworkers__form--input"
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
  name: 'NewCoworkers',
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
    }
  }
})
</script>

<style lang="scss">
.new-coworkers {
  padding: 5px;
  background: var(--color-gray-blue);
  box-shadow: var(--box-shadow-v2);

  @include media('>=600') {
    height: 100vh;
    padding: 10px;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;

    &--heading {
      align-self: center;
      font-size: 13px;
      font-weight: 400;
      color: var(--color-black);

      @include media('>=600') {
        font-size: 25px;
        font-weight: 500;
      }
    }

    &--btn {
      width: 110px;
      height: 17px;
      padding: 2px;
      font-size: 7px;
      text-align: center;
      text-transform: uppercase;
      background-color: var(--color-secondary-40);
      border-radius: 3px;

      &-anchor{
        color: var(--color-white);
      }

      @include media('>=600') {
        width: 220px;
        height: 32px;
        padding: 5px;
        font-size: 14px;
        border-radius: 5px;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;

    @include media('>=600') {
      margin: 20px;
    }

    &--label {
      align-self: flex-start;
      margin-bottom: 5px;
      font-size: 10px;

      @include media('>=600') {
        margin-bottom: 10px;
        font-size: 16px;
      }
    }

    &--input {
      align-self: flex-start;
      width: 100%;
      height: 25px;
      margin-bottom: 5px;
      background: var(--color-gray-blue);
      border: 1px solid var(--color-gray-70);
      border-radius: 5px;

      @include media('>=600') {
        width: 400px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
