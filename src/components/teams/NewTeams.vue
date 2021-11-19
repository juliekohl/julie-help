<template>
  <div class="new-teams">
    <div class="new-teams__header">
      <h1 class="new-teams__header--heading">New Team</h1>
      <button
          class="new-teams__header--btn"
          v-on:click="handleCreate"
      >
        Add New Coworker
      </button>
    </div>
    <form class="new-teams__form">
      <label
          class="new-teams__form--label"
          for="cwkId"
      >
        Coworking Id
      </label>
      <input
          class="new-teams__form--input"
          type="number"
          id="cwkId"
          name="cwkId"
          v-model="userId.coworking_id"
      />
      <label
          class="new-teams__form--label"
          for="name"
      >
        Name
      </label>
      <input
          class="new-teams__form--input"
          type="text"
          id="name"
          name="name"
          v-model="userId.name"
      />
      <label
          class="new-teams__form--label"
          for="email"
      >
        Email
      </label>
      <input
          class="new-teams__form--input"
          type="email"
          id="email"
          name="email"
          v-model="userId.email"
      />
      <label
          class="new-teams__form--label"
          for="password"
      >
        Password
      </label>
      <input
          class="new-teams__form--input"
          type="password"
          id="password"
          name="password"
          v-model="userId.password"
      />
    </form>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent( {
  name: 'NewTeams',
})
</script>

<style lang="scss">

</style>