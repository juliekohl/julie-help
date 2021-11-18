<template>
  <div class="edit-coworkers">
    <div class="edit-coworkers__header">
      <h1 class="edit-coworkers__header--heading">Edit Coworkers</h1>
      <button class="edit-coworkers__header--btn">Edit</button>
      <button class="edit-coworkers__header--btn">Delete</button>
    </div>
    <form class="edit-coworkers__form">
      <label
          class="edit-coworkers__form--label"
          for="name"
      >
        Name
      </label>
      <input
          class="edit-coworkers__form--input"
          type="text"
          id="name"
          name="name"
          placeholder="user name edit"
      />
      <label
          class="edit-coworkers__form--label"
          for="password"
      >
        Password
      </label>
      <input
          class="edit-coworkers__form--input"
          type="password"
          id="password"
          name="password"
          placeholder="user password edit"
      />
    </form>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
export default defineComponent({
  name: 'EditCoworkers',
})
</script>

<style lang="scss">

</style>