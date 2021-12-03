<template>
  <div class="coworkers-update">
    <div class="coworkers-update__header">
      <h1 class="coworkers-update__header-heading">{{coworkerUser.name}}</h1>
      <div class="coworkers-update__header-button">
        <button-unit
            class="coworkers-update__header-button-delete"
            color="red"
            @click="handleDelete"
        >
          Delete
        </button-unit>
        <button-unit
            class="coworkers-update__header-button-edit"
            color="purple"
            @click="handleEdit"
        >
          Edit
        </button-unit>
      </div>
    </div>
    <form class="coworkers-update__form">
      <label
          class="coworkers-update__form-label"
          for="name"
      >
        Name
      </label>
      <input
          class="coworkers-update__form-input"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          v-model="coworkerUser.name"
      />
      <label
          class="coworkers-update__form-label"
          for="password"
      >
        Password
      </label>
      <input
          class="coworkers-update__form-input"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          v-model="coworkerUser.password"
      />
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

export default defineComponent({
  name: 'CoworkersUpdate',
  components: {ButtonUnit},
  setup() {
    const router = useRouter();
    const id: number = Number(router.currentRoute.value.params.id);
    const coworker = ref({id, name: '', password: '', email: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${id}`)
        .then(response => response.json())
        .then(data => {coworker.value = data});

    return {
      id,
      coworker
    }
  },
  methods: {
    handleEdit(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${this.id}`, this.coworker);
      this.$router.push({ name: 'CoworkersRetrieveAll' });
    },
    handleDelete(): void {
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${this.id}`);
      this.$router.push({ name: 'CoworkersRetrieveAll' });
    },
  }
})
</script>

<style lang="scss">
.coworkers-update {
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
    align-items: center;
    padding: 5rem;

    &-heading {
      align-self: center;
      margin-right: 10rem;
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
      display: contents;
      margin-left: 10rem;

      @include media('>=600') {
        display: flex;
      }

      &-delete {
        margin: 5rem;
      }

      &-edit {
        margin: 5rem;
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
