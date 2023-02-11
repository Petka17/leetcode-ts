/*
 * Ransom Note
 *
 * Given two strings ransomNote and magazine,
 * return true if ransomNote can be constructed
 * by using the letters from magazine
 * and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 *
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 *
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 */

export function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomeNoteLetters = ransomNote.split("").sort()
  const magazineLetters = magazine.split("").sort()

  let index = 0

  for (const letter of ransomeNoteLetters) {
    index = magazineLetters.indexOf(letter, index) + 1

    if (index === 0) return false
  }

  return true
}
