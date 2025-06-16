const { isEven } = require('./script');

test('returns true for even numbers', () => {
  expect(isEven(2)).toBe(true);
});
