<template>
  <div class="stage">
    <h2 class="stage__title">
      Доставка и оплата
    </h2>
    <v-timeline dense>
      <v-timeline-item
        fill-dot
        color=" secondary"
        text="1"
      >
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Звонок или заявка на сайте
          </v-card-title>
          <v-card-text>
            Для начала сотрудничества достаточно
            оставить заявку на сайте, написать в мессенджер
            или позвонить по номеру телефона
            <a href="">{{ $info.phone }}</a>
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        fill-dot
        color=" secondary"
      >
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Согласование условий
          </v-card-title>
          <v-card-text>
            Менеджер согласует все моменты работы в
            том числе: дату доставки,
            общую стоимость, наличие товара.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        fill-dot
        color=" secondary"
      >
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Доставка фурой от 30 кубов
          </v-card-title>
          <v-card-text>
            Доставка автотранспортом
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        fill-dot
        color=" secondary"
      >
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Оплата по факту доставки
          </v-card-title>
          <v-card-text>
            Оплата осуществляется после получения товара.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: 'Stage',
  data() {
    return {
      model: null,
    };
  },
  methods: {

  },
};
</script>
<style lang="scss" >
.stage{

  &__title{
    font-family: Oswald, sans-serif;
    font-size: 36px;
    line-height: 1;
    margin: 40px 0 20px 0;
    text-align: center;
    @media (min-width: $lg){
      font-size: 56px;
      margin: 60px 0 30px 0;
    }
  }
}
</style>
