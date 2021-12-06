const sum = require('./som.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 4)).toBe(5);
});