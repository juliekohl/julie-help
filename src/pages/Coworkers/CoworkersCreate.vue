<template>
  <Create
      title="New Coworkers"
      retrieve-all-to-name="CoworkersRetrieveAll"
      create-button-text="Coworker"
      :entity="userId"
  />
</template>

<script lang="ts">
import Create from "@/components/templates/Create/Create.vue";
import {ref} from "vue";

export default {
  name: 'CoworkersCreate',
  components: {
    Create
  },
  setup() {
    const userId = ref({coworking_id: 1, name: '', email: '', password: ''});

    return {
      userId
    }
  },
  // methods: {
  //   handleCreate(): void {
  //     axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers`, this.userId);
  //     location.reload();
  //   }
  // }
}
</script>
