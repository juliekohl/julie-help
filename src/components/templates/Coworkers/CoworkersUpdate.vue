<template>
  <div class="coworkers-update" v-if="coworkerUserId">
    <div class="coworkers-update__header">
      <h1 class="coworkers-update__header--heading">{{coworkerUser.name}}</h1>
      <div class="coworkers-update__header--button">
        <button
            class="coworkers-update__header--button-delete"
            v-on:click="handleEdit"
        >
          <router-link
              class="coworkers-update__header--button-delete-anchor"
              :to="{ name: 'CoworkersRetrieveAll'}"
          >
            Delete
          </router-link>
        </button>
        <button
            class="coworkers-update__header--button-edit"
            v-on:click="handleEdit"
        >
          <router-link
              class="coworkers-update__header--button-edit-anchor"
              :to="{ name: 'CoworkersRetrieveAll'}"
          >
            Edit
          </router-link>
        </button>
      </div>
    </div>
    <form class="coworkers-update__form">
      <label
          class="coworkers-update__form--label"
          for="name"
      >
       Name
      </label>
      <input
          class="coworkers-update__form--input"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          v-model="coworkerUser.name"
      />
      <label
          class="coworkers-update__form--label"
          for="password"
      >
        Password
      </label>
      <input
          class="coworkers-update__form--input"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          v-model="coworkerUser.password"
      />
    </form>
  </div>
</template>

<script lang="ts">

import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default defineComponent({
  name: 'CoworkersUpdate',
  setup() {
    const router = useRouter();
    const coworkerUserId: number = Number(router.currentRoute.value.params.id);
    const coworkerUser = ref({id: coworkerUserId, name: '', password: '', email: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${coworkerUserId}`)
        .then(response => response.json())
        .then(data => {coworkerUser.value = data});

    return {
      coworkerUserId,
      coworkerUser
    }
  },
  methods: {
    handleEdit(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${this.coworkerUserId}`, this.coworkerUser);
      location.reload();
    },
    handleDelete(): void {
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${this.coworkerUserId}`);
      location.reload();
    },
  }
})
</script>

<style lang="scss">
.coworkers-update {
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

    &--button {
      align-self: center;

      &-edit {
        width: 90px;
        height: 17px;
        margin: 10px;
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

      &-delete {
        width: 70px;
        height: 17px;
        margin: 10px;
        padding: 2px;
        font-size: 7px;
        text-align: center;
        text-transform: uppercase;
        background-color: var(--color-alert-50);
        border-radius: 3px;

        &-anchor{
          color: var(--color-white);
        }

        @include media('>=600') {
          width: 150px;
          height: 32px;
          padding: 5px;
          font-size: 14px;
          border-radius: 5px;
        }
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