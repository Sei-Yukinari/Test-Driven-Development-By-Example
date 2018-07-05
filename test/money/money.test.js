import assert from 'power-assert';
import dollar from '../../src/money/dollar';

test('dollar', () => {
  const five = new dollar(5);
  let product = five.times(2);
  assert(10 === product.amount);
  product = five.times(3);
  assert(15 === product.amount);
});
