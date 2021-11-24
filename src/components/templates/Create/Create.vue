<template>
  <div class="create">
    <div class="create__header">
      <h1 class="create__header-heading">{{ title }}</h1>
      <button-unit
          class="create__header-button"
          color="purple"
          :to="{ name: 'CoworkersRetrieveAll'}"
      >
        Add New Coworker
      </button-unit>
    </div>
    <form class="create__form">
      <input
          class="create__form-input"
          type="hidden"
          id="cwkId"
          name="cwkId"
          v-model="userId.coworking_id"
      />
      <label
          class="create__form-label"
          for="name"
      >
        Name
      </label>
      <input
          class="create__form-input"
          type="text"
          id="name"
          name="name"
          v-model="userId.name"
      />
      <label
          class="create__form-label"
          for="email"
      >
        Email
      </label>
      <input
          class="create__form-input"
          type="email"
          id="email"
          name="email"
          v-model="userId.email"
      />
      <label
          class="create__form-label"
          for="password"
      >
        Password
      </label>
      <input
          class="create__form-input"
          type="password"
          id="password"
          name="password"
          v-model="userId.password"
      />
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

export default defineComponent({
  name: 'Create',
  components: {ButtonUnit},
  props: {
    title: String
  },
  setup() {
    const userId = ref({coworking_id: 1, name: '', email: '', password: ''});

    return {
      userId
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers`, this.userId);
      location.reload();
    }
  }
})
</script>

<style lang="scss">
.create {
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

    &-label {
      align-self: flex-start;
      margin-bottom: 5px;
      font-size: 10px;

      @include media('>=600') {
        margin-bottom: 10px;
        font-size: 16px;
      }
    }

    &-input {
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

