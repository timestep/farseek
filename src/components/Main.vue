<template>
  <div class="flex">
    <div class="w-25 mt4 ml4">
      <Search />
      <CardImage />
    </div>
    <div class="w-75 mt4">
      <Library />
    </div>
  </div>
</template>

<script>
import Search from './Search';
import CardImage from './CardImage';
import Library from './Library';

export default {
  name: 'main',
  components: {
    Search,
    CardImage,
    Library,
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
