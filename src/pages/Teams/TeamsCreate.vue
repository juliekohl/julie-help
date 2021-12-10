<template>
  <div class="teams-create">
    <Form
        class="teams-create__form"
        @submit="onSubmit"
        :validation-schema="schema"
    >
      <div class="teams-create__header">
        <h1 class="teams-create__heading">Create Team</h1>
        <button-unit
            type="submit"
            class="teams-create__button"
            color="purple"
        >
          Add New Team
        </button-unit>
      </div>

      <Field
          class="teams-create__input"
          name="coworking_id"
          :value="1"
          type="hidden"
      />

      <label
          class="teams-create__label"
          for="name"
      >
        Name
      </label>
      <Field
          class="teams-create__input"
          type="text"
          id="name"
          name="name"
      />
      <ErrorMessage name="name" />

      <label
          class="teams-create__label"
          for="email"
      >
        Email
      </label>
      <Field
          class="teams-create__input"
          type="email"
          id="email"
          name="email"
      />
      <ErrorMessage name="email" />

      <label
          class="teams-create__label"
          for="password"
      >
        Password
      </label>
      <Field
          class="teams-create__input"
          type="password"
          id="password"
          name="password"
      />
      <ErrorMessage name="password" />
    </Form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default defineComponent({
  name: 'TeamsCreate',
  components: {ButtonUnit, Field, Form, ErrorMessage},
  data() {
    const schema = yup.object({
      name: yup.string().required().label('Name'),
      email: yup.string().required().email().label('Email'),
      password: yup.string().required().min(8).label('Password'),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values: any) {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/teams`, values);
      this.$router.push({ name: 'TeamsRetrieveAll' });
    },
  },
})
</script>

<style lang="scss">
.teams-create {
  @include page-create();
}
</style>
