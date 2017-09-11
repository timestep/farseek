import API from '../../common/api';

export default {
  onImageSearch({ commit, state }, inputKey) {
    commit('searchUpdate', inputKey);
    const searchTerm = state.searchTerm;
    API.getCardSearch(searchTerm)
      .then(res => commit('card', res));
  },
};
