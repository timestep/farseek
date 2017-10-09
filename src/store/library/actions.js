import utils from './utils';

export default {
  addCard({ commit, state, rootState }) {
    const card = rootState.preview.card;
    const cardIndex = utils.libraryCardIndexFunc(state.cards)(card);
    const cardExists = utils.libraryContainsCardFunc(state.cards)(card);
    const cardInLibrary = state.cards[cardIndex];
    if (cardExists && utils.isBasicLandCard(card)) {
      const newQuantity = parseInt(cardInLibrary.quantity, 10) + 1;
      commit('setQuantity', { card, newQuantity });
    } else {
      commit('addCard', card);
    }
  },
  removePreviewCard({ commit, rootState }) {
    const card = rootState.preview.card;
    commit('deleteCard', card);
  },
};
