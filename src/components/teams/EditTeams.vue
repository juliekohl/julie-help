<template>
  <div class="edit-teams" v-if="teamUserId">
    <div class="edit-teams__header">
      <h1 class="edit-teams__header--heading">{{teamUser.name}}</h1>
      <button
          class="edit-teams__header--btn-delete"
          v-on:click="handleDelete"
      >
        Delete
      </button>
      <button
          class="edit-teams__header--btn"
          v-on:click="handleEdit"
      >
        Edit
      </button>
    </div>
    <form class="edit-teams__form">
      <label
          class="edit-teams__form--label"
          for="name"
      >
        Name
      </label>
      <input
          class="edit-teams__form--input"
          type="text"
          id="name"
          name="name"
          placeholder="user name edit"
          v-model="teamUser.name"
      />
      <label
          class="edit-teams__form--label"
          for="password"
      >
        Password
      </label>
      <input
          class="edit-teams__form--input"
          type="password"
          id="password"
          name="password"
          placeholder="user password edit"
          v-model="teamUser.password"
      />
    </form>
  </div>
</template>

<script lang="ts">

export default {
  name: 'EditTeams',
}
</script>
<style lang="scss">

</style>