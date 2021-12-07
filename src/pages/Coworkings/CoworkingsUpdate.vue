<template>
  <div class="coworkings-update">
    <Form
        class="coworkings-update__form"
        @submit="onSubmit"
        :validation-schema="schema"
    >
      <div class="coworkings-update__header">
        <h1 class="coworkings-update__heading">{{coworking.name}}</h1>
        <div class="coworkings-update__button">
          <button-unit
              class="coworkings-update__button-delete"
              color="red"
              @click="handleDelete"
          >
            Delete
          </button-unit>
          <button-unit
              class="coworkings-update__button-edit"
              color="purple"
              type="submit"
          >
            Edit
          </button-unit>
        </div>
      </div>
      <label
          class="coworkings-update__label"
          for="name"
      >
        Name
      </label>
      <Field
          class="coworkings-update__input"
          type="text"
          id="name"
          name="name"
      />
      <ErrorMessage name="name" />
    </Form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default defineComponent({
  name: 'CoworkingsUpdate',
  components: {ButtonUnit, Field, Form, ErrorMessage},
  setup() {
    const coworking = ref({id: null, name: ''});

    fetch(`${process.env.VUE_APP_BACKEND_URL}/coworkings`)
        .then(response => response.json())
        .then(data => {coworking.value = data});

    return {
      coworking
    }
  },
  data() {
    const schema = yup.object({
      name: yup.string().required().label('Name'),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values: any) {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkings/${this.coworking.id}`, values);
      location.reload();
    },
    handleDelete(): void {
      if (confirm("Do you want to delete?")) {
        axios.delete(`${process.env.VUE_APP_BACKEND_URL}/coworkings/${this.coworking.id}`);
        location.reload();
      }
    },
  },
})
</script>

<style lang="scss">
.coworkings-update {
  @include page-update();
}
</style>
