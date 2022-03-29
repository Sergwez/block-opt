export const actions = {
  async getTargets(ctx) {
    ctx.commit('updateTargets', await this.$Collection('targets').getDocs());
  },
  async getTargetsSnapshot(ctx) {
    const res = await fetch(`${process.env.baseUrl}/snapshots/targets.json`);
    const feed = await res.json();
    ctx.commit('updateTargets', feed);
  },
};

export const mutations = {
  updateTargets(state, targets) {
    state.targets = targets;
  },
};

export const getters = {
  allTargets(state) {
    return state.targets;
  },
  targetNames(state) {
    const arr = [];
    state.targets.forEach((elem) => arr.push(elem.name));
    return arr;
  },
  name: (state) => (id) => {
    const target = state.targets.find((elem) => elem.id === id);
    return target;
  },
};

export const state = () => ({
  targets: [],
});
