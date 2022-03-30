export const actions = {
  async getCategories(ctx) {
    const categories = await this.$Collection('categories').getDocs();
    if (categories) {
      ctx.commit('updateCategories', categories);
    }
  },
  async getCategoriesSnapshot(ctx) {
    const res = await fetch(`${process.env.baseUrl}/snapshots/categories.json`);
    const feed = await res.json();
    ctx.commit('updateCategories', feed);
  },
};

export const mutations = {
  updateCategories(state, categories) {
    state.categories = categories;
  },
};

export const getters = {
  allCategories(state) {
    return state.categories;
  },
  categoryNames(state) {
    const arr = [];
    if (state.categories.length) {
      state.categories.forEach((elem) => arr.push(elem.name));
    }
    return arr;
  },
  name: (state) => (id) => {
    const category = state.categories.find((elem) => elem.id === id);
    return category;
  },
};

export const state = () => ({
  categories: [],
});
