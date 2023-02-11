/*
 * Valid Anagram
 *
 * Given two strings s and t,
 * return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase
 * formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 */

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const mapper: Record<string, number> = {}
  let key: string

  for (let i = 0; i < s.length; i++) {
    key = s.charAt(i)

    mapper[key] = (mapper[key] ?? 0) + 1
  }

  for (let i = 0; i < t.length; i++) {
    key = t.charAt(i)

    if (typeof mapper[key] === "undefined" || mapper[key] === 0) {
      return false
    }

    mapper[key] -= 1
  }

  return true
}
