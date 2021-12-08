<template>
  <RetrieveAll
      title="Teams"
      create-to-name="TeamsCreate"
      create-button-text="team"
      update-to-name="TeamsUpdate"
      retrieve-single-to-name="TeamsRetrieveSingle"
      :all="all"
  />
</template>

<script lang="ts">
import RetrieveAll from "@/components/templates/RetrieveAll/RetrieveAll.vue";
import {ref} from "vue";
import axios from "axios";

export default {
  name: 'TeamsRetrieveAll',
  components: {
    RetrieveAll
  },
  setup() {
    const all: any = ref([]);
    // const teamId = localStorage.getItem('teamId');

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/teams?team_id=1`)
        .then(response => {
          all.value = response.data;
        })
        .catch(error => {
          error.response;
        });

    return {
      all,
    }
  },
}
</script>
