<template>
  <div class="flex flex-column items-center">
    <div class="f1 white">
      Library [Total # of Cards {{totalNumberofCards(cards)}}]
    </div>
    <button v-on:click="clearLibrary">Clear Library</button>
    <table class="w-100 white">
      <tr>
        <th>Quantity</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tr
        class="pointer"
        v-bind:key="index"
        v-for="(card, index) in cards"
        v-on:mouseover="selectCard(card)"
        v-on:click="removeCard(card)"
      >
        <td>{{card.quantity}}</td>
        <td>{{card.name}}</td>
        <td>USD {{card.usd}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'library',
  computed: {
    ...mapGetters({
      cards: 'cards',
    }),
  },
  methods: {
    ...mapActions({
      addCard: 'addCard',
      removeCard: 'removePreviewCard',
    }),
    ...mapMutations({
      selectCard: 'selectCard',
      clearLibrary: 'clearLibrary',
    }),
    calculateTotalPrice(card) {
      const totalCost = card.quantity * card.usd;
      return totalCost.toFixed(2);
    },
    totalNumberofCards(cards) {
      const sum = (acc, card) => acc + card.quantity;
      return cards.reduce(sum, 0);
    },
  },
};
</script>

<style scoped>
</style>
