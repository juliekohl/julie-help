<template>
  <ShowAll
    title="Offices"
    create-to-name="OfficesCreate"
    create-button-text="office"
    update-to-name="OfficesUpdate"
    show-to-name="OfficesShow"
    :all="all"
  />
</template>

<script lang="ts">
import ShowAll from "@/components/templates/ShowAll/ShowAll.vue";
import {ref} from "vue";
import axios from "axios";

export default {
  name: 'OfficesShowAll',
  components: {
    ShowAll
  },
  setup() {
    const all: any = ref({});

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/offices?office_id=1`)
        .then(response => {
          all.value = response.data;
        });

    return {
      all,
    }
  }
}
</script>
