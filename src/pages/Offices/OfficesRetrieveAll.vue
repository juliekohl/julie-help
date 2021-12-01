<template>
  <RetrieveAll
    title="Offices"
    create-to-name="OfficesCreate"
    create-button-text="office"
    update-to-name="OfficesUpdate"
    retrieve-single-to-name="OfficesRetrieveSingle"
    :all="all"
  />
</template>
<script lang="ts">
import RetrieveAll from "@/components/templates/RetrieveAll/RetrieveAll.vue";
import {ref} from "vue";

export default {
  name: 'OfficesRetrieveAll',
  components: {
    RetrieveAll
  },
  setup() {
    const all = ref({});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/offices?office_id=1`)
        .then(response => response.json())
        .then(data => all.value = data);

    console.log('all', all);

    return {
      all,
    }
  }
}
</script>
