import { searchMatrix } from "../searchIn2DMatrix"

describe("searchIn@DMatrix function", () => {
  test("shouldn't find element in the empty array", () => {
    expect(searchMatrix([[]], 1)).toBe(false)
  })

  test("should find element in the single element array", () => {
    expect(searchMatrix([[1]], 1)).toBe(true)
  })

  test("shouldn't find element that is less than the first element in the first array", () => {
    expect(searchMatrix([[2, 3]], 1)).toBe(false)
  })

  test("should find element in the last row", () => {
    expect(
      searchMatrix(
        [
          [1, 2, 3],
          [4, 5, 5],
          [6, 8, 9],
        ],
        9,
      ),
    ).toBe(true)
  })

  test("should find element in the first row", () => {
    expect(
      searchMatrix(
        [
          [1, 2, 3],
          [4, 5, 5],
          [6, 8, 9],
        ],
        3,
      ),
    ).toBe(true)
  })

  test("should find element when the matrix has only one column", () => {
    expect(searchMatrix([[1], [4], [6]], 4)).toBe(true)
  })

  test("shouldn't find element that could be in the middle of the matrix", () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 12, 16, 20],
          [23, 30, 34, 50],
        ],
        11,
      ),
    ).toBe(false)
  })

  test("should find element in the middle of the matrix", () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        16,
      ),
    ).toBe(true)
  })
})
