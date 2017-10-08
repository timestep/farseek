import { isSameCard } from './utils';

describe('library utils funcs', () => {
  describe('getter utils', () => {
    it('check if same card', () => {
      const loadCard = isSameCard({ id: 1 });
      expect(loadCard({ id: 1 })).toEqual(true);
    });
  });
});
