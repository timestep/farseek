import API from '../../common/api';

export default {
  onImageSearch({ commit }, searchTerm) {
    API.getCardSearch(searchTerm)
      .then(res => res.image_uris)
      .then(images => images.png)
      .then(image => commit('imageSearchComplete', image));
  },
};
