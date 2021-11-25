<template>
  <div class="footer-unit">
    <span class="footer-unit__text-one">
      COPYRIGHT @ 2021 <strong>Juliana Cochenski</strong>, All rights Reserved
    </span>
    <span class="footer-unit__text-two">
      Hand-crafted & Made with
      <img class="footer-unit__text-two-img" src="@/assets/img/icons/heart.svg" alt="heart">
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'FooterUnit'
})
</script>
<style lang="scss">
.footer-unit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  font-size: 7px;
  margin: 10px 5px;
  padding: 5px;

  @include media('>=600') {
    font-size: 12px;
  }

  &__text-one {
    align-self: center;

    strong {
      color:var(--color-secondary-40);
    }
  }

  &__text-two {
    align-self: center;
    font-weight: 500;

    @include media('>=600') {
      font-weight: 600;
    }
  }

  &__text-two-img {
    width: 5px;
    height: 5px;

    @include media('>=600') {
      width: 10px;
      height: 10px;
    }
  }
}
</style>