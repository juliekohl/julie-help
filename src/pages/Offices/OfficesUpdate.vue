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
          :placeholder="office.name ? office.name : 'Name'"
      />
      <ErrorMessage name="name" />

      <label
          class="offices-update__label"
          for="type"
      >
        Type
      </label>
      <Field
          class="offices-update__input"
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
import axios from "axios";
import {useRouter} from "vue-router";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default defineComponent({
  name: 'OfficesUpdate',
  components: {ButtonUnit, Field, Form, ErrorMessage},
  setup() {
    const router = useRouter();
    const id: number = Number(router.currentRoute.value.params.id);
    const office: any = ref({id, name: '', type: ''});
    const officestypes: any = ref([]);

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/offices/${id}`)
        .then(response => {
          office.value = response.data;
        });

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/officestypes`)
        .then(response => {
          officestypes.value = response.data;
        });

    return {
      id,
      office,
      officestypes,
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
    onSubmit(values: any): void {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/offices/${this.id}`, values);
      this.$router.push({ name: 'OfficesShowAll' });
    },
    handleDelete(): void {
      if (confirm("Do you want to delete?")) {
        axios.delete(`${process.env.VUE_APP_BACKEND_URL}/offices/${this.id}`);
        this.$router.push({ name: 'OfficesShowAll' });
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
