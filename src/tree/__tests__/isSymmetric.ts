import { isSymmetric } from "../isSymmetric"
import TreeNode from "../TreeNode"

describe("isSymetric function", () => {
  test("should return true for empty tree", () => {
    expect(isSymmetric(null)).toBe(true)
  })

  test("should return true for leaf", () => {
    const tree = new TreeNode(1)

    expect(isSymmetric(tree)).toBe(true)
  })

  test("should return true for leaf", () => {
    const tree = new TreeNode(1)

    expect(isSymmetric(tree)).toBe(true)
  })

  test("should return true for simple symmetric tree", () => {
    const tree = new TreeNode(1, new TreeNode(2), new TreeNode(2))

    expect(isSymmetric(tree)).toBe(true)
  })

  test("should return true for complex symmetric tree", () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, new TreeNode(3)),
    )

    expect(isSymmetric(tree)).toBe(true)
  })

  test("should return false for simple asymmetric tree", () => {
    const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))

    expect(isSymmetric(tree)).toBe(false)
  })

  test("should return false for complex asymmetric tree", () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(2)),
      new TreeNode(2, new TreeNode(2)),
    )

    expect(isSymmetric(tree)).toBe(false)
  })

  test("should return false for complex asymmetric tree with different depth on the left and on the right", () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, new TreeNode(3, new TreeNode(4))),
    )

    expect(isSymmetric(tree)).toBe(false)
  })
})
