/* eslint no-param-reassign: 0, */
export default {
  searchUpdate(state, newSearchTerm) {
    state.searchTerm = state.searchTerm.concat(newSearchTerm);
  },
  searchClear(state) {
    state.searchTerm = '';
  },
};
