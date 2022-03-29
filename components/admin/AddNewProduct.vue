<template>
  <v-dialog
    v-model="showForm"
    width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        class="secondary ma-4"
        v-bind="attrs"
        tile
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

      <v-select
        v-model="product.category"
        :items="$store.getters['categories/allCategories']"
        item-text="name"
        item-value="id"
        label="Категория"
      />

      <v-switch
        v-model="product.mainPage"
        label="Показывать на главной"
      />

      <v-select
        v-model="product.target"
        :items="$store.getters['targets/allTargets']"
        item-text="name"
        item-value="id"
        label="Тип товара"
      />

      <v-select
        v-model="product.vendor"
        :items="$store.getters['vendors/allVendors']"
        item-text="name"
        item-value="id"
        label="Производитель"
      />

      <v-text-field
        v-model.trim="product.size"
        class="mr-1"
        label="Размеры через запятую"
      />

      <v-text-field
        v-model.trim="product.density"
        class="mr-1"
        label="Плотность"
      />
      <v-img
        v-show="product.url"
        class="mt-3 mb-3"
        :lazy-src="product.url"
        contain
        max-height="150"
        max-width="250"
        :src="product.url"
      />
      <v-file-input
        v-model="uploadImg"
        show-size
        :prepend-icon="uploadImg && !imgLoad ? mdiCheck : mdiPaperclip"
        :loading="imgLoad"
        :success="product.url ? true: false"
        label="Изображение"
        accept="image/png, image/jpeg"
        @change="uploadAsFile()"
      />

      <v-text-field
        v-model.trim="product.price"
        class="mr-1"
        label="Цена"
        :type="'number'"
      />

      <v-btn
        class="secondary"
        :disabled="!isValid()"
        @click="addNewProduct()"
      >
        Добавить
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiClose, mdiPaperclip, mdiCheck } from '@mdi/js';
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'AddNewProduct',
  data() {
    return {
      mdiClose,
      mdiPaperclip,
      mdiCheck,
      showForm: false,
      product: {
        mainPage: false,
      },
      categories: [],
      uploadImg: {},
      imgLoad: false,
      prependIcon: 'mdi-paperclip',
    };
  },
  watch: {
    showForm() {
      this.clearForm();
      this.uploadImg = null;
      if (this.showForm === false) {
        this.deleteFile();
      }
    },
  },
  methods: {
    ...mapActions({ getProducts: 'products/getProducts' }),

    // сохранение объекта как документа в firestore
    async addNewProduct() {
      if (typeof this.product.size === 'string') {
        this.product.size = this.product.size.split(',')
          .map((elem) => Number(elem));
      }
      if (typeof this.product.density === 'string') {
        this.product.density = this.product.density.split(',')
          .map((elem) => elem.trim());
      }
      const setDoc = await this.$Collection('products').setDoc(this.product);
      if (setDoc) {
        this.clearForm();
        this.getProducts();
      }
      this.showForm = false;
    },
    clearForm() {
      Object.keys(this.product).forEach((elem) => {
        delete this.product[elem];
      });
    },

    // загрузка файла на сервер
    async uploadAsFile() {
      const context = this;
      this.deleteFile();
      if (this.uploadImg != null) {
        const bodyFormData = new FormData();

        bodyFormData.append('recfile', this.uploadImg);
        if (bodyFormData.get('recfile').type.split('/')[0] === 'image') {
          this.imgLoad = true;
          axios({
            method: 'post',
            url: '/api/upload-file',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' },
          })
            .then((res) => {
              context.imgLoad = false;
              context.$set(context.product, 'url', `/uploads/${res.data.filename}`);
            })
            .catch((res) => {
              console.log(res);
            });
        } else {
          this.uploadImg = null;
        }
      } else {
        delete this.product.url;
      }
    },
    // удаление файла с серва, если он не был отправлен в firestore
    async deleteFile() {
      const context = this;
      if (this.product.url) {
        axios({
          method: 'post',
          url: '/api/delete-file',
          data: {
            path: context.product.url,
          },
          headers: { 'Content-Type': 'application/json' },
        })
          .then(() => {
            delete context.product.url;
          })
          .catch((res) => {
            console.log(res);
          });
      }
    },
    isValid() {
      const fields = ['category', 'target', 'vendor', 'size', 'density', 'price'];
      const { product } = this;
      let valid = true;
      fields.forEach((elem) => {
        if (typeof product[elem] === 'undefined') {
          valid = false;
        }
      });
      return valid;
    },
  },
};
</script>
