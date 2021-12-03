<template>
  <div class="coworkers-create">
    <div class="coworkers-create__header">
      <h1 class="coworkers-create__header-heading">Create Coworker</h1>
      <button-unit
          class="coworkers-create__header-button"
          color="purple"
          @click="handleCreate"
      >
        Add New Coworker
      </button-unit>
    </div>
    <form class="coworkers-create__form">
      <input
          class="coworkers-create__form-input"
          type="hidden"
          id="coworkingId"
          name="coworkingId"
          v-model="coworker.coworking_id"
      />
      <label
          class="coworkers-create__form-label"
          for="name"
      >
        Name
      </label>
      <input
          class="coworkers-create__form-input"
          type="text"
          id="name"
          name="name"
          v-model="coworker.name"
      />
      <label
          class="coworkers-create__form-label"
          for="email"
      >
        Email
      </label>
      <input
          class="coworkers-create__form-input"
          type="email"
          id="email"
          name="email"
          v-model="coworker.email"
      />
      <label
          class="coworkers-create__form-label"
          for="password"
      >
        Password
      </label>
      <input
          class="coworkers-create__form-input"
          type="password"
          id="password"
          name="password"
          v-model="coworker.password"
      />
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

export default defineComponent({
  name: 'CoworkersCreate',
  components: {ButtonUnit},
  setup() {
    const coworker = ref({coworking_id: 1, name: '', email: '', password: ''});

    return {
      coworker
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers`, this.coworker);
      this.$router.push({ name: 'CoworkersRetrieveAll' });
    }
  }
})
</script>

<style lang="scss">
.coworkers-create {
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

