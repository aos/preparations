/* 013 Roman to Integer

Given a roman numeral, convert it to an integer.

Input range: 1 - 3999

Example -
Input: MMI
Output: 2001
*/

const romans = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const romanToInt = (string) => {
  let total = romans[string[string.length - 1]];

  for (let i = string.length - 2; i >= 0; i--) {
    
    if (romans[string[i]] < romans[string[i + 1]]) {
      total -= romans[string[i]];
    }
    else {
      total += romans[string[i]];
    }
  }

  return total;
}

console.log(romanToInt('MCMXCVI'));
