import Vue from 'vue';
import Main from './Main';

describe('Main.vue', () => {
  xit('should render correct contents', () => {
    const Constructor = Vue.extend(Main);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent).to.equal(
      'Search for your card',
    );
  });
});
