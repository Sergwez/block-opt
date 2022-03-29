<template>
  <v-dialog
    v-model="showForm"
    width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        class="secondary"
        v-bind="attrs"
        tile
        depressed
        v-on="on"
      >
        <slot name="btntext" />
      </v-btn>
    </template>
    <v-card class="px-5 pt-2 pb-5 d-flex flex-column">
      <v-btn
        icon
        class="mb-5 align-self-end"
        @click="showForm = false"
      >
        <v-icon>{{ mdiClose }}</v-icon>
      </v-btn>
      <div class="text-h5 text-center mb-4">
        <slot name="title" />
      </div>
      <MainForm
        btntext="Обратный звонок"
        :sendfrom="sendfrom ? sendfrom : ''"
        @show-form="showForm = $event"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiClose } from '@mdi/js';
import MainForm from '~/components/MainForm.vue';

export default {
  name: 'Callback',
  components: { MainForm },
  props: {
    sendfrom: String,
  },
  data() {
    return {
      mdiClose,
      showForm: false,
    };
  },
};
</script>
<style lang="scss" >
.vendors{
  &__container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__group{
    min-width: 100%;
    .v-slide-group__content{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &__slide{
    width:25%;
    margin-right: 10px;
  }
}
</style>
