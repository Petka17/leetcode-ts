import { containsDuplicate } from "../containsDuplicate"

describe("containsDuplicate function", () => {
  test("should return false on empty array", () => {
    expect(containsDuplicate([])).toBe(false)
  })

  test("should return false on array without duplicates", () => {
    expect(containsDuplicate([1, 2, 3])).toBe(false)
  })

  test("should return true on array with duplicates", () => {
    expect(containsDuplicate([1, 2, 2, 3])).toBe(true)
  })
})
