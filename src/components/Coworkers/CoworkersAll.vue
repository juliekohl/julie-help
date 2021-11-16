<template>
  <Menu></Menu>
  <div class="coworkers">
    <h1 class="coworkers__heading">Coworkers</h1>
    <ul class="coworkers__ul">
      <li
          v-for="i in all"
          :key="i"
          :data-id="i.id"
          @click="handleListItem"
          class="coworkers__li"
      >
        <router-link
            :to="{ name: 'CoworkersView', params: { id: i.id }}"
        >{{ i.name }}</router-link>
      </li>
    </ul>
    <button
        class="coworkers__btn"
        type="button"
        v-on:click="handleCreate"
    >
      <router-link
          :to="{ name: 'CoworkersCreate', params: { id: coworkersId }}"
      >Create new coworker</router-link>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Menu from "@/components/menu/Menu.vue";
import axios from "axios";

export default defineComponent( {
  name: 'CoworkersAll',
  components: {Menu},

  setup() {
    const all = ref({});
    const coworker = ref({id: null, name: ''});
    const coworkersId = coworker.value.id;

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkers?coworker_id=5`)
        .then(response => response.json())
        .then(data => all.value = data);

    const handleListItem = (e: any): void => {
      coworker.value.id = e.target.getAttribute('data-id');
      coworker.value.name = e.target.innerHTML;
    }

    return {
      all,
      coworker,
      coworkersId,
      handleListItem
    }
  },
  methods: {
    handleCreate(): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers`);
      location.reload();
    }
  },
})
</script>
<style lang="scss"></style>