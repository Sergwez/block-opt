export const actions = {
  async onAuthStateChangedAction({ commit }, authUser) {
    if (!authUser) {
      commit('resetUser');
      return;
    }
    commit('setAuthUser', authUser);
  },
};

export const mutations = {
  setAuthUser(state, authUser) {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
      hideLoader: true,
    };
  },
  resetUser(state) {
    state.authUser = {
      uid: undefined,
      email: undefined,
      hideLoader: true,
    };
  },
};

export const getters = {
  isLoggedIn(state) {
    try {
      return state.authUser.uid !== undefined;
    } catch {
      return false;
    }
  },
  activeUser(state) {
    return state.authUser;
  },
  hideLoader(state) {
    return state.authUser.hideLoader;
  },
};

export const state = () => ({
  authUser: {},
});
