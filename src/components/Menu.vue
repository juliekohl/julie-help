<template class="page__menu">
  <nav class="menu">
    <h2 class="menu__heading">Julie.help!</h2>
    <Burger/>
  </nav>
  <Sidebar>
    <div class="sidebar__heading-nav">MY COWORKING</div>
    <ul class="sidebar__options-nav">
      <li class="sidebar__li"><img src="user-icon.svg"><a href="#Coworkers">Coworkers</a></li>
      <li class="sidebar__li"><img src="user-icon.svg"><a href="#Coworkers">Teams</a></li>
      <li class="sidebar__li"><img src="user-icon.svg"><a href="#Coworkers">Coworking</a></li>
    </ul>
  </Sidebar>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Burger from "@/components/menu/Burger.vue";
import Sidebar from "@/components/menu/Sidebar.vue";

export default defineComponent({
  name: 'Menu',
  components: {
    Sidebar,
    Burger
  },
  setup() {

    // computed()

    return {
      // hamburger
    }
  }
})
</script>
<style lang="scss" scoped>
.page__menu {

}
.menu {
  display: flex;
  justify-content: center;
  width: 270px;
  min-height: 100vh;
  padding: 0.5rem 0.8rem;
  border: 2px solid blue;
}
.menu__heading {
  //margin: 20px 30px 30px 0;
  padding: 25px;
  font-size: 22px;
  line-height: 27px;
  color: var(--color-secondary-40);
}
.sidebar__heading-nav {
  border: 2px solid darkviolet;
  margin: 20px;
  font-size: 14px;
  text-align: center;
  color: var(--color-gray-70);
}
.sidebar__options-nav {
 list-style-type: none;
}
.sidebar__options-nav > .sidebar__li > a {
  border: 2px solid deeppink;
  display: block;
  margin: 20px;
  font-size: 15px;
  color: var(--color-gray-90);
  line-height: 40px;
  text-decoration: none;
}
//////////////////////////////////////////////////
//.sidebar__heading-nav {
//  margin: 30px;
//  width: 140px;
//  height: 155px;
//}
//.sidebar__options-nav {
//}
//.sidebar__li > {
//}
</style>