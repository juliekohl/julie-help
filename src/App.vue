<template>
  <CoworkingRegister />
  <TeamRegister />
  <CoworkerRegister />
</template>

<script>
import CoworkingRegister from './components/CoworkingRegister.vue';
import TeamRegister from "@/components/TeamRegister";
import CoworkerRegister from "@/components/CoworkerRegister";

export default {
  name: 'App',
  components: {
    CoworkingRegister,
    TeamRegister,
    CoworkerRegister,
  }
}
</script>

<style>

</style>
