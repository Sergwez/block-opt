//отключен
<template>
  <div class="faq">
    <h2 class="faq__title">
      Часто задаваемые вопросы
    </h2>
    <v-expansion-panels
      v-model="panel"
      flat
      active-class="faq__panel--active"
      multiple
    >
      <v-expansion-panel
        v-for=" item in 5"
        :key="item"
        class="faq__panel"
      >
        <v-expansion-panel-header
          v-slot="{ open }"
          class="faq__subtitle"
        >
          Есть ли минимальная партия отгрузки?
          <v-fade-transition hide-on-leave>
            <v-icon
              v-if="!open"
              key="0"
              class="justify-end"
              large
              color="primary"
            >
              {{ mdiPlus }}
            </v-icon>
            <v-icon
              v-else
              key="1"
              class="justify-end"
              large
              color="primary"
            >
              {{ mdiMinus }}
            </v-icon>
          </v-fade-transition>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Да, мы работаем только от 30 кубов.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mdiPlus, mdiMinus } from '@mdi/js';

export default {
  name: 'Faq',
  data() {
    return {
      panel: [],
      mdiPlus,
      mdiMinus,
      // faq:[
      //   {
      //     id:'',
      //     question: '',
      //     answer: ''
      //   },
      // ]
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" >
.faq{
  &__title{
    font-family: Oswald, sans-serif;
    font-size: 56px;
    line-height: 1;
    margin: 60px 0 30px 0;
    text-align: center;
  }
  &__panel{
    border-bottom: 1px solid #e4e4e4;
    // &--active{
    //   border: 0px;
    // }
  }
  &__subtitle{
    font-size: 26px;
  }

}
</style>
