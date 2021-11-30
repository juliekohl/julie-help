<template>
  <RetrieveSingle
    title="Offices Info"
    update-to-name="OffocesUpdate"
    :entity="office"
  />
</template>

<script lang="ts">
import RetrieveSingle from "@/components/templates/RetrieveSingle/RetrieveSingle.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";

export default {
  name: 'OfficesRetrieveSingle',
  components: {
    RetrieveSingle
  },
  setup() {
    const router = useRouter();
    const officeId: number = Number(router.currentRoute.value.params.id);
    const office = ref({id: officeId, name: '', type: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/offices/${officeId}`)
        .then(response => response.json())
        .then(data => {
          office.value.name = data.name;
          office.value.type = data.email;
        });

    return {
      office,
    }
  },
}
</script>
