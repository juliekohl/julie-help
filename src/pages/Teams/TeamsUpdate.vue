<template>
  <div class="teams-update">
    <Form
        class="teams-update__form"
        @submit="onSubmit"
        :validation-schema="schema"
        :initial-values="team"
    >
      <div class="teams-update__header">
        <h1 class="teams-update__heading">{{team.name}}</h1>
        <div class="teams-update__button">
          <button-unit
              class="teams-update__button-delete"
              color="red"
              @click="handleDelete"
          >
            Delete
          </button-unit>
          <button-unit
              class="teams-update__button-edit"
              color="purple"
              type="submit"
          >
            Edit
          </button-unit>
        </div>
      </div>
      <label
          class="teams-update__label"
          for="name"
      >
        Name
      </label>
      <Field
          class="teams-update__input"
          type="text"
          id="name"
          name="name"
      />
      <ErrorMessage
          class="teams-update__span"
          name="name"
      />
      <label
          class="teams-update__label"
          for="password"
      >
        Password
      </label>
      <Field
          class="teams-update__input"
          type="password"
          id="password"
          name="password"
      />
      <ErrorMessage
          class="teams-update__span"
          name="password"
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
  name: 'TeamsUpdate',
  components: {ButtonUnit, Field, Form, ErrorMessage},
  setup() {
    const router = useRouter();
    const id: number = Number(router.currentRoute.value.params.id);
    const team: any = ref({id, name: '', password: '', email: ''});

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/teams/${id}`)
        .then(response => {
          team.value = response.data;

        })
        .catch(error => {
          console.log(error.response);
        });

    return {
      id,
      team
    }
  },
  data() {
    const schema = yup.object({
      name: yup.string().required().label('Name'),
      password: yup.string().required().min(8).label('Password'),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values: any) {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/teams/${this.id}`, values);
      this.$router.push({ name: 'TeamsShowAll' });
    },
    handleDelete(): void {
      if (confirm("Do you want to delete?")) {
        axios.delete(`${process.env.VUE_APP_BACKEND_URL}/teams/${this.id}`);
        this.$router.push({ name: 'TeamsShowAll' });
      }
    },
  },
})
</script>

<style lang="scss">
.teams-update {
  @include page-update();
}
</style>
