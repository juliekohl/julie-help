<template>
  <div class="footer">
      <span class="footer__text--one">
      COPYRIGHT @ 2021 <strong>Juliana Cochenski</strong>, All rights Reserved
    </span>
      <span class="footer__text--two">
      Hand-crafted & Made with
      <img class="footer__text--two-img" src="@/assets/img/icons/heart.svg" alt="heart">
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: 'Footer'
})
</script>
<style lang="scss">
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  font-size: 7px;
  margin: 10px 0;
  padding: 5px;

  @include media('>=1024') {
    font-size: 12px;
  }

  &__text--one {
    align-self: center;
    strong {
      color:var(--color-secondary-40);
    }
  }

  &__text--two {
    align-self: center;
    font-weight: 500;

    @include media('>=1024') {
      font-weight: 600;
    }

    &-img {
      width: 5px;
      height: 5px;

      @include media('>=1024') {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>