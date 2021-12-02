<template>
  <RetrieveAll
      title="Plans"
      create-to-name="PlansCreate"
      create-button-text="plan"
      update-to-name="PlansUpdate"
      retrieve-single-to-name="PlansRetrieveSingle"
      :all="all"
  />
</template>
<script lang="ts">
import RetrieveAll from "@/components/templates/RetrieveAll/RetrieveAll.vue";
import {ref} from "vue";

export default {
  name: 'PlansRetrieveAll',
  components: {
    RetrieveAll
  },
  setup() {
    const all = ref({});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/plans?plan_id=1`)
        .then(response => response.json())
        .then(data => all.value = data);

    console.log('all', all);

    return {
      all,
    }
  }
}
</script>
