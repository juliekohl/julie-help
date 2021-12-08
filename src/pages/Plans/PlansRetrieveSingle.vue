<template>
  <RetrieveSingle
      title="Plans Info"
      update-to-name="PlansUpdate"
      :entity="plan"
  />
</template>

<script lang="ts">
import RetrieveSingle from "@/components/templates/RetrieveSingle/RetrieveSingle.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";

export default {
  name: 'PlansRetrieveSingle',
  components: {
    RetrieveSingle
  },
  setup() {
    const router = useRouter();
    const planId: number = Number(router.currentRoute.value.params.id);
    const plan: any = ref({id: planId, name: '', value: 100});

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/plans/${planId}`)
        .then(response => {
          plan.value.name = (response.data as any).name;
          plan.value.value = (response.data as any).value;
        });

    return {
      plan,
    }
  },
}
</script>
