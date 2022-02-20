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

      <span class="page-login__span">
        {{ message }}
      </span>

      <button-unit
          class="page-login__button"
          :disabled="loading"
          type="submit"
          color="purple"
      >
        Login
      </button-unit>

      <button-unit
          class="page-login__button"
          :disabled="loading"
          type="button"
          color="gray"
          :to="{ name: 'Register' }"
      >
        Create new account
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
      this.$router.push({ name: 'Dashboard' });
    } else {
      this.$router.push({ name: 'Login' });
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push({ name: 'Dashboard' });
          },
          () => {
            this.loading = false;
            this.message = 'Authentication failed. Try again.';
          }
      );
    },
  },
})
</script>

<style lang="scss">
.page-login {
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
    margin: 30rem;
    font-weight: 600;
    text-align: center;
    color: var(--color-secondary-40);
  }

  &__label {
    align-self: flex-start;
    margin-bottom: 10rem;
  }

  &__input {
    align-self: flex-start;
    width: 100%;
    margin-bottom: 10rem;
    background: var(--color-gray-blue);
    border: 1rem solid var(--color-gray-70);
    border-radius: 5rem;

    @include media('>=600') {
      width: 400rem;
      margin-bottom: 10rem;
    }
  }

  &__span {
    margin-bottom: 20rem;
    align-self: flex-start;
    color: var(--color-alert-50);
  }

  &__button {
    width: 100%;
    margin-bottom: 20rem;
  }
}
</style>
