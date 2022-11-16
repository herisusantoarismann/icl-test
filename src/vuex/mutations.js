const mutations = {
  setToken(state, payload) {
    state.token = payload;
  },
  unsetToken(state) {
    state.token = '';
  },
};

export default mutations;
