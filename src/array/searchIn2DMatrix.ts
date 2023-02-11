export function searchMatrix(matrix: number[][], target: number): boolean {
  const rowIndex = rowBinarySearch(matrix, target, 0, matrix.length - 1)

  if (rowIndex === -1) return false

  const targetArray = matrix[rowIndex]

  return binarySearch(targetArray, target, 0, targetArray.length - 1)
}

export function rowBinarySearch(
  matrix: number[][],
  target: number,
  start: number,
  end: number,
): number {
  if (start === 0 && end === 0) {
    const val = matrix[0][0]

    if (!val || val > target) {
      return -1
    }
  }

  if (start === matrix.length - 1) {
    return start
  }

  if (end - start === 1) {
    if (matrix[start][0] === target) return start
    if (matrix[end][0] > target) return start

    if (matrix[end][0] === target) return end
    if (matrix[start][0] < target) return end
  }

  const middle = start + Math.round((end - start) / 2)

  return matrix[middle][0] >= target
    ? rowBinarySearch(matrix, target, start, middle)
    : rowBinarySearch(matrix, target, middle, end)
}

function binarySearch(
  nums: number[],
  target: number,
  start: number,
  end: number,
): boolean {
  if (nums[start] === target || nums[end] === target) {
    return true
  }

  if (start === 0 && end === 0 && nums[0] > target) {
    return false
  }

  if (end - start === 1 && nums[start] !== target && nums[end] !== target) {
    return false
  }

  if (start === nums.length - 1 && nums[start] < target) {
    return false
  }

  const middle = start + Math.round((end - start) / 2)

  if (nums[middle] === target) return true

  // return false
  return nums[middle] > target
    ? binarySearch(nums, target, start, middle)
    : binarySearch(nums, target, middle, end)
}
