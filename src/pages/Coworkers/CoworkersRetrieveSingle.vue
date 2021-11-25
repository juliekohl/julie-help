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

export default {
  name: 'CoworkersRetrieveSingle',
  components: {
    RetrieveSingle
  },
  setup() {
    const router = useRouter();
    const coworkerUserId: number = Number(router.currentRoute.value.params.id);
    const coworkerUser = ref({id: coworkerUserId, name: '', email: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${coworkerUserId}`)
        .then(response => response.json())
        .then(data => {
          coworkerUser.value.name = data.name;
          coworkerUser.value.email = data.email;
        });

    return {
      coworkerUser,
    }
  },
}
</script>
