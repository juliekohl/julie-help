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
          <button class="login__form-text-button">Sing In</button>
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

export default defineComponent( {
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
    width: 350px;
    padding: 40px 40px 60px;
    background: black;
    border-radius: 10px;
    text-align: center;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05), 5px 5px 15px rgba(0, 0, 0, 0.5);

    &-heading {
      color: #c7c7c7;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 4px;
    }
    &-box {
      text-align: left;
      margin-top: 40px;
    }
    &-text {
      margin-top: 20px;

      &-label {
        display: block;
        color: #868696;
        margin-bottom: 5px;
        font-size: 18px;
      }
      &-button {
        padding: 5px 15px;
        width: 100%;
        height: 60px;
        background: #131419;
        border: none;
        border-radius: 40px;
        font-size: 18px;
        color: #03a9f4;
        outline: none;
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
        cursor: pointer;
      }
    }
    &-paragraph {
      margin-top: 30px;
      color: #555;

      &-anchor {
        color: #08833b;
      }
    }
  }
}

.login__form-text-input {
  padding: 5px 15px;
  width: 100%;
  height: 50px;
  background: #131419;
  border: none;
  border-radius: 40px;
  font-size: 18px;
  color: #03a9f4;
  outline: none;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.login__form-text-input [type='submit'] {
  margin-top: 20px;
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.login__form-text-input [type='submit']:active {
  margin-top: 20px;
  color: #006c9c;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.login__form-text-input::placeholder {
  color: #555;
  font-size: 18px;
}
.login__form-text-input-required {
  color: #ff0047;
}
</style>