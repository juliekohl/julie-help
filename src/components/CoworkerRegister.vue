<template>
  <h1 class="heading">Register Coworker</h1>
  <form class="form">
    <input class="form__first-name" type="text" placeholder="coworker first name">
    <input class="form__last-name" type="text" placeholder="coworker last name">
    <input class="form__email" type="email" placeholder="coworker email">
    <input class="form__user-name" type="text" placeholder="coworker user name">
    <input class="form__address" type="text" placeholder="coworker address">
    <input class="form__phone" type="number" placeholder="coworker phone">
    <input class="form__company" type="text" placeholder="coworker company">
    <input class="form__gender" type="text" placeholder="coworker gender">
    <input class="form__password" type="password" placeholder="coworker password">
    <input class="form__confirm-password" type="password" placeholder="coworker confirm password">
    <button class="form__btn">to enter</button>
  </form>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
  text-align: center;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
input {
  margin: 5px;
}
.form__btn {
  margin: 10px;
}
</style>
