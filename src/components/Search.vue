<template>
  <div class="white">
    <div class="f1 mb4">Card Search</div>
    <div class="f2 mb4">
      {{searchQuery}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'search',
  computed: {
    ...mapGetters([
      'searchQuery',
    ]),
  },

};
</script>

<style scoped>
.overLaySearch {
  color: white;
}
</style>
