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
import {ref, computed} from "vue";
import ShowAll from "@/components/templates/ShowAll/ShowAll.vue";
import axios from "axios";
import {useStore} from "vuex";

export default {
  name: 'CoworkersShowAll',
  components: {
    ShowAll
  },
  setup() {
    const all: any = ref([]);
    const store = useStore();

    const currentUser: any = computed((): void => {
      return store.state.auth.user;
    });

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/coworkers?coworking_id=${currentUser.value.coworking_id}`)
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
