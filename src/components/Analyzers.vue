<template>
  <pie-chart :data="manaPie"></pie-chart>
</template>

<script>
import { mapGetters } from 'vuex';
import PieChart from './PieChart';

export default {
  name: 'main',
  components: {
    PieChart,
  },
  computed: {
    ...mapGetters({
      cards: 'cards',
      manaPie: 'pieChartData',
    }),
  },
};
</script>