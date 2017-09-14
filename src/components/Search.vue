<template>
  <div class="white">
    <div class="f1 mb4">Card Search</div>
    <div class="f2 mb4">
      {{searchQuery}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'search',
  mounted() {
    const vm = this;
    document.addEventListener('keydown', ($event) => {
      if ($event.key === 'Backspace') {
        vm.searchClear();
      } else {
        vm.onSearch($event.key);
      }
    });
  },
  computed: {
    ...mapGetters([
      'searchQuery',
    ]),
  },
  methods: {
    ...mapActions({
      onSearch: 'onImageSearch',
    }),
    ...mapMutations({
      searchClear: 'searchClear',
    }),
  },
};
</script>

<style scoped>
.overLaySearch {
  color: white;
}
</style>
