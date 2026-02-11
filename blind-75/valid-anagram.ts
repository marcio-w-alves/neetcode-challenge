/**
 * Valid Anagram (easy)
 * 
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
 * 
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * 
 * Example 1:
 *  Input: s = "racecar", t = "carrace"
 *  Output: true
 * 
 * Example 2:
 *  Input: s = "jar", t = "jam"
 *  Output: false
 * 
 * Constraints:
 *  's' and 't' consist of lowercase English letters.
 * 
 * Time: O(n + m)
 * Space: O(1)
 */


class ValidAnagram {

    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const ocurr: number[] = new Array(26).fill(0)

        for (let i = 0; i < s.length; i++) {
            // Index by charCode - 97 ('a'); increment for s, decrement for t; anagram iff all stay 0
            ocurr[s.charCodeAt(i) - 97] += 1
            ocurr[t.charCodeAt(i) - 97] -= 1
        }

        return ocurr.every((c) => c === 0)
    }

}

const validAnagram = new ValidAnagram()

console.log(validAnagram.isAnagram('racecar', 'carrace'))
console.log(validAnagram.isAnagram('jar', 'jam'))