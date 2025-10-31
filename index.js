/**
 * Count Items Matching a Rule
 *
 * Given an array of items where each item is [type, color, name],
 * and a rule defined by ruleKey and ruleValue, return the number of
 * items that match the rule.
 *
 * @param {string[][]} items
 * @param {"type"|"color"|"name"} ruleKey
 * @param {string} ruleValue
 * @returns {number}
 */
function countMatches(items, ruleKey, ruleValue) {
    const keyIndex =
    ruleKey === "type" ? 0 :
    ruleKey === "color" ? 1 :
    2;

  // Step 2: Filter items that match and count them
  return items.filter(item => item[keyIndex] === ruleValue).length;
}

module.exports = countMatches;