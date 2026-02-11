/**
 * Valid Parentheses
 * 
 * You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
 * 
 * The input string s is valid if and only if:
 *  - Every open bracket is closed by the same type of close bracket.
 *  - Open brackets are closed in the correct order.
 *  - Every close bracket has a corresponding open bracket of the same type.
 * 
 * Return true if s is a valid string, and false otherwise.
 * 
 * Example 1:
 *  Input: s = "[]"
 *  Output: true
 * 
 * Example 2:
 *  Input: s = "([{}])"
 *  Output: true
 * 
 * Example 3:
 *  Input: s = "[(])"
 *  Output: false
 * Explanation: The brackets are not closed in the correct order.
 * 
 * Constraints:
 *  1 <= s.length <= 1000
 *  
 * Time: O(n)
 * Space: O(n)
 */

class ValidParentheses {

    isValid(s: string): boolean {
        // Map each opening bracket to its expected closing bracket.
        const openToClose = new Map<string, string>([
            ['(', ')'],
            ['[', ']'],
            ['{', '}']
        ])
        // Stack of opening brackets; top must match the next closing bracket.
        const stack: string[] = []

        for (const c of s) {
            if (openToClose.has(c)) {
                stack.push(c)
                continue
            }
            // Closing bracket: stack must be non-empty and top must match this closer.
            if (!stack.length || c !== openToClose.get(stack.pop()!)) {
                return false
            }
        }
        // Valid only if every opening bracket was matched (stack is empty).
        return stack.length === 0
    }
}

const validParentheses = new ValidParentheses()

console.log(validParentheses.isValid('[]'))
console.log(validParentheses.isValid('([{}])'))
console.log(validParentheses.isValid('[(])'))