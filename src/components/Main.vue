<template>
  <div class="pt4">
    <h1 class="ma0 mb4">{{ msg }}</h1>
    <Search @searchTerm="onSearch"/>
    <CardImage :imageURI="imageURI"/>
  </div>
</template>

<script>
import Search from './Search';
import CardImage from './CardImage';
import API from '../common/api';

export default {
  name: 'main',
  components: {
    Search,
    CardImage,
  },
  data() {
    return {
      msg: 'Search for your card',
      imageURI: null,
    };
  },
  methods: {
    onSearch: function onSearch($event) {
      const that = this;
      API.getCardSearch($event)
        .then(res => res.image_uris)
        .then((images) => {
          if (!images) return;
          that.imageURI = images.png;
        });
    },
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
