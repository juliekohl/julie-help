<template>
  <ShowAll
      title="Plans"
      create-to-name="PlansCreate"
      create-button-text="plan"
      update-to-name="PlansUpdate"
      show-to-name="PlansShow"
      :all="all"
  />
</template>

<script lang="ts">
import ShowAll from "@/components/templates/ShowAll/ShowAll.vue";
import {ref} from "vue";
import axios from "axios";

export default {
  name: 'PlansShowAll',
  components: {
    ShowAll
  },
  setup() {
    const all: any = ref({});

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/plans?plan_id=1`)
        .then(response => {
          all.value = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });

    return {
      all,
    }
  }
}
</script>
