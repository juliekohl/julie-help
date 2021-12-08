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
import axios from "axios";

export default {
  name: 'PlansRetrieveAll',
  components: {
    RetrieveAll
  },
  setup() {
    const all: any = ref({});

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/plans?plan_id=1`)
        .then(response => {
          all.value = response.data;
        })
        .catch(error => {
          error.response;
        });

    return {
      all,
    }
  }
}
</script>
