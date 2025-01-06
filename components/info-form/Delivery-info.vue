<template>
  <div class="delivery-info">
    <div class="delivery-info__container container">
      <div class="delivery-info__left">
        <h1>Срочный вопрос?</h1>
        <div class="text-subtitle-1 mb-1">
          <v-icon color="secondary">
            {{ mdiCheck }}
          </v-icon>
          Вы можете позвонить по номеру:
          <a :href="'tel:'+ $info.phone">{{ $info.phone }}</a>
        </div>
        <div class="text-subtitle-1 mb-1">
          <v-icon color="secondary">
            {{ mdiCheck }}
          </v-icon>
          Связаться через
          <a :href="'https://wa.me/79260850007'">ватсап</a>
          или
          другие мессенджеры
        </div>
        <div class="text-subtitle-1 mb-3">
          <v-icon color="secondary">
            {{ mdiCheck }}
          </v-icon>
          Оставить заявку через форму обратной связи
        </div>
        <Callback>
          <template #title>
            Заявка на обратный звонок
          </template>
          <template
            #btntext
          >
            Оставить заявку
          </template>
        </Callback>
      </div>
      <div class="delivery-info__right d-none d-lg-flex">
        <picture class="delivery-info__right-img">
          <source
            srcset="~/assets/img/more-info-figure.png?webp"
            type="image/webp"
          >
          <source
            srcset="~/assets/img/more-info-figure.png"
            type="image/png"
          >
          <img src="~/assets/img/more-info-figure.png">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiCheck } from '@mdi/js';
import Callback from '~/components/popups/Callback.vue';

export default {
  name: 'DeliveryInfo',
  components: { Callback },
  data() {
    return {
      mdiCheck,
    };
  },
};
</script>
<style lang="scss" >
.delivery-info{
  &__container{
    min-height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 0;
    @media(min-width: $lg){
      justify-content: space-between;
    }
  }
  &__left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    @media(min-width: $lg){
      width: 30%;
      align-items: flex-start;
    }
    h1{
      font-family: Oswald, sans-serif;
      font-size: 42px;
      line-height: 1;
      margin: 60px 0 30px 0;
      text-align: center;
      @media(min-width: $md){
        text-align: left;
        font-size: 56px;
      }
    }
  }
  &__right{
    position: relative;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-image: url(~assets/img/first-screen-bg.jpg);
    background-position: -136px bottom;
    &-img{
      margin-right: -230px;
      width: 1037px;
      height: 691px;
    }
  }
}
</style>
