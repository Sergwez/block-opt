<template>
  <div>
    <AddNewProduct>
      <template #title>
        Новый товар
      </template>
      <template #btntext>
        <v-icon>{{ mdiPlus }}</v-icon> Новый товар
      </template>
    </AddNewProduct>
    <v-data-table
      v-if="products"
      :headers="headers"
      :items="products"
      :sort-by="'id'"
      :sort-desc="true"
      :footer-props="{
        prevIcon: mdiChevronLeft,
        nextIcon: mdiChevronRight,
        itemsPerPageText: 'Товаров на страницу:'
      }"
    >
      <template #[`item.url`]="item">
        <v-img
          class="mt-3 mb-3"
          :lazy-src="item.item.url"
          contain
          max-height="50"
          max-width="75"
          :src="item.item.url"
        />
      </template>
      <template #[`item.action`]="item">
        <EditProduct :products="[...item.item]">
          <template #title>
            Редактировать товар
          </template>
          <template #btntext>
            <v-icon>{{ mdiPencil }}</v-icon>
          </template>
        </EditProduct>
        <DeleteProduct :products="[...item.item]">
          <template #title>
            Удалить товар?
          </template>
          <template #btntext>
            <v-icon>{{ mdiDelete }}</v-icon>
          </template>
        </DeleteProduct>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {
  mdiPlus, mdiPencil, mdiDelete, mdiChevronLeft, mdiChevronRight,
} from '@mdi/js';

import AddNewProduct from '~/components/admin/AddNewProduct.vue';
import EditProduct from '~/components/admin/EditProducts.vue';
import DeleteProduct from '~/components/admin/DeleteProduct.vue';

export default {
  components: {
    EditProduct,
    DeleteProduct,
    AddNewProduct,
  },
  data() {
    return {
      mdiChevronLeft,
      mdiChevronRight,
      mdiPlus,
      mdiDelete,
      mdiPencil,
      product: {},
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Производитель', value: 'vendor' },
        { text: 'Изображение', value: 'url' },
        { text: 'Категория', value: 'category' },
        { text: 'Тип продукта', value: 'target' },
        { text: 'Плотность', value: 'density' },
        { text: 'Размер', value: 'size' },
        { text: 'Цена', value: 'price' },
        { text: 'Изменить', value: 'action' },
      ],
    };
  },
  computed: {
    products() {
      const products = [];
      if (this.$store.getters['products/allProducts'].length) {
        this.$store.getters['products/allProducts'].forEach((elem) => {
          const obj = {};
          Object.assign(obj, elem);
          if (this.$store.getters['vendors/allVendors'] && this.$store.getters['vendors/allVendors'].length !== 0) {
            obj.vendor = this.$store.getters['vendors/allVendors'].filter((vendor) => vendor.id === elem.vendor)[0].name;
          }
          if (this.$store.getters['categories/allCategories'].length !== 0) {
            obj.category = this.$store.getters['categories/allCategories'].filter((category) => category.id === elem.category)[0].name;
          }
          if (this.$store.getters['targets/allTargets'] && this.$store.getters['targets/allTargets'].length !== 0) {
            obj.target = this.$store.getters['targets/allTargets'].filter((target) => target.id === elem.target)[0].name;
          }
          products.push(obj);
        });
      }
      return products;
    },
  },
};

</script>
