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
};
