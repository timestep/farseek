/* eslint no-param-reassign: 0, */
import { clone } from 'ramda';

export default {
  addCard(state, card) {
    const index = state.cards.findIndex(filteredCard => filteredCard.id === card.id);
    if (index > -1) {
      const newCards = clone(state.cards);
      newCards[index].quantity++;
      state.cards = newCards;
    } else {
      card.quantity = 1;
      state.cards = state.cards.concat(card);
    }
  },
  removeCard(state, card) {
    const index = state.cards.findIndex(filteredCard => filteredCard.id === card.id);
    const newCards = clone(state.cards);
    if (newCards[index].quantity === 1) {
      newCards.splice(index, 1);
    } else {
      newCards[index].quantity--;
    }
    state.cards = newCards;
  },
};
