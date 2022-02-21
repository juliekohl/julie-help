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
            type="submit"
            class="offices-create__button"
            color="purple"
        >
          Add New Office
        </button-unit>
      </div>

      <Field
          class="offices-create__input"
          name="coworking_id"
          :value="currentUser.coworking_id"
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
      <ErrorMessage
          class="offices-create__span"
          name="name"
      />

      <label
          class="offices-create__label"
          for="type"
      >
        Type
      </label>
      <Field
          class="offices-create__input"
          as="select"
          name="officestype_id"
          id="type"
      >
        <option></option>
        <option
            v-for="i in officestypes"
            :key="i"
            :value="i.id"
        >{{i.name}}</option>
      </Field>
      <ErrorMessage
          class="offices-create__span"
          name="officestype_id"
      />
    </Form>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import {ErrorMessage, Field, Form} from "vee-validate";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";
import * as yup from "yup";
import axios from "axios";
import {useStore} from "vuex";

export default defineComponent({
  name: 'OfficesCreate',
  components: {
    ButtonUnit,
    Field,
    Form,
    ErrorMessage
  },
  setup() {
    const officestypes: any = ref([]);

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/officestypes`)
        .then(response => {
          officestypes.value = response.data;
        });

    return {
      officestypes
    }
  },
  data() {
    const store = useStore();

    const currentUser: {} = computed((): void => {
      return store.state.auth.user;
    });

    const schema = yup.object({
      name: yup.string().required().label('Name'),
      officestype_id: yup.string().required().label('Type'),
    });

    return {
      currentUser,
      schema,
    };
  },
  methods: {
    onSubmit(values: any) {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/offices`, values);
      this.$router.push({ name: 'OfficesShowAll' });
    },
  },
})
</script>

<style lang="scss">
.offices-create {
  @include page-create();
}
</style>
