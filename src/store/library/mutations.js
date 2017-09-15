/* eslint no-param-reassign: 0, */
import { clone } from 'ramda';
import { libraryCardIndexFunc } from './utils';

export default {
  addCard(state, card) {
    card.quantity = 1;
    state.cards = state.cards.concat(card);
  },
  setQuantity(state, { card, newQuantity }) {
    const cardIndex = libraryCardIndexFunc(state.cards)(card);
    const newCards = clone(state.cards);
    newCards[cardIndex].quantity = newQuantity;
    state.cards = newCards;
  },
  deleteCard(state, card) {
    const cardIndex = libraryCardIndexFunc(state.cards)(card);
    const newCards = clone(state.cards);
    newCards.splice(cardIndex, 1);
    state.cards = newCards;
  },
  clearLibrary(state) {
    state.cards = [];
  },
};
