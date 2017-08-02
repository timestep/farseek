<template>
  <div class="mw-100 mh-100">
    <img
      class="mw-100 mh-100"
      :src="imageURI"
    />
  </div>
</template>

<script>
export default {
  name: 'CardImage',
  props: ['imageURI'],
};
</script>