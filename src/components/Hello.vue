<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Search />
  </div>
</template>

<script>
import Search from './Search';

export default {
  name: 'hello',
  components: {
    Search,
  },
  data() {
    return {
      msg: 'Search for your card',
    };
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
