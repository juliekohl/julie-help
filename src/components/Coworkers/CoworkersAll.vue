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
          <button
              :data-id="i.id"
              @click="handleListItem"
              class="coworkers__options-li--btn"
          >
            <router-link
                class="coworkers__options-li--btn-anchor"
                :to="{ name: 'CoworkersView', params: { id: i.id }}"
            >
              Edit
            </router-link>
          </button>
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
    const coworker = ref({id: null, name: ''});
    const coworkersId = coworker.value.id;

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers?coworker_id=5`)
        .then(response => response.json())
        .then(data => all.value = data);

    const handleListItem = (e: any): void => {
      coworker.value.id = e.target.getAttribute('data-id');
      coworker.value.name = e.target.innerHTML;
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
  height: 100vh;

  @include media('>=1024') {
    padding: 10px;
  }

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 15px 20px 15px;
    padding: 5px;

    @include media('>=1024') {
      margin: 18px 20px 60px 15px;
    }

    &-heading {
      align-self: center;
      font-size: 13px;
      font-weight: 400;
      color: var(--color-black);

      @include media('>=1024') {
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

      @include media('>=1024') {
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
      @include media('>=1024') {
        padding: 0;
      }
    }

    &-li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 10px;
      padding: 10px;
      font-size: 10px;
      text-align: center;
      color: var(--color-secondary-45);
      box-shadow: var(--box-shadow-v2);
      border-radius: 3px;

      @include media('>=1024') {
        margin: 15px;
        padding: 30px;
        font-size: 15px;
        border-radius: 8px;
      }

      &--btn {
        width: 50px;
        height: 15px;
        padding: 2px;
        text-align: center;
        text-transform: uppercase;
        background-color: var(--color-gray-60);
        border-radius: 3px;

        @include media('>=1024') {
          width: 100px;
          height: 30px;
          padding: 5px;
          border-radius: 6px;
        }

        &-anchor {
          display: block;
          font-size: 8px;
          color: var(--color-black);

          @include media('>=1024') {
            font-size: 12px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>