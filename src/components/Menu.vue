<template>
  <section class="menu">
    <h2 class="menu__heading">Julie.help!</h2>
    <div class="menu__options">MY COWORKING
      <ul class="menu__ul">
        <li class="menu__li">Coworkers</li>
        <li class="menu__li">Teams</li>
        <li class="menu__li">Coworking</li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Menu',

})
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 100%;
  border: 2px solid blue;
}
.menu__heading {
  margin: 20px 30px 30px 0;
  font-size: 22px;
  line-height: 27px;
  color: var(--color-secondary-40);
}
.menu__options {
  border: 2px solid darkviolet;
  box-sizing: border-box;
  margin: 30px;
  width: 140px;
  height: 155px;
  font-size: 14px;
  text-align: center;
  color: var(--color-gray-70);
}
.menu__ul {
  border: 2px solid green;
  box-sizing: border-box;
}
.menu__li {
  border: 2px solid deeppink;
  box-sizing: border-box;
  margin: 20px;
  font-size: 15px;
  color: var(--color-gray-90);
  line-height: 40px;
}
</style>