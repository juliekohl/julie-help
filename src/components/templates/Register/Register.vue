<template>
  <div class="page-register">
    <Form
        class="page-register__form"
        v-if="!successful"
        @submit="handleRegister"
        :validation-schema="schema"
    >
      <h1 class="page-register__heading">Register</h1>

      <label
          class="page-register__label"
          for="name"
      >
        name
      </label>
      <Field
          class="page-register__input"
          type="text"
          id="name"
          name="name"
      />
      <ErrorMessage
          class="page-register__span"
          name="name"
      />
      <label
          class="page-register__label"
          for="email"
      >
        Email
      </label>
      <Field
          class="page-register__input"
          type="email"
          id="email"
          name="email"
      />
      <ErrorMessage
          class="page-register__span"
          name="email"
      />
      <label
          class="page-register__label"
          for="password"
      >
        Password
      </label>
      <Field
          class="page-register__input"
          type="password"
          id="password"
          name="password"
      />
      <ErrorMessage
          name="password"
          class="page-register__span"
      />

      <button-unit
          class="page-register__button"
          :disabled="loading"
          type="submit"
          color="purple"
          :to="{ name: 'Login'}"
      >
        Sign Up
      </button-unit>
    </Form>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue"
import * as yup from "yup";

export default defineComponent({
  name: "Register",
  components: {
    ButtonUnit,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
          .string()
          .required("Name is required!")
          .min(8, "Must be at least 8 characters!"),
      email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
      password: yup
          .string()
          .required("Password is required!")
          .min(6, "Must be at least 6 characters!"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false;
            this.loading = false;
          }
      );
    },
  },
})
</script>

<style lang="scss">
.page-register {
  padding: 5rem;
  background: var(--color-gray-blue);
  box-shadow: var(--box-shadow-v2);

  @include media('>=600') {
    margin: 0 300rem 0 0;
    height: 100vh;
    padding: 10rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10rem;

    @include media('>=600') {
      margin: 0 auto;
      padding: 20rem;
      width: 440rem;
    }
  }

  &__heading {
    margin: 15rem;
    font-size: 13rem;
    font-weight: 400;
    text-align: center;
    color: var(--color-secondary-40);

    @include media('>=600') {
      margin: 30rem;
      font-size: 25rem;
      font-weight: 500;
    }
  }

  &__label {
    align-self: flex-start;
    margin-bottom: 5rem;
    font-size: 10rem;

    @include media('>=600') {
      margin-bottom: 10rem;
      font-size: 16rem;
    }
  }

  &__input {
    align-self: flex-start;
    width: 100%;
    height: 25rem;
    margin-bottom: 5rem;
    background: var(--color-gray-blue);
    border: 1rem solid var(--color-gray-70);
    border-radius: 5rem;

    @include media('>=600') {
      width: 400rem;
      margin-bottom: 10rem;
    }
  }

  &__span {
    margin-bottom: 15rem;
    align-self: flex-start;
    color: var(--color-alert-50);
  }

  &__button {
    margin: 10rem;
  }
}
</style>
