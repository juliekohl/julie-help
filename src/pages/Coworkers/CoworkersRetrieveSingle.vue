<template>
  <RetrieveSingle
      title="Coworkers Info"
      update-to-name="CoworkersUpdate"
      :entity="coworkerUser"
  />
</template>

<script lang="ts">
import RetrieveSingle from "@/components/templates/RetrieveSingle/RetrieveSingle.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";

export default {
  name: 'CoworkersRetrieveSingle',
  components: {
    RetrieveSingle
  },
  setup() {
    const router = useRouter();
    const coworkerUserId: number = Number(router.currentRoute.value.params.id);
    const coworkerUser: any = ref({id: coworkerUserId, name: '', email: ''});

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${coworkerUserId}`)
        .then(response => {
          coworkerUser.value.name = (response.data as any).name;
          coworkerUser.value.email = (response.data as any).email;
        })
        .catch(error => {
          error.response;
        });

    return {
      coworkerUser,
    }
  },
}
</script>
