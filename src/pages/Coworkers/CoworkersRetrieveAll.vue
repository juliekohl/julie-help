<template>
  <RetrieveAll
    title="Coworkers"
    create-to-name="CoworkersCreate"
    create-button-text="coworker"
    update-to-name="CoworkersUpdate"
    :all="all"
  />
</template>

<script lang="ts">
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

    return {
      all,
    }
  }
}
</script>
