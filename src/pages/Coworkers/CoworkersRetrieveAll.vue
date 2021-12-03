<template>
  <RetrieveAll
    title="Coworkers"
    create-to-name="CoworkersCreate"
    create-button-text="coworker"
    update-to-name="CoworkersUpdate"
    retrieve-single-to-name="CoworkersRetrieveSingle"
    :all="all"
  />
</template>

<script lang="ts">
import {ref} from "vue";
import RetrieveAll from "@/components/templates/RetrieveAll/RetrieveAll.vue";

export default {
  name: 'CoworkersRetrieveAll',
  components: {
    RetrieveAll
  },
  setup() {
    const all = ref({});
    const coworkerId = localStorage.getItem('coworkerId');

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers?coworker_id=${coworkerId}`)
        .then(response => response.json())
        .then(data => all.value = data);
    console.log('all', coworkerId, `${process.env.VUE_APP_BACKEND_URL}/coworkers?coworker_id=${coworkerId}`, all);

    return {
      all,
    }
  }
}
</script>
