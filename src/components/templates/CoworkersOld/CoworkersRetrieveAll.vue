<template>
  <div class="coworkers-retrieve-all">
    <div class="coworkers-retrieve-all__header">
      <h1 class="coworkers-retrieve-all__header-heading">Coworkers</h1>
      <button
          class="coworkers-retrieve-all__header-button"
          @click="handleCreate"
      >
        <router-link
            class="coworkers-retrieve-all__header-button-anchor"
            :to="{ name: 'CoworkersCreate', params: { id: coworkersId }}"
        >
          Add new coworker
        </router-link>
      </button>
    </div>
    <div class="coworkers-retrieve-all__options">
      <ul class="coworkers-retrieve-all__options-ul">
        <li
            v-for="i in all"
            :key="i"
            :data-id="i.id"
            class="coworkers-retrieve-all__options-li"
        >
          {{ i.name }}
          <span class="coworkers-retrieve-all__options-li-span">{{i.email}}</span>
          <router-link
              :data-id="i.id"
              @click="handleListItem"
              class="coworkers-retrieve-all__options-li-button"
              :to="{ name: 'CoworkersUpdate', params: { id: i.id }}"
          >
            Edit
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent( {
  name: 'CoworkersRetrieveAll',

  setup() {
    const all = ref({});
    const coworker = ref({id: null, name: '', email: ''});
    const coworkersId = coworker.value.id;

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers?coworker_id=1`)
        .then(response => response.json())
        .then(data => all.value = data);

    const handleListItem = (e: any): void => {
      coworker.value.id = e.target.getAttribute('data-id');
      coworker.value.name = e.target.innerHTML;
      coworker.value.email = e.target.innerHTML;
    }

    return {
      all,
      coworker,
      coworkersId,
      handleListItem
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers`);
      location.reload();
    }
  }
})
</script>

<style lang="scss">
.coworkers-retrieve-all {
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
