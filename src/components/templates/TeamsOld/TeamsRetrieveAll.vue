<template>
  <div class="teams-retrieve-all">
    <div class="teams-retrieve-all__header">
      <h1 class="teams-retrieve-all__header-heading">Teams</h1>
      <button
          class="teams-retrieve-all__header-button"
          v-on:click="handleCreate"
      >
        <router-link
            class="teams-retrieve-all__header-button-anchor"
            :to="{ name: 'TeamsCreate', params: { id: teamUserId }}"
        >
          Add new team
        </router-link>
      </button>
    </div>
    <div class="teams-retrieve-all__options">
      <ul class="teams-retrieve-all__options-ul">
        <li
            v-for="i in all"
            :key="i"
            :data-id="i.id"
            class="teams-retrieve-all__options-li"
        >
          {{ i.name }}
          <span class="teams-retrieve-all__options-li-span">{{i.email}}</span>
          <router-link
              :data-id="i.id"
              @click="handleListItem"
              class="teams-retrieve-all__options-li-button"
              :to="{ name: 'TeamsUpdate', params: { id: i.id }}"
          >
            Edit
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";

export default defineComponent( {
  name: 'TeamsRetrieveAll',

  setup() {
    const all = ref({});
    const teamUser = ref({id: null, name: '', email: ''});
    const teamUserId = teamUser.value.id;

    fetch(`${process.env.VUE_APP_BACKEND_URL}/teams?team_id=1`)
        .then(response => response.json())
        .then(data => {all.value = data});

    const handleListItem = (e: any): void => {
      teamUser.value.id = e.target.getAttribute('data-id');
      teamUser.value.name = e.target.innerHTML;
      teamUser.value.email = e.target.innerHTML;
    }

    return {
      all,
      teamUser,
      teamUserId,
      handleListItem
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/teams`);
      location.reload();
    }
  },
})
</script>

<style lang="scss">
.teams-retrieve-all {
  padding: 5rem;
  height: 100%;

  @include media('>=600') {
    margin-top: 0;
    padding: 10rem;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15rem 15rem 20rem 15rem;
    padding: 5rem;

    @include media('>=600') {
      margin: 18rem 20rem 60rem 15rem;
    }

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

      @include media('>=600') {
        width: 220rem;
        height: 32rem;
        padding: 5rem;
        font-size: 14rem;
        border-radius: 5rem;
      }

      &-anchor {
        color: var(--color-white);
      }
    }
  }

  &__options {

    &-ul {
      @include media('>=600') {
        padding: 0;
      }
    }

    &-li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 10rem;
      margin: 10rem;
      padding: 10rem;
      font-size: 10rem;
      text-align: center;
      color: var(--color-secondary-45);
      box-shadow: var(--box-shadow-v2);
      border-radius: 3rem;

      @include media('>=600') {
        margin: 15rem;
        padding: 30rem;
        font-size: 15rem;
        border-radius: 8rem;
      }

      &-span {
        color: var(--color-black);
      }

      &-button {
        display: block;
        width: 50rem;
        height: 15rem;
        padding: 4rem;
        font-size: 8rem;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-black);
        background-color: var(--color-gray-50);
        border-radius: 3rem;

        @include media('>=600') {
          width: 100rem;
          height: 30rem;
          padding: 10rem;
          font-size: 12rem;
          font-weight: 500;
          border-radius: 6rem;
        }
      }
    }
  }
}
</style>
