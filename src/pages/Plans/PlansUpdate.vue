<template>
  <Update
      :entity="plan"
  />
</template>

<script lang="ts">
import Update from "@/components/templates/Update/Update.vue";
import {ref} from "vue";

export default {
  name: 'PlansUpdate',
  components: {
    Update,
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
  // methods: {
  //   handleEdit(): void {
  //     axios.post(`${process.env.VUE_APP_BACKEND_URL}/plans/${this.planId}`, this.plan);
  //     location.reload();
  //   },
  //   handleDelete(): void {
  //     axios.delete(`${process.env.VUE_APP_BACKEND_URL}/plans/${this.planId}`);
  //     location.reload();
  //   },
  // },
}
</script>
