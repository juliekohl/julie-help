<template>
  <div class="coworkers-update">
    <div class="coworkers-update__header">
      <h1 class="coworkers-update__heading">{{coworker.name}}</h1>
      <div class="coworkers-update__button">
        <button-unit
            class="coworkers-update__button-delete"
            color="red"
            @click="handleDelete"
        >
          Delete
        </button-unit>
        <button-unit
            class="coworkers-update__button-edit"
            color="purple"
            @click="handleEdit"
        >
          Edit
        </button-unit>
      </div>
    </div>
    <form class="coworkers-update__form">
      <label
          class="coworkers-update__label"
          for="name"
      >
        Name
      </label>
      <input
          class="coworkers-update__input"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          v-model="coworker.name"
      />
      <label
          class="coworkers-update__label"
          for="password"
      >
        Password
      </label>
      <input
          class="coworkers-update__input"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          v-model="coworker.password"
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
  @include page-update();
}
</style>
