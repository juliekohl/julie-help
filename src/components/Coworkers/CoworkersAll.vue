<template>
  <div class="coworkers">
    <div class="coworkers__header">
      <h1 class="coworkers__header-heading">Coworkers</h1>
      <button
          class="coworkers__header-btn"
          v-on:click="handleCreate"
      >
        <router-link
            class="coworkers__header-btn--anchor"
            :to="{ name: 'CoworkersCreate', params: { id: coworkersId }}"
        >
          Add new coworker
        </router-link>
      </button>
    </div>
    <div class="coworkers__options">
      <ul class="coworkers__options-ul">
        <li
            v-for="i in all"
            :key="i"
            :data-id="i.id"
            class="coworkers__options-li"
        >
          {{ i.name }}
          <span class="coworkers__options-li--span">{{i.email}}</span>
          <router-link
              :data-id="i.id"
              @click="handleListItem"
              class="coworkers__options-li--btn"
              :to="{ name: 'CoworkersEdit', params: { id: i.id }}"
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
  name: 'CoworkersAll',

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
.coworkers {
  padding: 5px;
  height: 100%;

  @include media('>=600') {
    margin-top: 0;
    padding: 10px;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 15px 20px 15px;
    padding: 5px;

    @include media('>=600') {
      margin: 18px 20px 60px 15px;
    }

    &-heading {
      align-self: center;
      font-size: 13px;
      font-weight: 400;
      color: var(--color-black);

      @include media('>=600') {
        font-size: 25px;
        font-weight: 500;
      }
    }

    &-btn {
      width: 110px;
      height: 17px;
      padding: 2px;
      font-size: 7px;
      text-align: center;
      text-transform: uppercase;
      background-color: var(--color-secondary-40);
      border-radius: 3px;

      @include media('>=600') {
        width: 220px;
        height: 32px;
        padding: 5px;
        font-size: 14px;
        border-radius: 5px;
      }

      &--anchor {
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
      gap: 10px;
      margin: 10px;
      padding: 10px;
      font-size: 10px;
      text-align: center;
      color: var(--color-secondary-45);
      box-shadow: var(--box-shadow-v2);
      border-radius: 3px;

      @include media('>=600') {
        margin: 15px;
        padding: 30px;
        font-size: 15px;
        border-radius: 8px;
      }

      &--span {
        color: var(--color-black);
      }

      &--btn {
        display: block;
        width: 50px;
        height: 15px;
        padding: 4px;
        font-size: 8px;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-black);
        background-color: var(--color-gray-50);
        border-radius: 3px;

        @include media('>=600') {
          width: 100px;
          height: 30px;
          padding: 10px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
