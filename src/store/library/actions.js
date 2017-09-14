export default {
  addCard({ commit, rootState }) {
    commit('addCard', rootState.preview.card);
  },
};
