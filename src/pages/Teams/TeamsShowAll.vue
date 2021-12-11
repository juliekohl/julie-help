<template>
  <ShowAll
      title="Teams"
      create-to-name="TeamsCreate"
      create-button-text="team"
      update-to-name="TeamsUpdate"
      show-to-name="TeamsShow"
      :all="all"
  />
</template>

<script lang="ts">
import ShowAll from "@/components/templates/ShowAll/ShowAll.vue";
import {ref} from "vue";
import axios from "axios";

export default {
  name: 'TeamsShowAll',
  components: {
    ShowAll
  },
  setup() {
    const all: any = ref([]);
    // const teamId = localStorage.getItem('teamId');

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/teams?team_id=1`)
        .then(response => {
          all.value = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });

    return {
      all,
    }
  },
}
</script>
