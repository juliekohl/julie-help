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
import {computed, ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";

export default {
  name: 'OfficesShowAll',
  components: {
    ShowAll
  },
  setup() {
    const all: any = ref({});
    const store = useStore();

    const currentUser: any = computed((): void => {
      return store.state.auth.user;
    });

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/offices?coworking_id=${currentUser.value.coworking_id}`)
        .then(response => {
          all.value = response.data;
        });

    return {
      all,
    }
  }
}
</script>
