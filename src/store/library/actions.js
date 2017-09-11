export default {
  addCard({ commit, rootState }) {
    commit('addCard', rootState.cardSearch.card);
  },
};
