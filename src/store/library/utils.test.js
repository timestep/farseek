import utils from './utils';

describe('library utils funcs', () => {
  describe('getter utils', () => {
    it('check if same card', () => {
      const loadCard = utils.isSameCard({ id: 1 });
      const actual = loadCard({ id: 1 });
      console.log(loadCard);
      expect(actual).to.equal(true);
    });
  });
});
