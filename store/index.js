export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('products/getProductsSnapshot');
    await dispatch('categories/getCategoriesSnapshot');
    await dispatch('targets/getTargetsSnapshot');
    await dispatch('vendors/getVendorsSnapshot');
  },
};
