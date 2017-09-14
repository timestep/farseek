import API from '../../common/api';

const inputKeyMapStoreGen = ({ commit, state }) => ({
  Backspace: () => {
    commit('searchClear');
  },
  Default: async (inputKey) => {
    commit('searchUpdate', inputKey);
    const searchTerm = state.searchTerm;
    const res = await API.getCardSearch(searchTerm);
    commit('selectCard', res);
  },
});


export default {
  async onImageSearch(store, $event) {
    const inputKeyMap = inputKeyMapStoreGen(store);
    if (inputKeyMap[$event.key]) {
      inputKeyMap[$event.key]();
    } else {
      inputKeyMap.Default($event.key);
    }
  },
};
