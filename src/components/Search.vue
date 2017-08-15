<template>
  <div class="f1 b mb4 white">
    {{searchQuery}}
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
