import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.scryfall.com/',
  timeout: 1000,
});

const getCardSearch = searchTerm =>
  api.get(`/cards/named?fuzzy=${searchTerm}`)
    .then(res => res.data);

export default {
  getCardSearch,
};
