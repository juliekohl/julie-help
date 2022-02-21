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
import {computed, ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";

export default {
  name: 'PlansShowAll',
  components: {
    ShowAll
  },
  setup() {
    const all: any = ref({});
    const store = useStore();

    const currentUser: any = computed((): void => {
      return store.state.auth.user;
    });

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/plans?coworking_id=${currentUser.value.coworking_id}`)
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
