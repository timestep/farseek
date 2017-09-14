import API from '../../common/api';

export default {
  async onImageSearch({ commit, state }, inputKey) {
    commit('searchUpdate', inputKey);
    const searchTerm = state.searchTerm;
    const res = await API.getCardSearch(searchTerm);
    commit('selectCard', res);
  },
};
