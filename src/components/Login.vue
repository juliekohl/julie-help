<template>
  <form class="form">
    <h2 class="form__heading">Login</h2>
    <div class="form__box">
        <div class="form-input__box">
          <label class="form__label" for="email">User Email</label>
          <input class="form__input" type="email" id="email" placeholder="email" autofocus>
        </div>
      <div class="form-input__box">
        <label class="form__label" for="password">Password</label>
        <input class="form__input" type="password" id="password" placeholder="password">
      </div>
      <div class="form-input__box">
        <button class="form__button">Sing In</button>
      </div>
    </div>
      <p class="form__paragraph">Forget Password? <a class="form__anchor" href="#"> Click Here</a></p>
  </form>

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

<script>
// import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
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
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
}

.form {
  position: relative;
  margin: 0 auto;
  width: 350px;
  padding: 40px 40px 60px;
  background: black;
  border-radius: 10px;
  text-align: center;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05), 5px 5px 15px rgba(0, 0, 0, 0.5);
}
.form__heading {
  color: #c7c7c7;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
}
.form__box {
  text-align: left;
  margin-top: 40px;
}
.form-input__box {
  margin-top: 20px;
}
.form__label {
  display: block;
  color: #868696;
  margin-bottom: 5px;
  font-size: 18px;
}
.form__input {
  padding: 5px 15px;
  width: 100%;
  height: 50px;
  background: #131419;
  border: none;
  border-radius: 40px;
  color: #fff;
  font-size: 18px;
  color: #03a9f4;
  outline: none;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.form__input [type='submit'] {
  margin-top: 20px;
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.form__input [type='submit']:active {
  margin-top: 20px;
  color: #006c9c;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
}
.form__input ::placeholder {
  color: #555;
  font-size: 18px;
}
.form__input-required {
  color: #ff0047;
}
.form__button {
  padding: 5px 15px;
  width: 100%;
  height: 60px;
  background: #131419;
  border: none;
  border-radius: 40px;
  color: #fff;
  font-size: 18px;
  color: #03a9f4;
  outline: none;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8);
  cursor: pointer;
}
.form__paragraph {
  margin-top: 30px;
  color: #555;
}
a {
  color: #08833b;
}
</style>