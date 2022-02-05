<template>
  <div class="register">
    <Form
        v-if="!successful"
        @submit="handleRegister"
        :validation-schema="schema"
        class="register__form"
    >
      <label
          class="register__form-label"
          for="name"
      >
        name
      </label>
      <Field
          class="register__form-input"
          name="name"
          type="text"
      />
      <ErrorMessage
          class="register__form-error"
          name="name"
      />
      <label
          class="register__form-label"
          for="email"
      >
        Email
      </label>
      <Field
          class="register__form-input"
          name="email"
          type="email"
      />
      <ErrorMessage
          class="register__form-error"
          name="email"
      />
      <label
          class="register__form-label"
          for="password"
      >
        Password
      </label>
      <Field
          class="register__form-input"
          name="password"
          type="password"
      />
      <ErrorMessage
          name="password"
          class="register__form-error"
      />

      <div class="register__form-group">
        <button
            class="register__form-btn  register__form-btn-block"
            :disabled="loading"
        >
          <span
              v-show="loading"
              class="register__form-spn-border register__form-spn-border-sm"
          ></span>
          Sign Up
        </button>
        <div
            v-if="message"
            class="register__form-alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
            role="alert"
        >
          {{ message }}
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
          .string()
          .required("name is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
      password: yup
          .string()
          .required("Password is required!")
          .min(6, "Must be at least 6 characters!")
          .max(40, "Must be maximum 40 characters!"),
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
      this.$router.push("/profile");
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

<style scoped>
.register {
  margin: 30px;
  padding: 10px;
}
.register__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.register__form-label {
  margin: 10px;
  font-size: 20px;
}
.register__form-input {}
.register__form-error {
  margin: 10px;
  color: red;
}
.register__form-group {}
.register__form-btn {
  align-self: center;
  width: 200px;
  margin: 15px;
  font-size: 20px;
}
.register__form-btn-block {}
.register__form-spn-border {}
.register__form-spn-border-sm {}
.register__form-alert {
  color: red;
}
</style>