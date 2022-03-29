<template>
  <div class="other-products">
    <h2 class="other-products__title">
      Другие товары
    </h2>
    <v-card
      class="other-products__card"
      outlined
    >
      <div>
        <div class="other-products__text">
          Основной специалиализацией компании является
          продажа газосиликатных блоков.
          Мы сотрудничаем со многими заводами,
          которые реализуют не только блоки,
          но и другие строительные товары,
          поэтому вы так же можете оставить
          запрос на следующие позиции:
        </div>
        <ul class="other-products__items">
          <li>Рабочие кирпичи</li>
          <li>Сухие смеси</li>
        </ul>
        <Callback
          sendfrom="Сухие смеси и кирпичи"
        >
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
      <v-img
        class="other-products__img"
        lazy-src="https://st34.stpulscen.ru/images/product/129/731/120_big.jpg"
        max-height="600"
        max-width="800"
        src="https://st34.stpulscen.ru/images/product/129/731/120_big.jpg"
      />
    </v-card>
  </div>
</template>

<script>
import Callback from '~/components/popups/Callback.vue';

export default {
  name: 'OtherProducts',
  components: { Callback },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
.other-products{
  &__title{
    font-family: Oswald, sans-serif;
    font-size: 36px;
    line-height: 1;
    margin: 60px 0 20px 0;
    text-align: center;
    @media (min-width: $md){
      margin: 60px 0 30px 0;
    }
    @media (min-width: $lg){
      font-size: 56px;
    }
  }
  &__card{
    padding: 16px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    @media (min-width: $md){
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__text{
    font-size: 18px;
    text-align: center;
    @media (min-width: $md){
      text-align: left;
      font-size: 24px;
    }
  }
  &__items{
    margin-top: 30px;
    margin-left: 20px;
    margin-bottom: 30px;
    font-family: Oswald, sans-serif;
    font-size: 26px;
  }
  &__img{
    display: none;
      @media (min-width: $md){
        display: block;
        width: 400px;
        height: 300px;
      }
      @media (min-width: $xl){
        width: 800px;
        height: 600px;
      }

  }
}
</style>
