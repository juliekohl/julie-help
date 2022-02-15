<template>
  <div class="coworkers-update">
    <Form
        class="coworkers-update__form"
        @submit="onSubmit"
        :validation-schema="schema"
        :initial-values="coworker"
    >
      <div class="coworkers-update__header">
        <h1 class="coworkers-update__heading">{{coworker.name}}</h1>
        <div class="coworkers-update__button">
          <button-unit
              class="coworkers-update__button-delete"
              color="red"
              @click="handleDelete"
          >
            Delete
          </button-unit>
          <button-unit
              class="coworkers-update__button-edit"
              color="purple"
              type="submit"
          >
            Edit
          </button-unit>
        </div>
      </div>

      <label
          class="coworkers-update__label"
          for="name"
      >
        Name
      </label>
      <Field
          class="coworkers-update__input"
          type="text"
          id="name"
          name="name"
      />
      <ErrorMessage
          class="coworkers-update__span"
          name="name"
      />
      <label
          class="coworkers-update__label"
          for="password"
      >
        Password
      </label>
      <Field
          class="coworkers-update__input"
          type="password"
          id="password"
          name="password"
      />
      <ErrorMessage
          class="coworkers-update__span"
          name="password"
      />

      <label
          class="coworkers-update__label"
          for="plans"
      >
        Plans
      </label>
      <Field
          class="coworkers-update__input"
          as="select"
          name="plan_id"
          id="plans"
      >
        <option></option>
        <option
            v-for="i in plans"
            :key="i"
            :value="i.id"
        >{{i.name}} - {{i.value}}</option>
      </Field>
      <ErrorMessage
          class="coworkers-update__span"
          name="plan_id"
      />
    </Form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default defineComponent({
  name: 'CoworkersUpdate',
  components: {ButtonUnit, Field, Form, ErrorMessage},
  setup() {
    const router = useRouter();
    const id: number = Number(router.currentRoute.value.params.id);
    const coworker: any = ref({id, name: '', password: '', email: ''});
    const plans: any = ref([]);

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${id}`)
        .then(response => {
          coworker.value = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/plans/?plan_id=${id}`)
        .then(response => {
          plans.value = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });

    return {
      id,
      coworker,
      plans
    }
  },
  data() {
    const schema = yup.object({
      name: yup.string().required().label('Name'),
      password: yup.string().min(8).label('Password'),
      plan_id: yup.string().required().label('Plan'),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values: any) {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${this.id}`, values);
      this.$router.push({ name: 'CoworkersShowAll' });
    },
    handleDelete(): void {
      if (confirm("Do you want to delete?")) {
        axios.delete(`${process.env.VUE_APP_BACKEND_URL}/coworkers/${this.id}`);
        this.$router.push({ name: 'CoworkersShowAll' });
      }
    },
  },
})
</script>

<style lang="scss">
.coworkers-update {
  @include page-update();
}
</style>
