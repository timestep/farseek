import API from '../../common/api';

export default {
  async onImageSearch({ commit, state }, $event) {
    const inputKey = $event.key;
    if (inputKey === 'Backspace') {
      commit('searchClear');
    } else {
      commit('searchUpdate', inputKey);
      const searchTerm = state.searchTerm;
      const res = await API.getCardSearch(searchTerm);
      commit('selectCard', res);
    }
  },
};
