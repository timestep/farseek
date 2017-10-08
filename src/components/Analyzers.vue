<template>
  <div>
    <div class='w-25 vh-20'>
      <pie-chart :data="manaPie"></pie-chart>
    </div>
    <line-chart :date="cmcChart"></line-chart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PieChart from './PieChart';
import LineChart from './LineChart';

export default {
  name: 'main',
  components: {
    PieChart,
    LineChart,
  },
  computed: {
    ...mapGetters({
      cards: 'cards',
      manaPie: 'manaChartData',
      cmcChart: 'cmcChartData',
    }),
  },
};
</script>