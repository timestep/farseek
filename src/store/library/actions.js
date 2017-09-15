import {
  libraryCardIndexFunc,
  libraryContainsCardFunc,
  isBasicLandCard,
} from './utils';

export default {
  addCard({ commit, state, rootState }) {
    const card = rootState.preview.card;
    const cardIndex = libraryCardIndexFunc(state.cards)(card);
    const cardExists = libraryContainsCardFunc(state.cards)(card);
    const cardInLibrary = state.cards[cardIndex];
    if (cardExists && isBasicLandCard(card)) {
      const newQuantity = cardInLibrary.quantity + 1;
      commit('setQuantity', { card, newQuantity });
    } else if (cardExists) {
      // card.quantity = 1;
      // max limit reached message
    } else {
      commit('addCard', card);
    }
  },
  removePreviewCard({ commit, rootState }) {
    const card = rootState.preview.card;
    commit('deleteCard', card);
  },
};
