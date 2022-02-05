<template>
  <div class="login">
    <Form
        @submit="handleLogin"
        :validation-schema="schema"
        class="login__form"
    >
      <label
          class="login__form-label"
          for="email"
      >
        Email
      </label>
      <Field
          class="login__form-input"
          name="email"
          type="email"
      />
      <ErrorMessage
          class="login__form-error"
          name="email"
      />
      <label
          class="login__form-label"
          for="password"
      >
        Password
      </label>
      <Field
          class="login__form-input"
          name="password"
          type="password"
      />
      <ErrorMessage
          name="password"
          class="login__form-error"
      />

      <div class="login__form-group">
        <button
            class="login__form-btn  login__form-btn-block"
            :disabled="loading"
        >
          <span
              v-show="loading"
              class="login__form-spn-border login__form-spn-border-sm"
          ></span>
          <span class="login__form-spn">Login</span>
        </button>
        <div
            v-if="message"
            class="login__form-alert login__form-alert-danger"
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
  name: "Login",
  components: {
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

<style scoped>
.login {
  margin: 30px;
  padding: 10px;
}
.login__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.login__form-label {
  margin: 10px;
  font-size: 20px;
}
.login__form-input {}
.login__form-error {
  margin: 10px;
  color: red;
}
.login__form-group {}
.login__form-btn {
  align-self: center;
  width: 200px;
  margin: 15px;
  font-size: 20px;
}
.login__form-btn-block {}
.login__form-spn-border {}
.login__form-spn-border-sm {}
.login__form-spn {}
.login__form-alert {
  color: red;
}
.login__form-alert-danger {}
</style>
