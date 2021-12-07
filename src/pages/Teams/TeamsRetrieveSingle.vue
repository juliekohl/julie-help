<template>
  <RetrieveSingle
      title="Teams Info"
      update-to-name="TeamsUpdate"
      :entity="teamUser"
  />
</template>

<script lang="ts">
import RetrieveSingle from "@/components/templates/RetrieveSingle/RetrieveSingle.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";

export default {
  name: 'TeamsRetrieveSingle',
  components: {
    RetrieveSingle
  },
  setup() {
    const router = useRouter();
    const teamUserId: number = Number(router.currentRoute.value.params.id);
    const teamUser = ref({id: teamUserId, name: '', email: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/teams/${teamUserId}`)
        .then(response => response.json())
        .then(data => {
          teamUser.value.name = data.name;
          teamUser.value.email = data.email;
        });

    return {
      teamUser,
    }
  },
}
</script>
