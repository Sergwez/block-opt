<template>
  <div class="header d-block mh-auto">
    <MobileHeader />
    <div class="container header-container d-none d-lg-flex">
      <Logo />

      <div class="pl-5 header__info">
        Режим работы:
        <span class="mt-2">
          пн-вс: 9.00 - 20.00
        </span>
      </div>
      <div class="pl-5 header__info">
        Телефон для заказа:
        <span class="mt-2">
          +7 995 449 70 07
        </span>
      </div>

      <div class="pl-5 header__btns">
        <Callback sendfrom="Шапка сайта">
          <template #title>
            Обратный звонок
          </template>
          <template #btntext>
            Обратный звонок
          </template>
        </Callback>
      </div>
    </div>
  </div>
</template>

<script>
import Callback from '~/components/popups/Callback.vue';
import Logo from '~/components/logo.vue';
import MobileHeader from '~/components/MobileHeader.vue';

export default {
  name: 'Header',
  components: { Callback, Logo, MobileHeader },
  data() {
    return {
      sendFrom: 'Обратный звонок из шапки',
    };
  },
};
</script>
<style lang="scss" >
.header{
  min-height: auto;
  &-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #bdbdbd;
  }

  &__subtitle{
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    @media (min-width: $lg) {
      font-size: 18px;
    }
  }
  &__info{
    font-size: 12px;
    line-height: 1;
    font-weight: 600;
    @media (min-width: $lg) {
      font-size: 12px;
    }
    span{
      font-size: 16px;
      font-weight: 400;
      color: $dark;

      // display: block;
    }
  }
}
</style>
