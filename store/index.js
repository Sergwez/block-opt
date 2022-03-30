export const actions = {
  async nuxtServerInit({ dispatch }) {
    if (this.$router.currentRoute.path !== '/admin' || this.$router.currentRoute.path !== '/login') {
      await dispatch('products/getProductsSnapshot');
      await dispatch('categories/getCategoriesSnapshot');
      await dispatch('targets/getTargetsSnapshot');
      await dispatch('vendors/getVendorsSnapshot');
    }
  },
};
