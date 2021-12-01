<template>
  <Update
    :entity="coworkerUser"
  />
</template>

<script lang="ts">
import Update from "@/components/templates/Update/Update.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";

export default {
  name: 'CoworkersUpdate',
  components: {
    Update,
  },
  setup() {
    const router = useRouter();
    const coworkerUserId: number = Number(router.currentRoute.value.params.id);
    const coworkerUser = ref({id: coworkerUserId, name: '', password: '', email: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${coworkerUserId}`)
        .then(response => response.json())
        .then(data => {
          coworkerUser.value.id = data.id;
          coworkerUser.value.name = data.name;
          coworkerUser.value.password = data.password;
          coworkerUser.value.email = data.email;
        });

    return {
      coworkerUser,
    }
  },
  // methods: {
  //   handleEdit(): void {
  //     axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${this.coworkerUserId}`, this.coworkerUser);
  //     location.reload();
  //   },
  //   handleDelete(): void {
  //     axios.delete(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${this.coworkerUserId}`);
  //     location.reload();
  //   },
  // },
}
</script>
