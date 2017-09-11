<template>
  <div class="w-100">
    <img
      class="h-auto"
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