import utils from './utils';

export default {
  cards: state => state.cards,
  manaChartData: state => utils.buildManaData(state.cards),
  cmcData: state => utils.buildCMCData(state.cards),
};
