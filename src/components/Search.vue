<template>
  <div class="mb4">
    <input
      ref="input"
      id="input"
      v-on:input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
import debounce from 'debounce';

export default {
  name: 'search',
  methods: {
    updateValue: debounce(function updateValue(value) {
      this.$emit('searchTerm', value.trim());
    }, 300),
  },
};
</script>

<style scoped>
#input {
    outline:none;
    color:white;
    border:none;
    background-image:none;
    background-color:grey;
    opacity: 0.5;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
}
#input:hover {
    opacity: 0.75;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
}
#input:focus {
    opacity: 1;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
}
</style>