<template>
  <Show
      title="Coworkers Info"
      update-to-name="CoworkersUpdate"
      :entity="coworkerUser"
  />
</template>

<script lang="ts">
import Show from "@/components/templates/Show/Show.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";

export default {
  name: 'CoworkersShow',
  components: {
    Show
  },
  setup() {
    const router = useRouter();
    const coworkerUserId: number = Number(router.currentRoute.value.params.id);
    const coworkerUser: any = ref({id: coworkerUserId, name: '', email: ''});

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${coworkerUserId}`)
        .then(response => {
          console.log(1, response.data);
          coworkerUser.value.name = (response.data as any).name;
          coworkerUser.value.email = (response.data as any).email;

          coworkerUser.value.planId = (response.data as any).planId;
          coworkerUser.value.planName = (response.data as any).planName;
          coworkerUser.value.value = (response.data as any).value;
        })
        .catch(error => {
          console.log(error.response);
        });

    return {
      coworkerUser,
    }
  },
}
</script>
