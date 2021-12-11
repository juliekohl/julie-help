<template>
  <Show
      title="Plans Info"
      update-to-name="PlansUpdate"
      :entity="plan"
      extraTitle="Coworkers"
      :extra="planCoworkers"
  />
</template>

<script lang="ts">
import Show from "@/components/templates/Show/Show.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";

export default {
  name: 'PlansShow',
  components: {
    Show
  },
  setup() {
    const router = useRouter();
    const id: number = Number(router.currentRoute.value.params.id);
    const plan: any = ref({id: id, name: '', value: 0});
    const planCoworkers: any = ref([]);

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/plans/${id}`)
        .then(response => {
          plan.value.name = (response.data as any).name;
          plan.value.value = (response.data as any).value;
        });

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/plans/coworkers/${id}`)
        .then(response => {
          planCoworkers.value = response.data;
        });

    return {
      plan,
      planCoworkers
    }
  },
}
</script>
