<template>
  <div class="pt4">
    <h1 class="ma0 mb4">{{ msg }}</h1>
    <Search @searchTerm="onSearch"/>
    <CardImage />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Search from './Search';
import CardImage from './CardImage';

export default {
  name: 'main',
  components: {
    Search,
    CardImage,
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
