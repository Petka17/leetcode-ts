import { hasPathSum } from "../hasPathSum"
import TreeNode from "../TreeNode"

describe("hasPathSum function", () => {
  test("should return false for empty tree", () => {
    expect(hasPathSum(null, 10)).toEqual(false)
  })

  test("should return true for single node tree that equal to the target value", () => {
    const tree = new TreeNode(10)
    expect(hasPathSum(tree, 10)).toEqual(true)
  })

  test("should return false for single node tree that not equal to the target value", () => {
    const tree = new TreeNode(5)
    expect(hasPathSum(tree, 10)).toEqual(false)
  })

  test("should return true for tree with without right child when sum on root value and left leaf child value equal target", () => {
    const tree = new TreeNode(5, new TreeNode(5))
    expect(hasPathSum(tree, 10)).toEqual(true)
  })

  test("should return true for tree with without left child when sum on root value and right leaf child value equal target", () => {
    const tree = new TreeNode(5, null, new TreeNode(5))
    expect(hasPathSum(tree, 10)).toEqual(true)
  })
})
