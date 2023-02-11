/*
 * Pascal's Triangle
 *
 * Given an integer numRows,
 * return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle,
 * each number is the sum of the two numbers directly above it.
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 */

export function generate(numRows: number): number[][] {
  if (numRows === 0) return []

  const triangle = [[1]]

  for (let i = 1; i < numRows; i++) {
    triangle.push(getNextRow(triangle[i - 1]))
  }

  return triangle
}

function getNextRow(nums: number[]): number[] {
  const result = [1]

  for (let i = 1; i < nums.length; i++) {
    result.push(nums[i] + nums[i - 1])
  }

  result.push(1)

  return result
}
