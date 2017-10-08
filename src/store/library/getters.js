import { buildManaData, buildCMCData } from './utils';

export default {
  cards: state => state.cards,
  manaChartData: state => buildManaData(state.cards),
  cmcData: state => buildCMCData(state.cards),
};
