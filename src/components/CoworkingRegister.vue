<template>
  <h1 class="heading">Register Coworking</h1>
  <form
      class="form"
  >
      <label for="name">Coworking Name</label>
      <input
          type="text"
          id="name"
          name="name"
          placeholder="Coworking name"
          v-model="coworking.name"
      />
      <button
          class="form__btn"
          type="button"
          v-on:click="submit"
      >Submit
      </button>
  </form>

  <ul>
    <li v-for="i in all" :key="i">{{ i.name }}</li>
  </ul>
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';

export default {
  name: 'RegisterCoworking',
  data () {
    return {
      coworking: {
        name: ''
      },
    }
  },
  methods: {
    submit() {
      axios.post("http://localhost:3000/coworking", this.coworking);
      location.reload();
    }
  },
  setup() {
    /**
     * Retrieve All
     */
    const all = ref({});

    fetch('http://localhost:3000/coworkings')
        .then(response => response.json())
        .then(data => all.value = data);

    /**
     * Create
     */
    // const postData = () => {
    //   axios.post("http://localhost:3000/coworking", this.coworking.name)
    // }
    // postData();
    // console.log('postData', postData());

    return {
      all,
    }
  }
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
