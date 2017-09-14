<template>
  <div class="flex flex-column items-center">
    <div class="f1 white">
      Library
    </div>
    <button class="w-25 mb3" v-on:click="addCard"> Add Card </button>
    <table class="w-100 white">
      <tr>
        <th>Quantity</th>
        <th>Name</th>
        <th>Price</th>
        <th>Total Price</th>
      </tr>
      <tr
        class="cursor"
        v-bind:key="index"
        v-for="(card, index) in cards"
        v-on:mouseover="selectCard(card)"
      >
        <td>{{card.quantity}}</td>
        <td>{{card.name}}</td>
        <td>USD {{card.usd}}</td>
        <td>USD {{calculateTotalPrice(card)}} </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';

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
    }),
    ...mapMutations({
      selectCard: 'selectCard',
    }),
    calculateTotalPrice(card) {
      const totalCost = card.quantity * card.usd;
      return totalCost.toFixed(2);
    },
  },
};
</script>

<style scoped>
</style>
