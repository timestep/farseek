<template>
  <div class="search">
      <input id="input" />
  </div>
</template>

<script>
export default {
  name: 'search',
};
</script>

<style scoped>
.class {

}
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