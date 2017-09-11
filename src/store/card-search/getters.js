import { path } from 'ramda';

export default {
  searchedCardImage: state => path(['card', 'image_uris', 'png'], state),
  searchQuery: state => state.searchTerm,
  card: state => state.card,
};
