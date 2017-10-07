<script>
import { Pie, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default Pie.extend({
  mixins: [reactiveProp],
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options);
  },
});
</script>
