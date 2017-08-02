<template>
  <div class="w-100">
    <img
      class="w-30-l w-100-s w-50-m h-auto"
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