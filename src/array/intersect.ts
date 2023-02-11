/*
 * Intersection of Two Arrays II
 *
 * Given two integer arrays `nums1` and `nums2`,
 * return an array of their intersection.
 * Each element in the result must appear as many times
 * as it shows in both arrays
 * and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * Explanation: [9,4] is also accepted.
 */

export function intersect(nums1: number[], nums2: number[]): number[] {
  const mapper = nums1.reduce<Record<number, number>>((mapper, num) => {
    mapper[num] = (mapper[num] ?? 0) + 1
    return mapper
  }, {})

  return nums2.reduce<number[]>((result, num) => {
    if (mapper[num]) {
      result.push(num)
      mapper[num] -= 1
    }

    return result
  }, [])
}
