import assert from 'power-assert';

import dollar from '../../src/money/dollar';

test('dollar', () => {
  const five = new dollar(5);
  five.times(2);
  assert(10 === five.amount);
});
