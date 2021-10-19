<template>
  <CoworkingRegister />
  <TeamRegister />
</template>

<script>
import CoworkingRegister from './components/CoworkingRegister.vue';
import UsersRegister from "@/components/CoworkerRegister";
import TeamRegister from "@/components/TeamRegister";

export default {
  name: 'App',
  components: {
    CoworkingRegister,
    TeamRegister,
  }
}
</script>

<style>

</style>
