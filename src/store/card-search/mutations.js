/* eslint no-param-reassign: 0, */
export default {
  imageSearchComplete(state, imageSearchResult) {
    state.imageSearchResult = imageSearchResult;
  },
  searchUpdate(state, newSearchTerm) {
    state.searchTerm = state.searchTerm.concat(newSearchTerm);
  },
};
