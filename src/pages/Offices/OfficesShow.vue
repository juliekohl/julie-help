<template>
  <Show
    title="Offices Info"
    update-to-name="OfficesUpdate"
    :entity="office"
  />
</template>

<script lang="ts">
import Show from "@/components/templates/Show/Show.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";

export default {
  name: 'OfficesShow',
  components: {
    Show
  },
  setup() {
    const router = useRouter();
    const officeId: number = Number(router.currentRoute.value.params.id);
    const office: any = ref({id: officeId, name: '', type: ''});

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/offices/${officeId}`)
        .then(response => {
          office.value.name = (response.data as any).name;
          office.value.type = (response.data as any).type;
        });

    return {
      office,
    }
  },
}
</script>
