<template>
  <div>
    <AdminHeader>
      <template #title>
        {{ titlePage }}
      </template>
    </AdminHeader>
    <div class="mx-2">
      <div v-if="query==='products'">
        <ProductsAdmin />
      </div>
      <div v-if="query==='categories' || query==='vendors' || query==='targets'">
        <DocsAdmin />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import DocsAdmin from '~/components/admin/DocsAdmin.vue';
import AdminHeader from '~/components/admin/AdminHeader.vue';
import ProductsAdmin from '~/components/admin/ProductsAdmin.vue';

export default {
  components: {
    ProductsAdmin, AdminHeader, DocsAdmin,
  },

  data() {
    return {
      group: null,
    };
  },
  computed: {
    query() {
      return this.$route.query.docs;
    },
    titlePage() {
      switch (this.query) {
        case 'products':
          return 'Товары';
        case 'categories':
          return 'Категории';
        case 'targets':
          return 'Тип товара';
        case 'vendors':
          return 'Производители';
        default:
          return 'Товары';
      }
    },
  },
  mounted() {
    this.$fire.firestoreReady();
    if (!this.$route.query.docs) {
      this.$router.push({ path: 'admin', query: { docs: 'products' } });
    }
    this.getProducts();
    this.getVendors();
    this.getCategories();
    this.getTargets();
  },
  methods: {
    ...mapActions({
      getProducts: 'products/getProducts',
      getVendors: 'vendors/getVendors',
      getCategories: 'categories/getCategories',
      getTargets: 'targets/getTargets',
    }),
  },
};
</script>
