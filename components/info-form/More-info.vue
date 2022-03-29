<template>
  <div class="more-info">
    <div class="more-info__container container">
      <div class="more-info__left">
        <h2>Не можете определится?</h2>
        <div class="text-subtitle-1">
          Оставьте заявку и мы поможем с выбором
        </div>
        <MainForm btntext="Заказать консультацию" />
      </div>
      <div class="more-info__right d-none d-lg-flex">
        <v-img
          contain
          position="center bottom"
          class="more-info__right-img"
          :src="require(`~/assets/img/more-info-figure.png`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MainForm from '~/components/MainForm.vue';

export default {
  name: 'MoreInfo',
  components: { MainForm },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss" >
.more-info{
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
    h2{
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
