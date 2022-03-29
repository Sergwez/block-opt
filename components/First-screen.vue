<template>
  <div class="first-screen">
    <div class="first-screen__container">
      <div class="first-screen__left">
        <h1>Газосиликатные блоки и кирпичи оптом</h1>
        <div class=" first-screen__list">
          <div class="text-subtitle-1 first-screen__list-item">
            <v-icon color="secondary">
              {{ mdiCheck }}
            </v-icon>
            Сотрудничаем с 10-ю заводами
          </div>
          <div class="text-subtitle-1 first-screen__list-item">
            <v-icon color="secondary">
              {{ mdiCheck }}
            </v-icon>
            Собственный автопарк
          </div>
          <div class="text-subtitle-1 first-screen__list-item">
            <v-icon color="secondary">
              {{ mdiCheck }}
            </v-icon>
            Оплата по факту доставки
          </div>
        </div>
        <MainForm
          btntext="Обратный звонок"
          sendfrom="Главная страница"
        />
      </div>
      <div class="first-screen__right d-none d-lg-flex">
        <v-img
          contain
          position="center bottom"
          class="first-screen__right-img"
          :src="require(`~/assets/img/first-screen-figure.png`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mdiCheck } from '@mdi/js';
import MainForm from './MainForm.vue';

export default {
  name: 'FirstScreen',
  components: { MainForm },
  data() {
    return {
      mdiCheck,
    };
  },
};
</script>
<style lang="scss" >
.first-screen{
  &__container{
    min-height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
      z-index: 1;
      @media(min-width: $md){
        text-align: left;
        font-size: 56px;
      }
    }
  }
  &__list{
    margin-bottom: 16px;
    &-item{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 4px;
    }
  }
  &__block{
    flex-grow: 1;
  }
  &__brick{
    flex-grow: 1;
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
  &__price{
    font-family: 'Oswald';
    background-image: url(~assets/img/price.svg);
    background-size: cover;
    font-size: 51px;
    position: absolute;
    top: 247px;
    left: 0;
    color: #fff;
  }

}
</style>
