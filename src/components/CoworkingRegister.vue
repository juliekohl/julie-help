<template>
  <h1 class="heading">Register Coworking</h1>
    <form action="http://localhost:3000/coworking" method="POST" class="form">
        <label for="name">Coworking Name</label>
        <input type="text" id="name" name="name" placeholder="Coworking name"/>
      <button class="form__btn" type="submit">Submit</button>
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
