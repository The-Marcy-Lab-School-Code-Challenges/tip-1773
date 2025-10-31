# Kids With the Greatest Number of Candies

### Instructions

- **Clone** this assignment to your `tip-challenges` directory.
- **Implement** your solution in `index.js` using JavaScript.
- **Test** your code thoroughly (see Testing below).
- **Commit and push** your changes to GitHub by the end of class.
- **Verify** in your browser that the solution is visible in your remote repo on GitHub.

---

### Problem

There are \(n\) kids with candies. You are given:

- **`candies`**: an integer array where `candies[i]` is the number of candies the i-th kid has
- **`extraCandies`**: an integer denoting the number of extra candies you have

Return a boolean array `result` of length \(n\) where `result[i]` is `true` if, after giving the i-th kid all the `extraCandies`, they will have the greatest number of candies among all the kids, otherwise `false`.

Note: Multiple kids can tie for the greatest number of candies.

---

### Examples

Example 1

```txt
Input:  candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
Explanation:
- Kid 1 → 2 + 3 = 5 (greatest)
- Kid 2 → 3 + 3 = 6 (greatest)
- Kid 3 → 5 + 3 = 8 (greatest)
- Kid 4 → 1 + 3 = 4 (not greatest)
- Kid 5 → 3 + 3 = 6 (greatest)
```

Example 2

```txt
Input:  candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false]
Explanation: There is only 1 extra candy. Kid 1 will always have the greatest number.
```

Example 3

```txt
Input:  candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
```

---

### Testing

- Tests are defined in `index.test.js`.
- Run `npm i` to install dependencies and then `npm test` for running the tests

#### Test Suite (Jest)

Below is a representative Jest suite covering the examples and common edge cases:

```javascript
// index.test.js
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
```