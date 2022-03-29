<template>
  <div>
    <AddNewDoc :doc-name="query">
      <template #title>
        {{ docName }}
      </template>
      <template #btntext>
        <v-icon>{{ mdiPlus }}</v-icon>{{ docName }}
      </template>
    </AddNewDoc>
    <v-data-table
      v-if="docs"
      :headers="headers"
      :items="docs"
      :sort-by="'id'"
      :sort-desc="false"
    >
      <template #[`item.action`]="item">
        <v-icon
          class="mr-2"
          @click="editItem(item)"
        >
          {{ mdiPencil }}
        </v-icon>
        <v-icon @click="deleteItem(item)">
          {{ mdiDelete }}
        </v-icon>
      </template>
    </v-data-table>
    <v-dialog
      v-model="dialogEdit"
      max-width="500px"
    >
      <v-card>
        <v-card-title class="text-h5">
          Изменить параметр:
        </v-card-title>
        <v-text-field
          v-model.trim="editedItem.name"
          class="mx-4"
          :items="editedItem"
          item-text="name"
          item-value="id"
        />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color=""
            text
            @click="dialogEdit=false"
          >
            Отмена
          </v-btn>
          <v-btn
            color="secondary"
            text
            @click="editItemConfirm()"
          >
            Подтвердить
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogDelete"
      max-width="500px"
    >
      <v-card>
        <v-card-title class="text-h5">
          Удалить параметр: "{{ editedItem.name }}"?
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color=""
            text
            @click="dialogDelete=false"
          >
            Отмена
          </v-btn>
          <v-btn
            color="secondary"
            text
            @click="deleteItemConfirm()"
          >
            Подтвердить
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mdiDelete, mdiPencil, mdiPlus } from '@mdi/js';

import { mapActions } from 'vuex';
import AddNewDoc from '~/components/admin/AddNewDoc.vue';

export default {
  components: { AddNewDoc },
  data() {
    return {
      mdiPlus,
      mdiDelete,
      mdiPencil,
      dialogEdit: false,
      dialogDelete: false,
      editedItem: {},
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Параметр', value: 'name' },
        { text: 'Изменить', value: 'action' },
      ],
    };
  },
  computed: {
    query() {
      return this.$route.query.docs;
    },
    docName() {
      if (this.query === 'categories') {
        return 'Категория';
      }
      if (this.query === 'targets') {
        return 'Тип товара';
      }
      if (this.query === 'vendors') {
        return 'Производитель';
      }
      return '';
    },
    docs() {
      if (this.query === 'categories') {
        return this.$store.getters['categories/allCategories'];
      }
      if (this.query === 'targets') {
        return this.$store.getters['targets/allTargets'];
      }
      if (this.query === 'vendors') {
        return this.$store.getters['vendors/allVendors'];
      }
      return '';
    },

  },
  methods: {
    ...mapActions({
      getCategories: 'categories/getCategories',
      getTargets: 'targets/getTargets',
      getVendors: 'vendors/getVendors',
    }),
    refreshTable() {
      if (this.query === 'categories') {
        this.getCategories();
      }
      if (this.query === 'targets') {
        this.getTargets();
      }
      if (this.query === 'vendors') {
        this.getVendors();
      }
    },
    editItem(item) {
      this.setItem(item);
      this.dialogEdit = true;
    },
    deleteItem(item) {
      this.setItem(item);
      this.dialogDelete = true;
    },
    setItem(item) {
      this.$set(this.editedItem, 'id', item.item.id);
      this.$set(this.editedItem, 'name', item.item.name);
    },
    async editItemConfirm() {
      const changeDoc = this.$Collection(this.query).updateDoc(this.editedItem);
      if (await changeDoc) {
        this.refreshTable();
        this.dialogEdit = false;
      }
    },
    async deleteItemConfirm() {
      const changeDoc = this.$Collection(this.query).deleteDoc(this.editedItem.id);
      if (await changeDoc) {
        this.refreshTable();
        this.dialogDelete = false;
      }
    },

  },
};
</script>
