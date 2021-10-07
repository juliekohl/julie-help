<template>
  <h1 class="heading">Register Coworking</h1>
    <form class="form">
        <label>Coworking Name</label>
        <input type="text" placeholder="Coworking name"/>
      <input class="form__btn" type="submit">
    </form>
</template>

<script>

export default {
  name: 'RegisterCoworking',
  data: () => ({
      name: String,
  }),
}
</script>

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
.form__btn {
  margin: 10px;
}
</style>
