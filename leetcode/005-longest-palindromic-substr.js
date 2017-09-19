/*
005 Longest Palindromic Substring

Given a string `s`, find the longest palindromic substring in `s`.

Example:
Input: "babad"
Output: "bab" // Note: "aba" is also a valid answer.

Example:
Input: "cbbd"
Output: "bb"

Pseudocode:
 * Expand around center!
*/

const longestPalindrome = function(s) {

    if (s.length === 1) {
        return s;
    }

    let result = '';
    
    for (let i = 0; i < s.length; i++) {

        let palOdd = getPalindrome(s, i - 1, i + 1, s[i]); // Odd
        let palEven = getPalindrome(s, i, i + 1, ''); // Even

        if (palOdd.length > result.length) result = palOdd;
        if (palEven.length > result.length) result = palEven;
    }
    
    return result;
};

const getPalindrome = function(substr, l, r, palindrome) {
  while (l >= 0 && r < substr.length && substr[l] === substr[r]) {
    palindrome = substr[l] + palindrome + substr[r];
    l--;
    r++;
  }
  return palindrome;
}
