<template>
  <div class="coworkers-retrieve-single">
    <h1>Coworkers Info</h1>
    <div class="info">
      <span>Name: {{coworkerUser.name}}</span>
      <span>Email: {{coworkerUser.email}}</span>
      <span>Cwk_Id: {{coworkerUser.coworkingId}}</span>
      <button
          class="form__button"
          type="button"
          v-on:click="handleEdit"
      >
        <router-link
            :to="{ name: 'CoworkersUpdate', params: { id: coworkerUserId }}"
        >Edit</router-link>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default defineComponent( {
  name: 'CoworkersRetrieveSingle',
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
.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>