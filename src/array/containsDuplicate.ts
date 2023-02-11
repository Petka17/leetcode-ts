export function containsDuplicate(nums: number[]): boolean {
  const usedNumbers: Set<number> = new Set()

  for (const num of nums) {
    if (usedNumbers.has(num)) {
      return true
    }

    usedNumbers.add(num)
  }

  return false
}
