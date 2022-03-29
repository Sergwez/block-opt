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
        @click="setProduct()"
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
        v-model="product.vendor"
        :items="$store.getters['vendors/allVendors']"
        item-text="name"
        item-value="id"
        label="Производитель"
      />

      <v-select
        v-model="product.category"
        :items="$store.getters['categories/allCategories']"
        item-text="name"
        item-value="id"
        label="Категория"
      />

      <v-select
        v-model="product.target"
        :items="$store.getters['targets/allTargets']"
        item-text="name"
        item-value="id"
        label="Тип товара"
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
        class="mt-3 mb-3"
        :lazy-src="product.url"
        contain
        max-height="150"
        max-width="250"
        :src="product.url"
      />

      <v-file-input
        :id="'image-upload-'+product.id"
        v-model="uploadImg"
        class="d-none"
        accept="image/png, image/jpeg"
        @change="uploadAsFile()"
      />
      <label :for="'image-upload-'+product.id">
        <div class="v-btn v-btn--outlined v-size--default secondary--text">
          Загрузить другое изображение
        </div>
      </label>

      <v-switch
        v-model="product.mainPage"
        label="Показывать на главной"
      />
      <v-text-field
        v-model.trim="product.price"
        class="mr-1"
        label="Цена"
      />
      <v-btn
        class="secondary"
        @click="editDoc()"
      >
        Изменить
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiClose } from '@mdi/js';
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'AddNewProduct',
  props: {
    products: Array,
  },
  data() {
    return {
      mdiClose,
      showForm: false,
      product: {},
      uploadImg: {},
    };
  },
  methods: {
    ...mapActions({ getProducts: 'products/getProducts' }),
    async editDoc() {
      const newProduct = {};
      Object.keys(this.product).forEach((key) => {
        if (key === 'category' || key === 'target' || key === 'vendor') {
          if (this.product[key].id !== undefined) {
            this.$set(newProduct, key, this.product[key].id);
          } else {
            this.$set(newProduct, key, this.product[key]);
          }
          return;
        }
        if (key === 'size' && typeof this.product.size === 'string') {
          let size = [];
          size = this.product.size.split(',')
            .map((elem) => Number(elem));
          this.$set(newProduct, 'size', size);
          return;
        }
        if (key === 'density' && typeof this.product.density === 'string') {
          let density = [];
          density = this.product.density.split(',')
            .map((elem) => elem.trim());
          this.$set(newProduct, 'density', density);
          return;
        }
        this.$set(newProduct, key, this.product[key]);
      });
      const updateProduct = this.$Collection('products').updateDoc(newProduct);
      if (await updateProduct) {
        this.showForm = false;
        this.getProducts();
      }
    },
    async uploadAsFile() {
      const context = this;
      const bodyFormData = new FormData();
      bodyFormData.append('recfile', this.uploadImg);
      if (bodyFormData.get('recfile').type.split('/')[0] === 'image') {
        axios({
          method: 'post',
          url: '/api/upload-file',
          data: bodyFormData,
          headers: { 'Content-Type': 'multipart/form-data' },
        })
          .then((res) => {
            context.$set(context.product, 'url', `/uploads/${res.data.filename}`);
          })
          .catch((res) => {
            console.log(res);
          });
      } else {
        this.uploadImg = null;
      }
    },
    setProduct() {
      this.products.forEach((doc) => {
        Object.keys(doc).forEach((key) => {
          if (key === 'target') {
            this.$set(this.product, key, {
              name: doc[key],
              id: this.$store.getters['targets/allTargets'].find((elem) => elem.name === doc[key]).id,
            });
            return;
          }
          if (key === 'category') {
            this.$set(this.product, key, {
              name: doc[key],
              id: this.$store.getters['categories/allCategories'].find((elem) => elem.name === doc[key]).id,
            });
            return;
          }
          if (key === 'vendor') {
            this.$set(this.product, key, {
              name: doc[key],
              id: this.$store.getters['vendors/allVendors'].find((elem) => elem.name === doc[key]).id,
            });
            return;
          }
          this.$set(this.product, key, doc[key]);
        });
      });
    },
  },
};
</script>
