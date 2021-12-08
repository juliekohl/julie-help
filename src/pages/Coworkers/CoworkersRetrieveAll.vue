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
import axios from "axios";

export default {
  name: 'CoworkersRetrieveAll',
  components: {
    RetrieveAll
  },
  setup() {
    const all: any = ref([]);
    // const coworkerId = localStorage.getItem('coworkerId');

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/coworkers?coworker_id=1`)
        .then(response => {
          all.value = response.data;
        })
        .catch(error => {
           error.response;
        });

    return { all }
  },
}
</script>
