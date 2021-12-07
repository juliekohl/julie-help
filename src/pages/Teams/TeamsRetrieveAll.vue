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
import RetrieveAll from "@/components/templates/TeamsOld/TeamsRetrieveAll.vue";
import {ref} from "vue";

export default {
  name: 'TeamsRetrieveAll',
  components: {
    RetrieveAll
  },
  setup() {
    const all = ref({});
    const teamId = localStorage.getItem('teamId');

    fetch(`${process.env.VUE_APP_BACKEND_URL}/teams?team_id=${teamId}`)
        .then(response => response.json())
        .then(data => all.value = data);
    console.log('all', teamId, `${process.env.VUE_APP_BACKEND_URL}/teams?team_id=${teamId}`, all);

    return {
      all,
    }
  },
}
</script>
