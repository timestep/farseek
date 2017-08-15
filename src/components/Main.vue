<template>
  <div class="pt4">
    <Search />
    <CardImage />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import Search from './Search';
import CardImage from './CardImage';

export default {
  name: 'main',
  components: {
    Search,
    CardImage,
  },
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
  data() {
    return {
      msg: 'Search for your card',
    };
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
