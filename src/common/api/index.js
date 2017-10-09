import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.scryfall.com/',
  timeout: 1000,
});

const getCardSearch = async searchTerm => {
  const { data } = await api.get(`/cards/named?fuzzy=${searchTerm}`);
  return data;
};

export default {
  getCardSearch,
};
