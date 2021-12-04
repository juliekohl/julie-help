<template>
  <div class="plans-update">
    <div class="plans-update__header">
      <h1 class="plans-update__header-heading">{{plan.name}}</h1>
      <div class="plans-update__header-button">
        <button-unit
            class="plans-update__header-button-delete"
            color="red"
            @click="handleDelete"
        >
          Delete
        </button-unit>
        <button-unit
            class="plans-update__header-button-edit"
            color="purple"
            @click="handleEdit"
        >
          Edit
        </button-unit>
      </div>
    </div>
    <form class="plans-update__form">
      <label
          class="plans-update__form-label"
          for="name"
      >
        Name
      </label>
      <input
          class="plans-update__form-input"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          v-model="plan.name"
      />
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

export default  defineComponent({
  name: 'PlansUpdate',
  components: {
    ButtonUnit

  },
  setup() {
    const plan = ref({id: null, name: '', value: 100});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/plans?plan_id=1`)
        .then(response => response.json())
        .then(data => {
          plan.value.id = data.id;
          plan.value.name = data.name;
          plan.value.value = data.value;
        });

    return {
      plan,
    }
  },
  methods: {
    handleEdit(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/plans/${this.plan}`, this.plan);
      this.$router.push({ name: 'PlansRetrieveAll' });
    },
    handleDelete(): void {
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/plans/${this.plan}`);
      this.$router.push({ name: 'PlansRetrieveAll' });
    },
  },
})
</script>

<style lang="scss">
.plans-update {}
</style>
