export const actions = {
  async getVendors(ctx) {
    ctx.commit('updateVendors', await this.$Collection('vendors').getDocs());
  },
  async getVendorsSnapshot(ctx) {
    const res = await fetch(`${process.env.baseUrl}/snapshots/vendors.json`);
    const feed = await res.json();
    ctx.commit('updateVendors', feed);
  },
};

export const mutations = {
  updateVendors(state, vendors) {
    state.vendors = vendors;
  },
};

export const getters = {
  allVendors(state) {
    return state.vendors;
  },
  vendorNames(state) {
    const arr = [];
    state.vendors.forEach((elem) => arr.push(elem.name));
    return arr;
  },
  name: (state) => (id) => {
    const vendor = state.vendors.find((elem) => elem.id === id);
    return vendor;
  },
};

export const state = () => ({
  vendors: [],
});
