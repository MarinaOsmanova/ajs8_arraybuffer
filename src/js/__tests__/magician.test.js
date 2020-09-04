import Magician from '../magician';

test('attack of magician should be 10', () => {
  const unit = new Magician('warrior');
  expect(unit.attack).toEqual(10);
});
