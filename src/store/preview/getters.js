import { path } from 'ramda';

export default {
  selectedCardImage: state => path(['card', 'image_uris', 'png'], state),
  card: state => state.card,
};
