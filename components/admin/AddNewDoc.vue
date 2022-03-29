<template>
  <v-dialog
    v-model="showForm"
    width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        class="secondary ma-4"
        v-bind="attrs"
        depressed
        v-on="on"
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
      <v-text-field
        v-model.trim="fields.name"
        class="mr-1"
        label="Введите название"
      />

      <v-btn
        class="secondary"
        :disabled="!fields.name"
        @click="addNewDoc()"
      >
        Добавить
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiClose } from '@mdi/js';
import { mapActions } from 'vuex';

export default {
  name: 'AddNewProduct',
  props: {
    docName: String,
  },
  data() {
    return {
      mdiClose,
      showForm: false,
      fields: {
        name: '',
      },
    };
  },
  methods: {
    ...mapActions({
      getCategories: 'categories/getCategories',
      getTargets: 'targets/getTargets',
      getVendors: 'vendors/getVendors',
    }),
    async addNewDoc() {
      if (this.fields.name) {
        const setDoc = this.$Collection(this.docName).setDoc(this.fields);
        if (await setDoc) {
          this.refreshTable();
          this.fields.name = '';
          this.showForm = false;
        }
      }
    },
    refreshTable() {
      if (this.docName === 'categories') {
        this.getCategories();
      }
      if (this.docName === 'targets') {
        this.getTargets();
      }
      if (this.docName === 'vendors') {
        this.getVendors();
      }
    },
  },
};
</script>
