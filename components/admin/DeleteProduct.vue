<template>
  <v-dialog
    v-model="showForm"
    width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        tile
        icon
        v-on="on"
        @click="setIdArr()"
      >
        <slot name="btntext" />
      </v-btn>
    </template>

    <v-card
      class="px-5 pt-2 pb-5 d-flex flex-column"
      min-width="480"
    >
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
      <v-row
        class="mt-5 mb-2"
        justify="space-around"
      >
        <v-btn
          outlined
          @click="showForm = false"
        >
          Отмена
        </v-btn>
        <v-btn
          color="error"
          outlined
          @click="deleteDoc()"
        >
          Удалить
        </v-btn>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiClose } from '@mdi/js';
import { mapActions } from 'vuex';

export default {
  name: 'AddNewProduct',
  props: {
    products: Array,
  },
  data() {
    return {
      mdiClose,
      showForm: false,
      idArr: [],
    };
  },
  methods: {
    ...mapActions({ getProducts: 'products/getProducts' }),
    async deleteDoc() {
      this.idArr.forEach(async (elem) => {
        const delDoc = this.$Collection('products').deleteDoc(elem);
        if (await delDoc) {
          this.showForm = false;
          this.getProducts();
        }
      });
    },
    setIdArr() {
      this.idArr.splice(0, this.idArr.length);
      this.products.forEach((elem) => {
        this.idArr.push(elem.id);
      });
    },
  },
};
</script>
