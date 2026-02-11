/**
* Contains Duplicate (easy)
*
* Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
*
* Example 1:
*   Input: nums = [1, 2, 3, 3]
*   Output: true
*    
* Example 2:
*   Input: nums = [1, 2, 3, 4]
*   Output: false
*/

// Time: O(n)
// Memory: O(n)

class Solution {
    hasDuplicate(nums: number[]): boolean {
        const numSet = new Set<number>(nums)
        // Set keeps only unique values; duplicates shrink the size relative to nums.length
        return numSet.size < nums.length
    }
}


