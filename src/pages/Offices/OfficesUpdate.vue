<template>
  <div class="offices-update">
    <Form
        class="offices-update__form"
        @submit="onSubmit"
        :validation-schema="schema"
    >
      <div class="offices-update__header">
        <h1 class="offices-update__heading">{{office.name}}</h1>
        <div class="offices-update__button">
          <button-unit
              class="offices-update__button-delete"
              color="red"
              @click="handleDelete"
          >
            Delete
          </button-unit>
          <button-unit
              class="offices-update__button-edit"
              color="purple"
              type="submit"
          >
            Edit
          </button-unit>
        </div>
      </div>
      <label
          class="offices-update__label"
          for="name"
      >
        Name
      </label>
      <Field
          class="offices-update__input"
          type="text"
          id="name"
          name="name"
      />
      <ErrorMessage name="name" />
      <label
          class="offices-update__label"
          for="type"
      >
        type
      </label>
      <Field
          class="offices-update__input"
          type="type"
          id="type"
          name="type"
      />
      <ErrorMessage name="type" />
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
  name: 'OfficesUpdate',
  components: {ButtonUnit, Field, Form, ErrorMessage},
  setup() {
    const id: number = 1;
    const office: any = ref({id, name: '', type: ''});

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/offices?office_id=1`)
        .then(response => {
          office.value = response.data;
        });

    return {
      office,
    }
  },
  data() {
    const schema = yup.object({
      name: yup.string().required().label('Name'),
      type: yup.string().required().label('Type'),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values: any): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/offices/${this.office}`, values);
      this.$router.push({ name: 'OfficesRetrieveAll' });
    },
    handleDelete(): void {
      if (confirm("Do you want to delete?")) {
        axios.delete(`${process.env.VUE_APP_BACKEND_URL}/offices/${this.office}`);
        this.$router.push({ name: 'OfficesRetrieveAll' });
      }
    },
  },
})
</script>

<style lang="scss">
.offices-update {
  @include page-update();
}
</style>
