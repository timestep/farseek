import API from '../../common/api';

export default {
  onImageSearch({ commit, state }, inputKey) {
    commit('searchUpdate', inputKey);
    const searchTerm = state.searchTerm;
    API.getCardSearch(searchTerm)
      .then(res => res.image_uris)
      .then(images => images.png)
      .then(image => commit('imageSearchComplete', image));
  },
};
