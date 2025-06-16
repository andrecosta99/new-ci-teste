import { isEven } from './script.js';

test('even number returns true', () => {
  expect(isEven(4)).toBe(true);
});

test('odd number returns false', () => {
  expect(isEven(5)).toBe(false);
});
