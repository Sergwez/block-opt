export const actions = {
  async getProducts(ctx) {
    ctx.commit('updateProducts', await this.$Collection('products').getDocs());
    ctx.commit('updateLoad', true);
  },
  async getProductsSnapshot(ctx) {
    const res = await fetch(`${process.env.baseUrl}/snapshots/products.json`);
    const feed = await res.json();
    ctx.commit('updateProducts', feed);
  },
};

export const mutations = {
  updateLoad(state, load) {
    state.load = load;
  },
  updateProducts(state, products) {
    state.products = products;
    state.load = false;
  },
  categoryProducts(state, filters) {
    if (filters.categoryId) {
      state.products = state.products.filter((elem) => elem.categoryId === filters.categoryId);
    }
  },
  filterProducts(state, filters) {
    // сортировка
    switch (filters.sort) {
      case 'Сначала дороже':
        state.products = state.products.sort((a, b) => b.price * 100 - a.price * 100);
        break;
      case 'Сначала дешевле':
        state.products = state.products.sort((a, b) => a.price * 100 - b.price * 100);
        break;
      case 'По умолчанию':
        state.products = state.products.sort((a, b) => +a.id - +b.id);
        break;
      default:
        state.products = state.products.sort((a, b) => +a.id - +b.id);
    }
    // фильтр по производителю
    if (filters.vendor.length) {
      state.products = state.products.filter((elem) => filters.vendor.includes(elem.vendor));
    }
    // фильтр по типу
    if (filters.target) {
      state.products = state.products.filter((elem) => elem.target === filters.target);
    }
    // фильтр по размерам
    if (filters.size[0] || filters.size[1] || filters.size[2]) {
      filters.size.forEach((size) => {
        if (size) {
          state.products = state.products.filter((elem) => elem.size.includes(size));
        }
      });
    }
  },
};

export const getters = {

  allProducts(state) {
    return state.products;
  },
  loading(state) {
    return state.load;
  },

};

export const state = () => ({
  products: [],
  load: true,
});
