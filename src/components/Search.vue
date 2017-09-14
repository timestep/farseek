<template>
  <div class="white">
    <div class="f1 mb4">Card Search</div>
    <div class="f2 mb4">
      {{searchQuery}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'search',
  mounted() {
    const vm = this;
    document.addEventListener('keydown', vm.search);
  },
  computed: {
    ...mapGetters(['searchQuery']),
  },
  methods: {
    ...mapActions({
      search: 'onImageSearch',
    }),
  },
};
</script>

<style scoped>
.overLaySearch {
  color: white;
}
</style>
