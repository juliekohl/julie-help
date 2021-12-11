<template>
  <ShowAll
    title="Coworkers"
    create-to-name="CoworkersCreate"
    create-button-text="coworker"
    update-to-name="CoworkersUpdate"
    show-to-name="CoworkersShow"
    :all="all"
  />
</template>

<script lang="ts">
import {ref} from "vue";
import ShowAll from "@/components/templates/ShowAll/ShowAll.vue";
import axios from "axios";

export default {
  name: 'CoworkersShowAll',
  components: {
    ShowAll
  },
  setup() {
    const all: any = ref([]);
    // const coworkerId = localStorage.getItem('coworkerId');

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/coworkers?coworker_id=1`)
        .then(response => {
          all.value = response.data;
        })
        .catch(error => {
           console.log(error.response);
        });

    return { all }
  },
}
</script>
