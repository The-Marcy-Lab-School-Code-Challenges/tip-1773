# Count Items Matching a Rule

### Overview
Given an array `items`, where each `items[i] = [type_i, color_i, name_i]`, and a rule defined by `ruleKey` and `ruleValue`, return the count of items that match the rule.

An item matches if exactly one of the following is true:
- `ruleKey === "type"` and `ruleValue === type_i`
- `ruleKey === "color"` and `ruleValue === color_i`
- `ruleKey === "name"` and `ruleValue === name_i`

### Instructions
- Implement your solution in `index.js`.
- Run tests to verify your solution (see Testing).
- Commit and push your changes when done.

### Examples
Example 1

```js
const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
const ruleKey = "color";
const ruleValue = "silver";
// Output: 1 (only ["computer","silver","lenovo"]) matches
```

Example 2

```js
const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"],
];
const ruleKey = "type";
const ruleValue = "phone";
// Output: 2
```

### Testing
This repository includes a test file `index.test.js`.
Run the tests:

```bash
npm i 
npm test
```
