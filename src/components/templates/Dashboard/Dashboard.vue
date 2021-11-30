<template>
  <h1>Dashboard</h1>
  <RegisterOffices/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import RegisterOffices from "@/components/templates/OfficesOld/Offices.vue";

export default defineComponent( {
  name: 'Dashboard',
  components: {RegisterOffices},
})
</script>

<style lang="scss">

</style>
