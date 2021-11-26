<template>
  <div class="login">
    <form class="login__form">
      <h2 class="login__form-heading">Login</h2>
      <div class="login__form-box">
          <div class="login__form-text">
            <label class="login__form-text-label" for="email">User Email</label>
            <input class="login__form-text-input" type="email" id="email" placeholder="email" autofocus>
          </div>
        <div class="login__form-text">
          <label class="login__form-text-label" for="password">Password</label>
          <input class="login__form-text-input" type="password" id="password" placeholder="password">
        </div>
        <div class="login__form-text">
          <button class="login__form-text-button">Sign In</button>
        </div>
      </div>
        <p class="login__form-paragraph">Forget Password? <a class="login__form-paragraph-anchor" href="#"> Click Here</a></p>
    </form>
  </div>

<!--  <div>-->
<!--    <h2>VeeValidate Form</h2>-->
<!--    <ValidationObserver v-slot=" { handleSubmit }">-->
<!--      <form @submit.prevent="handleSubmit(onSubmit)">-->
<!--        <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">-->
<!--          <div class="form-input__box">-->
<!--            <label class="form__label">User Email</label>-->
<!--            <input class="form__input" type="email" v-model="formData.email" placeholder="email" autofocus>-->
<!--            <span>{{ errors[0] }}}</span>-->
<!--          </div>-->
<!--        </ValidationProvider>-->
<!--        <ValidationProvider name="Password" rules="required|max:12|min:6" v-slot="{ errors }">-->
<!--          <div class="form-input__box">-->
<!--            <label class="form__label">User Password</label>-->
<!--            <input class="form__input" type="password" v-model="formData.password" placeholder="email">-->
<!--            <span>{{ errors[0] }}}</span>-->
<!--          </div>-->
<!--        </ValidationProvider>-->
<!--        <button class="form__button">Sing In</button>-->
<!--      </form>-->
<!--    </ValidationObserver>-->
<!--  </div>-->
</template>

<script lang="ts">
// import { ValidationObserver, ValidationProvider } from 'vee-validate';
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Login',
  // components: {
  //   ValidationObserver,
  //   ValidationProvider
  // },
  // data: () => ({
  //   formData: {
  //     email: '',
  //     password: ''
  //   }
  // }),
  // methods: {
  //   onSubmit() {
  //     console.log('Foi!', this.formData);
  //   }
  // }
})
</script>

<style lang="scss">
.login {

  &__form {
    position: relative;
    margin: 0 auto;
    width: 350rem;
    padding: 40rem 40rem 60rem;
    background: black;
    border-radius: 10rem;
    text-align: center;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05), 5px 5px 15px rgba(0, 0, 0, 0.5);

    &-heading {
      color: #c7c7c7;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 4rem;
    }
    &-box {
      text-align: left;
      margin-top: 40rem;
    }
    &-text {
      margin-top: 20rem;

      &-label {
        display: block;
        color: #868696;
        margin-bottom: 5rem;
        font-size: 18rem;
      }
      &-button {
        padding: 5rem 15rem;
        width: 100%;
        height: 60rem;
        background: #131419;
        border: none;
        border-radius: 40rem;
        font-size: 18rem;
        color: #03a9f4;
        outline: none;
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
        cursor: pointer;
      }
    }
    &-paragraph {
      margin-top: 30rem;
      color: #555;

      &-anchor {
        color: #08833b;
      }
    }
  }
}

.login__form-text-input {
  padding: 5rem 15rem;
  width: 100%;
  height: 50rem;
  background: #131419;
  border: none;
  border-radius: 40rem;
  font-size: 18rem;
  color: #03a9f4;
  outline: none;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.login__form-text-input [type='submit'] {
  margin-top: 20rem;
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.login__form-text-input [type='submit']:active {
  margin-top: 20rem;
  color: #006c9c;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.login__form-text-input::placeholder {
  color: #555;
  font-size: 18rem;
}
.login__form-text-input-required {
  color: #ff0047;
}
</style>
