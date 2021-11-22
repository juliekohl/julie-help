<template>
  <div class="retrieve-single">
    <div class="retrieve-single__header">
      <h1 class="retrieve-single__header--heading">Coworkers Info</h1>
      <button
          class="retrieve-single__header--button"
          v-on:click="handleEdit"
      >
        <router-link
            :to="{ name: 'CoworkersUpdate', params: { id: coworkerUserId }}"
        >Edit</router-link>
      </button>
    </div>
    <div class="retrieve-single__info">
      <span class="retrieve-single__info--span">Name: {{coworkerUser.name}}</span>
      <span class="retrieve-single__info--span">Email: {{coworkerUser.email}}</span>
      <span class="retrieve-single__info--span">Cwk_Id: {{coworkerUser.coworkingId}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default defineComponent( {
  name: 'RetrieveSingle',
  setup() {
    const router = useRouter();
    const coworkerUser = ref({id: null, name: '', email: '', coworkingId: null});
    const coworkerUserId: number = Number(router.currentRoute.value.params.id);

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${coworkerUserId}`)
        .then(response => response.json())
        .then(data => {coworkerUser.value = data});

    return {
      coworkerUser,
      coworkerUserId
    }
  },
  methods: {
    handleEdit(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${this.coworkerUserId}`, this.coworkerUser);
      location.reload();
    }
  },
})
</script>

<style lang="scss">
.retrieve-single {
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

    &--button {}
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;

    @include media('>=600') {
      margin: 20px;
    }

    &--span {
      align-self: center;
    }
  }
}
</style>
