import { map, reduce, flatten, pipe, keys, values } from 'ramda';
import { BASIC_LANDS } from '../../common/utils';

const isSameCard = card => filteredCard => filteredCard.id === card.id;

const isBasicLandCard = card => BASIC_LANDS.includes(card.name);

const libraryCardIndexFunc = library => card =>
  library.findIndex(isSameCard(card));

const libraryContainsCardFunc = library => card =>
  libraryCardIndexFunc(library)(card) > -1;

const manaAcc = (obj, mana) => {
  const newObj = obj;
  if (isNaN(mana)) {
    newObj[mana]++;
  } else {
    newObj.C = parseInt(mana, 10);
  }
  return newObj;
};

const cmcAcc = (obj, cmc) => ({
  [cmc]: obj[cmc] + 1,
  ...obj,
});

const buildDataSet = obj => ({
  datasets: [{ data: values(obj) }],
  labels: keys(obj),
});

const buildManaData = cards =>
  pipe(
    map(card => card.mana_cost),
    map(manaCost =>
      manaCost
        .slice(1, -1)
        .split('}{')
        .reverse(),
    ),
    flatten,
    reduce(manaAcc, {}),
    buildDataSet,
  )(cards);

const buildCMCData = cards =>
  pipe(map(card => card.cmc), reduce(cmcAcc, {}), buildDataSet)(cards);

export default {
  isSameCard,
  isBasicLandCard,
  libraryCardIndexFunc,
  libraryContainsCardFunc,
  buildManaData,
  buildCMCData,
};
