import { isValid } from "../validParentheses"

describe("isValid function", () => {
  test("should return true for empty string", () => {
    expect(isValid("")).toBe(true)
  })

  test("should return false for simple open parenthes", () => {
    expect(isValid("(")).toBe(false)
  })

  test("should return false for unbalanced parentheses", () => {
    expect(isValid("([)]")).toBe(false)
    expect(isValid("{[}]")).toBe(false)
    expect(isValid("[{]}")).toBe(false)
  })

  test("should return true for balanced parentheses", () => {
    expect(isValid("([{}])")).toBe(true)
  })
})
