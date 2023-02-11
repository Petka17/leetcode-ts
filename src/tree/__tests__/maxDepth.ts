import { maxDepth } from "../maxDepth"
import TreeNode from "../TreeNode"

describe("maxDepth function", () => {
  test("should return zero for empty tree", () => {
    expect(maxDepth(null)).toBe(0)
  })

  test("should return one for leaf element", () => {
    const tree = new TreeNode(9)

    expect(maxDepth(tree)).toBe(1)
  })

  test("should return two if the node has only leafs", () => {
    const tree = new TreeNode(9, new TreeNode(2))

    expect(maxDepth(tree)).toBe(2)
  })

  test("should return correct value for more complex case", () => {
    const tree = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    )

    expect(maxDepth(tree)).toBe(3)
  })
})
