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
import {computed, ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";

export default {
  name: 'TeamsShowAll',
  components: {
    ShowAll
  },
  setup() {
    const all: any = ref([]);
    const store = useStore();

    const currentUser: any = computed((): void => {
      return store.state.auth.user;
    });

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/teams?coworking_id=${currentUser.value.coworking_id}`)
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
