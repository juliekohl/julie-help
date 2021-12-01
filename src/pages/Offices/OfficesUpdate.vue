<template>
  <Update
    :entity="office"
  />
</template>

<script lang="ts">
import Update from "@/components/templates/Update/Update.vue";
import {ref} from "vue";

export default {
  name: 'OfficesUpdate',
  components: {
    Update,
  },
  setup() {
    const office = ref({id: null, name: '', type: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/offices?office_id=1`)
        .then(response => response.json())
        .then(data => {
          office.value.id = data.id;
          office.value.name = data.name;
          office.value.type = data.type;
        });

    return {
      office,
    }
  },
  // methods: {
  //   handleEdit(): void {
  //     axios.post(`${process.env.VUE_APP_BACKEND_URL}/offices/${this.officeId}`, this.office);
  //     location.reload();
  //   },
  //   handleDelete(): void {
  //     axios.delete(`${process.env.VUE_APP_BACKEND_URL}/offices/${this.officeId}`);
  //     location.reload();
  //   },
  // },
}
</script>
