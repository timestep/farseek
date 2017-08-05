<template>
  <div class="w-100">
    <img
      class="w-30-l w-100-s w-50-m h-auto"
      :src="imageURI"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CardImage',
  computed: {
    ...mapGetters({
      imageURI: 'searchedCardImage',
    }),
  },
};
</script>