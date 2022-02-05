<template>
  <div class="page-login">
    <Form
        class="page-login__form"
        @submit="handleLogin"
        :validation-schema="schema"
    >
      <h1 class="page-login__heading">Welcome to Julie.help!</h1>

      <label
          class="page-login__label"
          for="email"
      >
        Email
      </label>
      <Field
          class="page-login__input"
          type="email"
          id="email"
          name="email"
      />
      <ErrorMessage
          class="page-login__span"
          name="email"
      />
      <label
          class="page-login__label"
          for="password"
      >
        Password
      </label>
      <Field
          class="page-login__input"
          type="password"
          id="password"
          name="password"
      />
      <ErrorMessage
          class="page-login__span"
          name="password"
      />

      <button-unit
          class="page-login__button"
          :disabled="loading"
          type="submit"
          color="purple"
      >
        Login
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
  name: "Login",
  components: {
    ButtonUnit,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
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
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push("/");
          },
          (error) => {
            this.loading = false;
            this.message = error?.response?.data?.message
                ? error.message
                : error.toString();
          }
      );
    },
  },
})
</script>

<style lang="scss">
.page-login {
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
