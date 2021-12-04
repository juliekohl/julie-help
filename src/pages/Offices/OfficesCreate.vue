<template>
  <div class="offices-create">
    <Form
        class="offices-create__form"
        @submit="onSubmit"
        :validation-schema="schema"
    >
      <div class="offices-create__header">
        <h1 class="offices-create__heading">Create Office</h1>
        <button-unit
            class="offices-create__button"
            color="purple"
        >
          Add New Office
        </button-unit>
      </div>

      <Field
          class="coworkers-create__input"
          name="coworking_id"
          :value="1"
          type="hidden"
      />

      <label
          class="offices-create__label"
          for="name"
      >
        Name
      </label>
      <Field
          class="offices-create__input"
          type="text"
          id="name"
          name="name"
      />
      <ErrorMessage name="name" />
      <label
          class="offices-create__label"
          for="type"
      >
        Type
      </label>
      <Field
        as="select"
        name="officestype_id"
      >
        <option></option>
        <option
            v-for="i in officestypes"
            :key="i"
            :value="i.id"
        >{{i.name}}</option>
      </Field>
      <ErrorMessage name="officestype_id" />
    </Form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {ErrorMessage, Field, Form} from "vee-validate";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";
import * as yup from "yup";
import axios from "axios";

export default defineComponent({
  name: 'OfficesCreate',
  components: {
    ButtonUnit,
    Field,
    Form,
    ErrorMessage
  },
  setup() {
    const officestypes = ref([]);

    fetch(`${process.env.VUE_APP_BACKEND_URL}/officestypes`)
        .then(response => response.json())
        .then(data => officestypes.value = data);

    return {
      officestypes
    }
  },
  data() {
    const schema = yup.object({
      name: yup.string().required().label('Name'),
      officestype_id: yup.string().required().label('Type'),
    });

    return {
      schema,
    };
  },
  methods: {
    onSubmit(values: any) {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/offices`, values);
      this.$router.push({ name: 'OfficesRetrieveAll' });
    },
  },
})
</script>

<style lang="scss">
.plans-create {
  @include page-create();
}
</style>
