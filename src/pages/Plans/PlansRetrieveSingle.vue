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

export default {
  name: 'PlansRetrieveSingle',
  components: {
    RetrieveSingle
  },
  setup() {
    const router = useRouter();
    const planId: number = Number(router.currentRoute.value.params.id);
    const plan = ref({id: planId, name: '', value: 100});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/plans/${planId}`)
        .then(response => response.json())
        .then(data => {
          plan.value.name = data.name;
          plan.value.value = data.value;
        });

    return {
      plan,
    }
  },
}
</script>
