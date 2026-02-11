/**
 * Valid Palindrome
 * 
 * Given a string s, return true if it is a palindrome, otherwise return false.
 * A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
 * Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
 * 
 * Example 1:
 *  Input: s = "Was it a car or a cat I saw?"
 *  Output: true
 * Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.
 * 
 * Example 2:
 *  Input: s = "tab a cat"
 *  Output: false
 * Explanation: "tabacat" is not a palindrome.
 * 
 * Constraints:
 *  1 <= s.length <= 1000
 *  s is made up of only printable ASCII characters.
 * 
 * Time: O(n)
 * Space: O(1) 
 */

class ValidPalindrome {

    isPalindrome(s: string): boolean {
        // Two pointers: l from the start, r from the end; meet in the middle.
        for (let l = 0, r = s.length - 1; l < r; l++, r--) {
            // Skip non-alphanumeric characters from the left.
            while (l < r && !/[a-zA-Z\d]/.test(s[l])) {
                l++
            }
            // Skip non-alphanumeric characters from the right.
            while (l < r && !/[a-zA-Z\d]/.test(s[r])) {
                r--
            }
            // Compare current pair case-insensitively; mismatch means not a palindrome.
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }
        }
        return true
    }

}

const validPalindrome = new ValidPalindrome()

console.log(validPalindrome.isPalindrome('Was it a car or a cat I saw?'))
console.log(validPalindrome.isPalindrome('tab a cat'))
