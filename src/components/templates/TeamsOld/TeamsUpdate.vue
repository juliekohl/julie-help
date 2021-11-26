<template>
  <div class="teams-update" v-if="teamUserId">
    <div class="teams-update__header">
      <h1 class="teams-update__header-heading">{{teamUser.name}}</h1>
      <div class="teams-update__header-button">
        <button
            class="teams-update__header-button-delete"
            v-on:click="handleEdit"
        >
          <router-link
              class="teams-update__header-button-delete-anchor"
              :to="{ name: 'TeamsRetrieveAll'}"
          >
            Delete
          </router-link>
        </button>
        <button
            class="teams-update__header-button-edit"
            v-on:click="handleEdit"
        >
          <router-link
              class="teams-update__header-button-edit-anchor"
              :to="{ name: 'TeamsRetrieveAll'}"
          >
            Edit
          </router-link>
        </button>
      </div>
    </div>
    <form class="teams-update__form">
      <label
          class="teams-update__form-label"
          for="name"
      >
        Name
      </label>
      <input
          class="teams-update__form-input"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          v-model="teamUser.name"
      />
      <label
          class="teams-update__form-label"
          for="password"
      >
        Password
      </label>
      <input
          class="teams-update__form-input"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          v-model="teamUser.password"
      />
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default defineComponent( {
  name: 'TeamsUpdate',
  setup() {
    const router = useRouter();
    const teamUserId: number = Number(router.currentRoute.value.params.id);
    const teamUser = ref({id: teamUserId, name: '', password: '', email: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/teams/${teamUserId}`)
        .then(response => response.json())
        .then(data => {teamUser.value = data});

    return {
      teamUserId,
      teamUser
    }
  },

  methods: {
    handleEdit(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/teams/${this.teamUserId}`, this.teamUser);
      location.reload();
    },
    handleDelete(): void {
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/teams/${this.teamUserId}`);
      location.reload();
    },
  }
})
</script>

<style lang="scss">
.teams-update {
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
      align-self: center;

      &-edit {
        width: 90rem;
        height: 17rem;
        margin: 10rem;
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

      &-delete {
        width: 70rem;
        height: 17rem;
        margin: 10rem;
        padding: 2rem;
        font-size: 7rem;
        text-align: center;
        text-transform: uppercase;
        background-color: var(--color-alert-50);
        border-radius: 3rem;

        &-anchor{
          color: var(--color-white);
        }

        @include media('>=600') {
          width: 150rem;
          height: 32rem;
          padding: 5rem;
          font-size: 14rem;
          border-radius: 5rem;
        }
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
      border: 1rem solid var(--color-gray-70);
      border-radius: 5rem;

      @include media('>=600') {
        width: 400rem;
        margin-bottom: 10rem;
      }
    }
  }
}
</style>
