<template>
  <div class="edit-teams" v-if="teamUserId">
    <div class="edit-teams__header">
      <h1 class="edit-teams__header--heading">{{teamUser.name}}</h1>
      <div class="edit-teams__header--btn">
        <button
            class="edit-teams__header--btn-delete"
            v-on:click="handleEdit"
        >
          <router-link
              class="edit-teams__header--btn-delete-anchor"
              :to="{ name: 'Teams'}"
          >
            Delete
          </router-link>
        </button>
        <button
            class="edit-teams__header--btn-edit"
            v-on:click="handleEdit"
        >
          <router-link
              class="edit-teams__header--btn-edit-anchor"
              :to="{ name: 'Teams'}"
          >
            Edit
          </router-link>
        </button>
      </div>
    </div>
    <form class="edit-teams__form">
      <label
          class="edit-teams__form--label"
          for="name"
      >
        Name
      </label>
      <input
          class="edit-teams__form--input"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          v-model="teamUser.name"
      />
      <label
          class="edit-teams__form--label"
          for="password"
      >
        Password
      </label>
      <input
          class="edit-teams__form--input"
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
  name: 'EditTeams',
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
.edit-teams {
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