/**
 * Test suite for Count Items Matching a Rule
 */

const countMatches = require('./index');

describe('Count Items Matching a Rule', () => {
  test('example 1 from README', () => {
    const items = [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'lenovo'],
      ['phone', 'gold', 'iphone'],
    ];
    expect(countMatches(items, 'color', 'silver')).toBe(1);
  });

  test('example 2 from README', () => {
    const items = [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'phone'],
      ['phone', 'gold', 'iphone'],
    ];
    expect(countMatches(items, 'type', 'phone')).toBe(2);
  });

  test('no matches', () => {
    const items = [
      ['pen', 'black', 'bic'],
      ['pencil', 'yellow', 'dixon'],
    ];
    expect(countMatches(items, 'color', 'blue')).toBe(0);
  });

  test('empty items returns 0', () => {
    expect(countMatches([], 'name', 'x')).toBe(0);
  });

  test('matches by name', () => {
    const items = [
      ['toy', 'red', 'car'],
      ['toy', 'red', 'ball'],
      ['toy', 'blue', 'car'],
    ];
    expect(countMatches(items, 'name', 'car')).toBe(2);
  });
});