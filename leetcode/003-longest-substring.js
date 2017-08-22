/*
003 Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring
without repeating characters.

Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. 
Note that the answer must be a substring, 
"pwke" is a subsequence and not a substring.

Pseudocode:
1. Check if string has the character, if not append it
2. When encounters the same character, compare to length variable
3. If longer, make it longest
4. Reset string, adding current character
*/

const lengthOfLongestSubstring = function(s) {
  let longest = 0;
  let substring = '';

  for (let i = 0; i < s.length; i++) {
    let index = substring.indexOf(s[i]);

    if (index === -1) {
      substring += s[i];
    } else {
      longest = Math.max(longest, substring.length);
      substring = substring.slice(index + 1);
      substring += s[i];
    }
  }
  longest = Math.max(longest, substring.length);

  return longest;
};
