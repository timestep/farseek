import { BASIC_LANDS } from '../../common/utils';

const isSameCard = card => filteredCard => filteredCard.id === card.id;
const isBasicLandCard = card => BASIC_LANDS.includes(card.name);
const libraryCardIndexFunc = library => card =>
  library.findIndex(isSameCard(card));
const libraryContainsCardFunc = library => card =>
  libraryCardIndexFunc(library)(card) > -1;

export {
  isSameCard,
  isBasicLandCard,
  libraryCardIndexFunc,
  libraryContainsCardFunc,
};
