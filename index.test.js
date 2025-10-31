/**
 * Test suite for Kids With the Greatest Number of Candies
 */

const kidsWithCandies = require('./index');

describe('Kids With the Greatest Number of Candies', () => {
  test('example 1', () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true, true, true, false, true,
    ]);
  });

  test('example 2', () => {
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
      true, false, false, false, false,
    ]);
  });

  test('example 3', () => {
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([
      true, false, true,
    ]);
  });

  test('single kid always greatest', () => {
    expect(kidsWithCandies([7], 0)).toEqual([true]);
  });

  test('all equal candies with zero extra', () => {
    expect(kidsWithCandies([5, 5, 5], 0)).toEqual([true, true, true]);
  });

  test('empty list yields empty result', () => {
    expect(kidsWithCandies([], 5)).toEqual([]);
  });

  test('large extra makes everyone greatest', () => {
    expect(kidsWithCandies([1, 2, 3], 100)).toEqual([true, true, true]);
  });
});